import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../redux/AdminProductReducer/action";
let initialState = {
  media: [],
  pack_size: "",
  price: 0,
  quantity: "",
  brand_name: "",
  rating: "",
  rating_count: "",
  star_rating_percentage: "",
  name: "",
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
          name === "price" ||
          name === "quantity" ||
          name === "rating" ||
          name === "rating_count" ||
          name === "star_rating_percentage"
            ? +value
            : value,
      };
    });
  };
  const handleImageChange = (event) => {
    const mediaObject = {
      url: event.target.value,
      _id: "6456b388b5bdcb2274a28572",
    };
    setProduct((prevFormData) => ({
      ...prevFormData,
      media: [mediaObject],
    }));
  };
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
            <h2 className="h5 mb-4">Add Product Details</h2>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="row m-0">
                <div className="col-md-6 m-0">
                  <div>
                    <label for="first_name">Product Name</label>{" "}
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      name="name"
                      placeholder="product name"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6 m-0">
                  <div>
                    <label for="last_name">Product Size</label>{" "}
                    <input
                      className="form-control"
                      id="pack_size"
                      type="text"
                      name="pack_size"
                      placeholder="pack_size"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6 m-0">
                  <div>
                    <label for="last_name">Product Brand_name</label>{" "}
                    <input
                      className="form-control"
                      id="brand_name"
                      type="text"
                      name="brand_name"
                      placeholder="brand_name"
                      onChange={(e) => handleChange(e)}
                      required
                    ></input>
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <label for="zip">Product Image</label>{" "}
                    <input
                      className="form-control"
                      id="media"
                      type="text"
                      name="media"
                      placeholder="Product Image URL"
                      onChange={handleImageChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 m-0">
                  <div>
                    <label for="last_name">Product Price</label>{" "}
                    <input
                      className="form-control"
                      id="price"
                      type="number"
                      name="price"
                      placeholder="price"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6 m-0">
                  <div>
                    <label for="last_name">Product Quantity</label>{" "}
                    <input
                      className="form-control"
                      id="quantity"
                      type="text"
                      name="quantity"
                      placeholder="product quantity"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 m-0">
                  <div className="form-group">
                    <label for="address">Discount</label>{" "}
                    <input
                      className="form-control"
                      id="star_rating_percentage"
                      type="text"
                      name="star_rating_percentage"
                      placeholder="star_rating_percentage"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6 m-0">
                  <div className="form-group">
                    <label for="city">Avarage Rating</label>{" "}
                    <input
                      className="form-control"
                      id="rating"
                      type="text"
                      name="rating"
                      placeholder="rating"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 m-0">
                  <div className="form-group">
                    <label for="city">Total Rating</label>{" "}
                    <input
                      className="form-control"
                      id="rating_count"
                      type="text"
                      name="rating_count"
                      placeholder="rating_count"
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
                  Save Product
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
