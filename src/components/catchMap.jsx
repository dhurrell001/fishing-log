import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

export default function CatchMap({ onPositionChange }) {
  // Stores the current selected position as:
  // [latitude, longitude]
  // Starts as null because the user's location is not known yet.
  const [position, setPosition] = useState(null);

  // Creates a reference to the Leaflet Marker component.
  // This lets us access the marker directly after it has been dragged.
  const markerRef = useRef(null);

  // Runs once when the CatchMap component first loads.
const [locationError, setLocationError] = useState("");

useEffect(() => {
    // Use the browser's geolocation API to get the user's current position.
  navigator.geolocation.getCurrentPosition(
    // If the user allows location access, update the position state with the user's current latitude and longitude.
    (location) => {
      setPosition([
        location.coords.latitude,
        location.coords.longitude,
      ]);
      // Call the onPositionChange callback with the user's current position.
        onPositionChange([
    location.coords.latitude,
    location.coords.longitude,
  ]);
    },
    // If the user denies location access or an error occurs, log the error and set an error message.
    (error) => {
      console.error(error);
      setLocationError(error.message);
    }
  );
}, []);

  // Runs when the user finishes dragging the map marker.
  function handleDragEnd() {
    // Get the Leaflet marker object from the ref.
    const marker = markerRef.current;

    // Make sure the marker exists before trying to use it.
    if (marker) {
      // Get the marker's new latitude and longitude.
      const newPosition = marker.getLatLng();

      // Update React state with the user's corrected position.
      const updatedPosition = [
      newPosition.lat,
      newPosition.lng,
    ];
    // Update the position state and call the onPositionChange callback with the new position.
    setPosition(updatedPosition);
    onPositionChange(updatedPosition);

      console.log("New position:", newPosition);
    }
  }
// If there was an error getting the user's location, display the error message.
if (locationError) {
  return <p>Location error: {locationError}</p>;
}
  // Do not render the map until a GPS position has been received.
  if (!position) {
    return <p>Getting location...</p>;
  }

  return (
    <MapContainer
      // Centre the map on the current position.
      center={position}

      // Controls how close the initial map view is.
      zoom={16}

      // Leaflet needs the map container to have a defined height.
      style={{ height: "400px", width: "100%" , borderRadius: "10px" }}
    >
      {/* OpenStreetMap provides the map tiles displayed by Leaflet. */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        // Place the marker at the current position.
        position={position}

        // Allow the user to manually correct the location.
        draggable={true}

        // Connect this Marker to markerRef.
        ref={markerRef}

        // Run handleDragEnd when the user finishes moving the marker.
        eventHandlers={{
          dragend: handleDragEnd,
        }}
      />
    </MapContainer>
  );
}