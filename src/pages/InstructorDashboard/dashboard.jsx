import axios from "axios";
import { Context } from "context";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function InstructorDashboard() {
  const {
    state: { user },
  } = useContext(Context);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    } else if (user && !user.role.includes("Instructor")) {
      navigate("/joinasteacher");
    }
  }, [user]);

  useEffect(() => {
    loadCourses(courses);
  }, []);
  const loadCourses = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/instructor-courses`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setCourses(data);
  };

  return (
    <div>
      <h1 className="jumbotron text-center square">Course List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {courses &&
          courses.map((course) => (
            <>
              <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    src={
                      course.image
                        ? course.image.url
                        : "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    }
                    alt="card-image"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "cover",
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {course.cousrseTittle}
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    {course.subject}
                  </Typography>
                  <Typography className="mb-2">{course.description}</Typography>
                  <Typography className="font-bold">
                    {course.lessons.length} lessons added
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <div className="flex items-center gap-4 justify-between">
                    <Link
                      to={`course/view/${course.slug}`}
                      className="text-blue-500 hover:text-blue-700 font-bold"
                    >
                      Go to course
                    </Link>
                    <Button
                      size="lg"
                      color="white"
                      className="flex items-center gap-3"
                    >
                      <img
                        src="https://docs.material-tailwind.com/icons/metamask.svg"
                        alt="metamask"
                        className="h-6 w-6"
                      />
                      Publish
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </>
          ))}
      </div>
    </div>
  );
}
