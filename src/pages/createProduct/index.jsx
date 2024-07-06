import { Context } from "context";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { SyncOutlined } from "@ant-design/icons";

export default function CreateProduct() {
  const [image, setImage] = useState({});
  const [title, setTitle] = useState("");
  const [totalrating, setTotalRatings] = useState();
  const [price, setPrice] = useState();
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [publication_date, setPublicationDate] = useState();
  const [isbn, setIsbn] = useState();
  const [publisher, setPublisher] = useState("");
  const [format, setFormat] = useState("");
  const [uploading, setUploading] = useState(false);
  const {
    state: { user },
  } = useContext(Context);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleImage = async (e) => {
    setUploading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/products/upload-image`,
        formData
      );
      setImage(data);
    } catch (e) {
      console.error(e);
      toast.error("Image upload failed!");
    } finally {
      setUploading(false);
    }
  };

  const handleImageRemove = async () => {
    try {
      const res = await axios.post(`${API_BASE_URL}/products/remove-image`, {
        image,
      });
      setImage({});
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/products/createproduct`,
        {
          image,
          title,
          totalrating,
          price,
          author,
          category,
          publication_date,
          isbn,
          publisher,
          format,
        }
      );
      toast.success("Great! Your product is added to shop");
      navigate("/");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <div>
      <div className="p-4 sm:p-6">
        <div>
          <div className="sm:mx-auto sm:w-full">
            <div className="text-center">
              <p className="my-2 text-center text-5xl sm:text-4xl font-bold leading-9 tracking-tight text-gray-900">
                Create Product
              </p>
            </div>

            <div className="mt-2 mx-96 sm:mx-auto sm:w-full ">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="bookTitle"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Book title
                  </label>
                  <div className="mt-1">
                    <input
                      id="bookTitle"
                      name="bookTitle"
                      type="text"
                      placeholder="e.g. Master Machine Learning"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="ratings"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Avg. Ratings of the book
                  </label>
                  <div className="mt-1">
                    <input
                      id="ratings"
                      name="ratings"
                      type="number"
                      placeholder="e.g. 4.5"
                      required
                      value={totalrating}
                      onChange={(e) => setTotalRatings(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Book Price
                    <span className="text-gray-400">(in Rupees)</span>
                  </label>
                  <div className="mt-1">
                    <input
                      id="price"
                      name="price"
                      type="number"
                      required
                      placeholder="e.g. 499 "
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="author"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Author
                  </label>
                  <div className="mt-1">
                    <input
                      id="author"
                      name="author"
                      type="text"
                      required
                      placeholder="Author Name"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Category
                  </label>
                  <div className="mt-1">
                    <input
                      id="category"
                      name="category"
                      type="text"
                      required
                      placeholder="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="publication_date"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Publication Date
                  </label>
                  <div className="mt-1">
                    <input
                      id="publication_date"
                      name="publication_date"
                      type="date"
                      required
                      value={publication_date}
                      onChange={(e) => setPublicationDate(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="isbn"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ISBN
                  </label>
                  <div className="mt-1">
                    <input
                      id="isbn"
                      name="isbn"
                      type="text"
                      required
                      placeholder="ISBN"
                      value={isbn}
                      onChange={(e) => setIsbn(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="publisher"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Publisher
                  </label>
                  <div className="mt-1">
                    <input
                      id="publisher"
                      name="publisher"
                      type="text"
                      required
                      placeholder="Publisher"
                      value={publisher}
                      onChange={(e) => setPublisher(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="format"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Format
                  </label>
                  <div className="mt-1">
                    <select
                      id="format"
                      name="format"
                      required
                      value={format}
                      onChange={(e) => setFormat(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Format</option>
                      <option value="Hardcover">Hardcover</option>
                      <option value="Paperback">Paperback</option>
                      <option value="EBook">EBook</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="image"
                    className="flex flex-row text-sm font-medium leading-6 text-gray-900"
                  >
                    Book Cover
                    <FaCamera className="text-xl ml-2" />
                  </label>
                  <div className="mt-1 flex items-center">
                    <input
                      onChange={handleImage}
                      type="file"
                      accept="images/*"
                      id="image"
                      name="image"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 text-sm sm:leading-6"
                    />
                    <RxCrossCircled onClick={handleImageRemove} />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={uploading}
                    className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    {uploading ? (
                      <SyncOutlined spin className="pt-3" />
                    ) : (
                      "Create Product"
                    )}
                  </button>
                </div>
                <div className="text-center"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
