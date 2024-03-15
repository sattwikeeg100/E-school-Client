import { Context } from "context";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const InstructorIndex = () => {
  const {
    state: { user },
  } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    } else if (user && !user.role.includes("Instructor")) {
      navigate("/joinasteacher");
    }
  }, [user]);

  return (
    <div>
      <h1 className="jumbotron text-center square">Instructor Dashboard</h1>
    </div>
  );
};
