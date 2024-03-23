import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Context } from "context";
import Loading from "Loading/loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });
      dispatch({
        type: "LOGIN",
        payload: data,
      });
      console.log(data.role)
      window.localStorage.setItem("user", JSON.stringify(data));
      window.localStorage.setItem("Role", JSON.stringify(data.role));
      toast.success("Welcome Back!🙇‍♂️");
      window.location.reload()
      navigate("/")
                                
    } catch (err) {
      toast.error(err.response.data);
      setEmail("")
      setPassword("")
      setLoading(false)
    }
  };

  useEffect(() => {
    if (user !== null) navigate("/");
  }, [user]);

  return (
    <div className=" flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 relative">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
            {error}
          </div>
        )}
        {loading && (
          <div className="py-2 rounded">
            <Loading />
          </div>
        )}

        <div className="sm:mx-auto sm:w-full">
          <div className="text-center">
            <p className="mt-2 text-center text-5xl sm:text-4xl font-bold leading-9 tracking-tight text-gray-900">
              🎓 LearnOpia
            </p>
          </div>

          <h2 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-4 mx-96 sm:mx-auto sm:w-full ">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="/forgetpassword"
                    className="font-semibold text-orange-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="flex justify-center gap-2 my-4">
            <p>Didn't have an account?</p>
            <a href="/signup" className="text-orange-300">
              Signup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
