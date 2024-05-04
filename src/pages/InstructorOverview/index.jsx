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
import { toast } from "react-toastify";
import { Heading } from "components";
import { Key } from "react-feather";

export default function InstructorOverview() {
  const {
    state: { user },
  } = useContext(Context);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [products, setProducts] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    } else if (user && !user.role.includes("Instructor")) {
      navigate("/joinasteacher");
    }
  }, [user]);

  useEffect(() => {
    if (user && user.token) {
      loadCourses();
    }
  }, [user]);
  const loadCourses = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/instructor-courses`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setCourses(data);
  };


  useEffect(() => {
    if (user && user.token) {
      loadProducts();
    }
  }, [user]);
  const loadProducts = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/instructor-products`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    console.log(data);
    setProducts(data);
  };

  const handlePublish = async (e, index) => {
    e.preventDefault();
    try {
      let answer = window.confirm(
        "Are you sure you want to publish this course?"
      );
      if (!answer) return;

      const { data } = await axios.put(
        `${API_BASE_URL}/course/publish/${courses[index]._id}`
      );

      const updatedCourses = [...courses];
      updatedCourses[index] = data;

      setCourses(updatedCourses);
      toast.success("Course published successfully");
    } catch (err) {
      console.error(err);
      toast.error("Toast published failed");
    }
  };

  const handleUnPublish = async (e, index) => {
    e.preventDefault();
    try {
      let answer = window.confirm(
        "Are you sure you want to unpublish this course?"
      );
      if (!answer) return;

      const { data } = await axios.put(
        `${API_BASE_URL}/course/unpublish/${courses[index]._id}`
      );

      const updatedCourses = [...courses];
      updatedCourses[index] = data;

      setCourses(updatedCourses);
      toast.success("Course unpublished successfully");
    } catch (err) {
      console.error(err);
      toast.error("Toast unpublished failed");
    }
  };

  const renderSubtitle = (subtitle) => {
    const words = subtitle.split(' ');
    if (words.length > 15) {
      return (
        <>
          {words.slice(0, 15).join(' ')} ... <span className="text-blue-500 cursor-pointer">more</span>
        </>
      );
    } else {
      return subtitle;
    }
  };
  return (
    <div className="flex flex-col mb-12 overflow-hidden">
    <div className="mx-[130px] md:mx-8 overflow-hidden">
      <Heading size="3xl" as="h1" className="text-center !font-semibold">Your Courses List</Heading>
      <div className="flex flex-wrap gap-x-[45px] gap-y-[35px] sm:gap-[15px] overflow-hidden">
        {courses.length===0 && <div className="text-xl"><i>You have not created any course yet!</i></div>}
        {courses &&
          courses.map((course, index) => (
            <div key={index} className="">
              <Card className="mt-2 w-96 h-[450px] overflow-hidden border-gray-150 border-2 gap-x-2 bg-white-A700_b2 sm:w-72 sm:h-[400px] overflow-hidden">
                <CardHeader color="blue-gray" className="w-full mx-auto">
                  <img
                    src={
                      course.image
                        ? course.image.url
                        : "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    }
                    alt="card-image"
                    className="h-[200px] w-full rounded-[5px] sm:h-[150px]"
                   
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-xl font-bold">
                    {course.cousrseTittle}
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    {course.subject}
                  </Typography>
                  <Typography className="mb-2 text-sm">{renderSubtitle(course.description)}</Typography>
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
                    {courses[index].published ? (
                      <Button
                        size="lg"
                        color="white"
                        className="flex items-center gap-3"
                        onClick={(e) => handleUnPublish(e, index)}
                      >
                        <img
                          src="https://docs.material-tailwind.com/icons/metamask.svg"
                          alt="metamask"
                          className="h-6 w-6"
                        />
                        Unpublish
                      </Button>
                    ) : (
                      <Button
                        size="lg"
                        color="white"
                        className="flex items-center gap-3"
                        onClick={(e) => handlePublish(e, index)}
                      >
                        <img
                          src="https://docs.material-tailwind.com/icons/metamask.svg"
                          alt="metamask"
                          className="h-6 w-6"
                        />
                        Publish
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
      </div>
    </div>


    <div className="mx-[130px] md:mx-8">
      <Heading size="3xl" as="h1" className="text-center !font-semibold">Your Products List</Heading>
      <div className="flex flex-wrap gap-x-[45px] gap-y-[35px] sm:gap-[15px] overflow-hidden ">
        {products.length===0 && <div className="text-xl"><i>You have not created any product yet!</i></div>}
        {products &&
          products.map((product, index) => (
            <div key={index}>
              <Card className="mt-6 w-96 pt-4 bg-white-A700_b2 shadow-md border-gray-150 border-2 sm:w-72 overflow-hidden ">
                <CardHeader color="blue-gray" className=" w-48 mx-auto sm:w-28">
                  <img
                    src={
                      product.image
                        ? product.image.url
                        : "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    }
                    alt="card-image"
                    className="items-center justify-center"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="font-bold mb-2">
                    {product.title}
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Category: {product.category}
                  </Typography>
                  <Typography className="mb-2">Author: {product.author}</Typography>
                  <Typography className="mb-2">Publisher: {product.publisher}</Typography>
                  <Typography className="mb-2">ISBN: {product.isbn}</Typography>
                  <Typography className="mb-2">Price: Rs. {product.price}</Typography>
                </CardBody>
              </Card>
            </div>
          ))}
      </div>
    </div>

    </div>
  );
}
