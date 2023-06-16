import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../redux/AdminProductReducer/action";
let initialState = {
  image: "",
  title: "",
  duration: "",
  distance: "",
  caloriesBurned: "",
  terrain: "",
  speed: "",
  type: "",
};

const AddProduct = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return {
        ...prev,
        [name]:
          name === "duration" ||
          name === "distance" ||
          name === "caloriesBurned" ||
          name === "speed"
            ? +value
            : value,
      };
    });
  };
  // const handleImageChange = (event) => {
  //   const mediaObject = {
  //     url: event.target.value,
  //     _id: "6456b388b5bdcb2274a28572",
  //   };
  //   setProduct((prevFormData) => ({
  //     ...prevFormData,
  //     media: [mediaObject],
  //   }));
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addProduct(product));
    console.log(initialState);
    setProduct(initialState);
    // navigate("/product-list");
  };
  return (
    <>
      <div className="row mt-3">
        <div className="col-12 col-xl-12">
          <div className="card card-body border-0 shadow mb-4">
            <h2 className="h5 mb-4">Add Workout Details</h2>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="row mt-2">
                <div className="col-md-6 m-0">
                  <div>
                    <label for="first_name">Workout Title</label>{" "}
                    <input
                      className="form-control"
                      id="title"
                      type="text"
                      name="title"
                      placeholder="product title"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6 m-0">
                  <div>
                    <label for="last_name">Workout duration</label>{" "}
                    <input
                      className="form-control"
                      id="duration"
                      type="text"
                      name="duration"
                      placeholder="duration"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row align-items-center mt-2">
                <div className="col-md-6 m-0">
                  <div>
                    <label for="last_name">Workout distance</label>{" "}
                    <input
                      className="form-control"
                      id="distance"
                      type="text"
                      name="distance"
                      placeholder="distance"
                      onChange={(e) => handleChange(e)}
                      required
                    ></input>
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <label for="zip">Workout Image</label>{" "}
                    <input
                      className="form-control"
                      id="image"
                      type="text"
                      name="image"
                      placeholder="Workout Image URL"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6 m-0">
                  <div>
                    <label for="last_name">Workout Calories Burn</label>{" "}
                    <input
                      className="form-control"
                      id="caloriesBurned"
                      type="number"
                      name="caloriesBurned"
                      placeholder="caloriesBurned"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6 m-0">
                  <div>
                    <label for="last_name">Workout terrain</label>{" "}
                    <input
                      className="form-control"
                      id="terrain"
                      type="text"
                      name="terrain"
                      placeholder="terrain"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-md-6 m-0">
                  <div className="form-group">
                    <label for="address">Workout Speed</label>{" "}
                    <input
                      className="form-control"
                      id="speed"
                      type="text"
                      name="speed"
                      placeholder="speed"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6 m-0">
                  <div className="form-group">
                    <label for="city">Workout type</label>{" "}
                    <input
                      className="form-control"
                      id="type"
                      type="text"
                      name="type"
                      placeholder="type"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3 text-end">
                <button
                  className="btn btn-warning mt-2 animate-up-2"
                  type="submit"
                >
                  Save Workout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
