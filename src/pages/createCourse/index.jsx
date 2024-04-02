import { Context } from "context";
import React, { useContext, useState } from "react";
import { FaCamera } from "react-icons/fa6";
import { toast } from "react-toastify";
import axios from "axios";
import { RxCrossCircled } from "react-icons/rx";

export default function CreateCourse() {
  // const [inputValue, setInputValue] = useState("");
  const [IsPaid, setIsPaid] = useState(false);
  const [cousrseTittle, setCousrseTittle] = useState("");
  const [price, setPrice] = useState();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [contentDuration, setContentDuration] = useState();
  const [image, setImage] = useState({});
  const {
    state: { user },
  } = useContext(Context);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleOptionChange = (event) => {
    setIsPaid(event.target.value === "paid");
  };
  const handleImage = async (e) => {
    // setInputValue(e.target.value);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    console.log([...formData]);

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/course/upload-image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(data);
      setImage(data);
    } catch (e) {
      console.error(e);
      toast.error("Image upload failed!");
    }
  };

  const handleImageRemove = async () => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/course/remove-image`,
        {
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      // setInputValue("");
      setImage({});
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/course/create-course`,
        {
          cousrseTittle,
          price,
          IsPaid,
          subject,
          description,
          contentDuration,
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      toast.success("Great! Now you can start adding lessons");
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
                Create Course
              </p>
            </div>

            <div className="mt-2 mx-96 sm:mx-auto sm:w-full ">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="cousrseTittle"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Course title
                  </label>
                  <div className="mt-1">
                    <input
                      id="cousrseTittle"
                      name="cousrseTittle"
                      type="text"
                      placeholder="e.g. Learn JavaScript for Scratch"
                      required
                      value={cousrseTittle}
                      onChange={(e) => setCousrseTittle(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-row space-x-8">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-blue-600"
                        value="free"
                        checked={IsPaid === false}
                        onChange={handleOptionChange}
                      />
                      <span className="ml-2">Free</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-blue-600"
                        value="paid"
                        checked={IsPaid === true}
                        onChange={handleOptionChange}
                      />
                      <span className="ml-2">Paid</span>
                    </label>
                  </div>
                </div>
                {IsPaid ? (
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Price of the Course{" "}
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
                ) : null}
                <div>
                  <label
                    htmlFor="contentDuration"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Content Duration{" "}
                    <span className="text-gray-400">(in hours)</span>
                  </label>
                  <div className="mt-1">
                    <input
                      id="contentDuration"
                      name="contentDuration"
                      type="number"
                      placeholder="e.g. 4"
                      required
                      value={contentDuration}
                      onChange={(e) => setContentDuration(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="e.g. Programming"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      type="text"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex flex-row sm:flex-row items-center">
                  <label className="cursor-pointer sm:mr-4">
                    <FaCamera className="mt-2 text-xl mr-2" />
                  </label>
                  <div className="mt-1 flex items-center">
                    <input
                      onChange={handleImage}
                      // value={inputValue}
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
                    className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Create Now
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
