import { SyncOutlined } from "@ant-design/icons";
import axios from "axios";
import { Heading } from "components";
import AllCoursesMaincard from "components/AllCoursesMainCard";
import Footer from "components/Footer";
import { Context } from "context";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function MyLearning() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const {
    state: { user },
  } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const fetchCourses = async () => {
        try {
          setLoading(true);
          const { data } = await axios.get(`${API_BASE_URL}/user/get-courses`);
          setEnrolledCourses(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching courses:", error);
          setLoading(false);
          toast.error("Error fetching your courses");
        }
      };
      fetchCourses();
    }
  }, [user]);

  useEffect(() => {
    if (user === null) navigate("/login");
  }, [user]);

  return (
    <div>
      {/* {JSON.stringify(enrolledCourses, null, 4)} */}
      <div className="flex flex-col items-center justify-start w-full gap-[75px] bg-gray-100">
        <Heading className="font-bold text-5xl sm:text-3xl sm:px-4 sm:text-center">
          Enjoy your Amazing courses{" "}
        </Heading>
        <div className="flex flex-row justify-center max-w-9xl">
          <div className="grid grid-cols-4 xxl:grid-cols-1 md:grid-cols-1 gap-4 min-h-[auto]">
            {loading
              ? Array(7)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="mx-auto">
                      <AllCoursesMaincard loading={true} />
                    </div>
                  ))
              : enrolledCourses.map((course, index) => (
                  <div key={index} className="mx-auto">
                    <AllCoursesMaincard
                      loading={false}
                      imgsrc={course.image.url}
                      title={course.courseTitle}
                      slug={course.slug}
                      ispaid={course.IsPaid}
                      price={course.price}
                      content_duration={course.contentDuration}
                      subject={course.subject}
                      lessons={course.lessons.length}
                    />
                  </div>
                ))}
          </div>
        </div>
        <Footer className="flex flex-col items-center justify-center w-full" />
      </div>
    </div>
  );
}

export default MyLearning;
