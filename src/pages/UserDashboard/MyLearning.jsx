import { SyncOutlined } from "@ant-design/icons";
import axios from "axios";
import { Heading } from "components";
import AllCoursesMaincard from "components/AllCoursesMainCard";
import Footer from "components/Footer";
import { Context } from "context";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

function MyLearning() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const {
    state: { user },
  } = useContext(Context);

  useEffect(() => {
    if (user && user.token) {
      const fetchCourses = async () => {
        try {
          setLoading(true);
          const { data } = await axios.get(`${API_BASE_URL}/user/get-courses`, {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
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

  return (
    <div>
      {/* {JSON.stringify(enrolledCourses, null, 4)} */}
      {loading && (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-danger p-5"
        />
      )}
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
        <Heading className="font-bold text-5xl">
          Enjoy your Amazing courses{" "}
        </Heading>
        <div className="flex flex-row justify-center max-w-9xl">
          <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-1 gap-10">
            {enrolledCourses.map((course) => (
              <div key={course.title}>
                <AllCoursesMaincard
                  imgsrc={course.image.url}
                  title={course.title}
                  slug={course.slug}
                  ispaid={course.is_paid ? "Paid" : "Free"}
                  price={course.price}
                  level={course.level}
                  content_duration={course.content_duration}
                  subject={course.subject}
                  published_date={course.published_date}
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
