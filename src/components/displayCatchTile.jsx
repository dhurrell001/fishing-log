import "./displayCatchTile.css";
export default function DisplayCatchTile(catchData) {
  console.log(catchData.catchPhoto);
  return (
    <div className="display-outer-container">
      <div className="display-catch-tile">
        <div className="catch-data">
        <h2>{catchData.fishType}</h2>
        {/* <p>Species: {catchData.fishType}</p> */}
        <p>Weight: {catchData.fishWeight} lbs</p>
        <p>Date: {catchData.catchDate}</p>
        <p>Time: {catchData.catchTime}</p>
        <p>Location: {catchData.catchLocation}</p>
        <p>Latitude: {catchData.latitude}</p>
        <p>Longitude: {catchData.longitude}</p>
        </div>
        <div className="catch-data">
          <p>Bait: {catchData.baitType}</p>
        </div>
        {catchData.catchPhoto && (
          <div className="catch-photo-container">
            <img
              className="catch-photo"
              src={URL.createObjectURL(catchData.catchPhoto)}
              alt="Catch"
            />
          </div>
          
          
        )}
        <div className = "catch-data">
          
          <p>Bait: {catchData.baitType}</p>  
              
          </div>
      </div>
    </div>
  );
}
