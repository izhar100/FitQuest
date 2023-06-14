import "./Populare.css";
const Populare = ({ title, image }) => {
  return (
    <div className="poular">
      <div className="exer">
        <img className="image" src={image} alt="" />
        <h1 className="text">{title}</h1>
      </div>
    </div>
  );
};

export default Populare;
