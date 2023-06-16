// eslint-disable-next-line react/prop-types
const Details = ({ _id, title, type, distance, duration, image }) => {
  return (
    <div className="main">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <div>
          <span className="tle">{title}...!</span>
          <span style={{ display: "flex", gap: "1rem" }}>
            <span className="type">Type :{type}</span>
            <span className="distance">Distance :{distance}km</span>
            <span className="duration">Duration :{duration}min</span>
          </span>
          <span
            onClick={() => console.log(_id)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <span
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "2px 10px",
                width: "5rem",
                borderRadius: "5px",
                marginTop: "1rem",
              }}>
              Start
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
