import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

export default function CatchMap() {
  // Stores the current selected position as:
  // [latitude, longitude]
  // Starts as null because the user's location is not known yet.
  const [position, setPosition] = useState(null);

  // Creates a reference to the Leaflet Marker component.
  // This lets us access the marker directly after it has been dragged.
  const markerRef = useRef(null);

  // Runs once when the CatchMap component first loads.
  useEffect(() => {
    // Ask the browser/device for the user's current location.
    navigator.geolocation.getCurrentPosition(
      // Runs if the location request is successful.
      (location) => {
        // Store the latitude and longitude in React state.
        setPosition([
          location.coords.latitude,
          location.coords.longitude,
        ]);

        // Useful during development to see how accurate the GPS reading is.
        // Accuracy is returned in metres.
        console.log("GPS accuracy:", location.coords.accuracy);
      },

      // Runs if the browser cannot obtain the user's location.
      (error) => {
        console.error("Location error:", error);
      }
    );
  }, []); // Empty dependency array means this effect runs once on mount.

  // Runs when the user finishes dragging the map marker.
  function handleDragEnd() {
    // Get the Leaflet marker object from the ref.
    const marker = markerRef.current;

    // Make sure the marker exists before trying to use it.
    if (marker) {
      // Get the marker's new latitude and longitude.
      const newPosition = marker.getLatLng();

      // Update React state with the user's corrected position.
      setPosition([newPosition.lat, newPosition.lng]);

      console.log("New position:", newPosition);
    }
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
      style={{ height: "400px", width: "100%" }}
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