import axios from "axios";
import { Context } from "context";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaCamera } from "react-icons/fa";

const JoinAsTeacherForm = ({ closeModal }) => {
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [bankName, setBankName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const becomeInstructor = (event) => {
    event.preventDefault();
    axios
      .post(
        `${API_BASE_URL}/make-instructor`,
        { qualification, experience, bankName, branchName, accountNumber },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);

        dispatch({
          type: "LOGIN",
          payload: res.data,
        });
        window.localStorage.setItem("user", JSON.stringify(res.data));
        window.localStorage.setItem("Role", JSON.stringify(res.data.role));
        window.location.href = "/instructor-dashboard";
      })
      .catch((err) => {
        console.error(err);
        toast.error("Onboarding failed!");
      });
  };
  const handleImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    console.log([...formData]);

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/instructor-image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch({
        type: "LOGIN",
        payload: data,
      });
      window.localStorage.setItem("user", JSON.stringify(data));
    } catch (e) {
      console.error(e);
      toast.error("Image upload failed!");
    }
  };

  useEffect(() => {
    if (user === null) navigate("/login");
  }, [user]);

  return (
    <div className="h-screen fixed inset-0 z-50 overflow-y-hidden bg-gray-100">
      <div className="w-full h-full px-20 py-8 sm:py-4 shadow-lg backdrop-blur-md backdrop-filter bg-opacity-50 relative">
        <div className="sm:mx-auto sm:w-full">
          <div className="text-center">
            <p className="mt-2 text-center text-5xl sm:text-4xl font-bold leading-9 tracking-tight text-gray-900">
              🎓 LearnOpia
            </p>
          </div>

          <h2 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
            Join Us as Instructor
          </h2>
        </div>

        <div className="mt-2 mx-96 sm:mx-auto sm:w-full ">
          <form className="space-y-4" onSubmit={becomeInstructor}>
            <div>
              <label
                htmlFor="qualification"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Qualification
              </label>
              <div className="mt-1">
                <input
                  id="qualification"
                  name="qualification"
                  type="text"
                  required
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Experience
              </label>
              <div className="mt-1">
                <select
                  id="experience"
                  name="experience"
                  required
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                >
                  <option value="">Select Experience</option>
                  <option value="0">Less than 1 Year</option>
                  <option value="1">1 Year</option>
                  <option value="2">2 Years</option>
                  <option value="3">3 or more Years</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="bankName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter your Bank Name
              </label>
              <div className="mt-1">
                <input
                  id="bankName"
                  name="bankName"
                  type="text"
                  required
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="branchName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter Your Branch Name
              </label>
              <div className="mt-1">
                <input
                  id="branchName"
                  name="branchName"
                  type="text"
                  required
                  value={branchName}
                  onChange={(e) => setBranchName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="accountNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Account Number
              </label>
              <div className="mt-1">
                <input
                  id="accountNumber"
                  name="accountNumber"
                  type="number"
                  required
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Join In
              </button>
            </div>
            <div className="text-center">
              <button
                className="text-center text-sm text-orange-400"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </form>
          <label>
            <FaCamera className="mt-2" />
            <input
              onChange={handleImage}
              type="file"
              accept="images/*"
              hidden
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default JoinAsTeacherForm;
