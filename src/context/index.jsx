import { useReducer, createContext, useEffect } from "react";
import axios from "axios";

const intialState = {
  user: null,
  token: null,
};

const Context = createContext();

const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, intialState);

  const token = JSON.parse(window.localStorage.getItem("Token"));

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: {
        user: JSON.parse(window.localStorage.getItem("user")),
        token: token,
      },
    });
  }, []);

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      let res = error.response;
      if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        console.log("/401 error > logout");
        dispatch({ type: "LOGOUT" });
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("Role");
        window.localStorage.removeItem("Token");
        // window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
