import "./Populare.css";
import { useNavigate } from "react-router-dom";
const Populare = ({ url, title, image }) => {
  const navigate = useNavigate();
  return (
    <div className="poular">
      <div className="exer" onClick={() => navigate(`./${url}`)}>
        <img className="image" src={image} alt="" />
        <h1 className="text">{title}</h1>
      </div>
    </div>
  );
};

export default Populare;
