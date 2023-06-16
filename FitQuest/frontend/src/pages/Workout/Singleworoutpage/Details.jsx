import axios from "axios";

// eslint-disable-next-line react/prop-types
const Details = (props) => {
    // console.log(props);
  const { _id, title, type, distance, duration, image } = props;
  const handleadd = () => {
    axios
      .post(
        `https://tame-jade-cape-buffalo-suit.cyclic.app/workout/dashboard/add`,
        props
      )
      .then((response) => {
        console.log(response);
      });
  };
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
            onClick={() => handleadd()}
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
