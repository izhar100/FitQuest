import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSingleEditProductData,
  getSingleProductData,
} from "../../redux/AdminProductReducer/action";

const AddProduct = () => {
  const { id } = useParams();
  const EditData = useSelector((store) => store.adminProductReducer.products);
  const [editTitle, setEditTitle] = useState("");
  const [editImage_url, setEditImage_url] = useState("");
  const [editPack_size, setEditPack_size] = useState("");
  const [editFinal_price, setEditFinal_price] = useState("");
  const [editMRP, setEditMRP] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editAvg_rating, setEditAvg_rating] = useState("");
  const [editTotal_ratings, setEditTotal_ratings] = useState("");
  const [editDiscount, setEditDiscount] = useState("");
  useEffect(() => {
    const productData = EditData.find((el) => el._id === id);
    (productData && setEditTitle(productData.product_title)) ||
      setEditImage_url(productData.image_url) ||
      setEditPack_size(productData.pack_size) ||
      setEditFinal_price(productData.final_price) ||
      setEditMRP(productData.MRP) ||
      setEditCategory(productData.category) ||
      setEditAvg_rating(productData.avg_rating) ||
      setEditTotal_ratings(productData.total_ratings) ||
      setEditDiscount(productData.discount);
  }, []);

  console.log("editproduct", editTitle);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const newData = {
      title: editTitle,
      image: editImage_url,
      duration: editPack_size,
      distance: editFinal_price,
      caloriesBurned: editMRP,
      terrain: editCategory,
      pace: editAvg_rating,
      type: editTotal_ratings,
    };
    console.log("newData", newData);
    dispatch(getSingleEditProductData(id, newData));
    navigate("/product-list");
  };

  return (
    <>
      <div className="row mt-3">
        <div className="col-12 col-xl-12">
          <div className="card card-body border-0 shadow mb-4">
            <h2 className="h5 mb-4">Edit Workout Details</h2>
            <form
              onSubmit={(e) => {
                handleEditSubmit(e);
              }}
            >
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div>
                    <label for="first_name">Workout Title</label>{" "}
                    <input
                      className="form-control"
                      id="title"
                      type="text"
                      name="title"
                      placeholder="title"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div>
                    <label for="last_name">Workout duration</label>{" "}
                    <input
                      className="form-control"
                      id="duration"
                      type="text"
                      name="duration"
                      placeholder="duration"
                      value={editPack_size}
                      onChange={(e) => setEditPack_size(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6 mb-3">
                  <div>
                    <label for="last_name">Workout distance</label>{" "}
                    <select
                      className="form-control"
                      id="distance"
                      type="text"
                      name="distance"
                      placeholder="distance"
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
                      required
                    >
                      <option value="adult">Adult</option>
                      <option value="Child">Child</option>
                      <option value="elderly">Elderly</option>
                    </select>
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
                      placeholder="Workout image"
                      value={editImage_url}
                      onChange={(e) => setEditImage_url(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div>
                    <label for="last_name">Workout Calories Burned</label>{" "}
                    <input
                      className="form-control"
                      id="caloriesBurned"
                      type="number"
                      name="caloriesBurned"
                      placeholder="caloriesBurned"
                      value={editFinal_price}
                      onChange={(e) => setEditFinal_price(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div>
                    <label for="last_name">Workout terrain</label>{" "}
                    <input
                      className="form-control"
                      id="terrain"
                      type="text"
                      name="terrain"
                      placeholder="terrain"
                      value={editMRP}
                      onChange={(e) => setEditMRP(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <label for="address">pace</label>{" "}
                    <input
                      className="form-control"
                      id="pace"
                      type="text"
                      name="pace"
                      placeholder="pace"
                      value={editDiscount}
                      onChange={(e) => setEditDiscount(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <label for="city">Workout type</label>{" "}
                    <input
                      className="form-control"
                      id="type"
                      type="text"
                      name="type"
                      placeholder="type"
                      value={editAvg_rating}
                      onChange={(e) => setEditAvg_rating(e.target.value)}
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
