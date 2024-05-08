import { Heading, Button, Text, Img } from "../../components";

import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import Modal from "antd/es/modal/Modal";
import { Context } from "context";
import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function CoursesDetailsPage() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [course, setCourse] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState("");
  const [tittle, setTittle] = useState("");
  const [loading, setLoading] = useState(false);
  const [enrolled, setEnrolled] = useState({});
  const { slug } = useParams();
  const navigate = useNavigate();
  const {
    state: { user },
  } = useContext(Context);
  useEffect(() => {
    loadCourse(course);
  }, []);
  const loadCourse = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/courseView/${slug}`);
    console.log(data);
    setCourse(data);
  };

  useEffect(() => {
    if (user && course) {
      checkEnrollment();
    }
  }, [user, course]);

  const checkEnrollment = async () => {
    try {
      if (course._id) {
        const { data } = await axios.get(
          `${API_BASE_URL}/check-enrollment/${course._id}`
        );
        // console.log("Status-", data);
        setEnrolled(data);
      }
    } catch (error) {
      console.error("Error while checking enrollment:", error);
    }
  };

  const handleFreeEnrollment = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!user) navigate("/login");
      if (enrolled.status) return;

      const { data } = await axios.post(
        `${API_BASE_URL}/free-enrollment/${course._id}`,
        {}
      );
      toast.success(data.message);
      setLoading(false);
      setEnrolled({ ...enrolled, status: true });
      navigate("/mylearning");
    } catch (error) {
      toast.error("Enrollment failed");
      console.error(error);
      setLoading(false);
    }
  };
  const handlePaidEnrollment = async (amount) => {
    const key = import.meta.env.VITE_RAZORPAY_API_KEY;

    const { data } = await axios.post(`${API_BASE_URL}/order`, {
      amount,
    });

    const options = {
      key,
      amount: data.order.amount,
      currency: "INR",
      name: course.cousrseTittle,
      description: "Pay to get access to this course",
      image: course.image.url,
      order_id: data.order.id,
      callback_url: `${API_BASE_URL}/paymentverification?courseId=${encodeURIComponent(
        course._id
      )}&token=${encodeURIComponent(user.token)}`,
      prefill: {
        name: user.name,
        email: user.email,
        contact: "91-0000000000",
      },
      notes: {
        address: "Learnopia Corporate Office",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
    setEnrolled({ ...enrolled, status: true });
  };
  return (
    <>
      {/* {JSON.stringify(course, null, 4)} */}
      {/* {console.log(course)} */}
      <div className="flex flex-col items-center justify-start w-full gap-[99px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-full gap-12">
          <div className="flex flex-row justify-between items-start w-full p-6 pb-16 bg-gray-200_01 max-w-7xl rounded-[20px]">
            <div className="flex flex-col items-start justify-start w-full mx-[5px] gap-[29px]">
              <Text
                as="p"
                className="!text-black-900_02 tracking-[0.48px] !font-medium"
              >
                Home | {course.cousrseTittle} | Course Details
              </Text>
              <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                <div className="flex flex-row justify- w-full sm:flex-col gap-8">
                  <div className="h-[450px] w-full relative sm:h-[200px] sm:w-full">
                    {course.lessons &&
                    course.lessons[0].video_link &&
                    course.lessons[0].video_link.Location &&
                    course.image &&
                    course.image.url ? (
                      <ReactPlayer
                        url={course.lessons[0].video_link.Location}
                        light={course.image.url}
                        width="100%"
                        height="100%"
                        controls={course.lessons[0].free_preview ? true : false}
                        className="react-player-div"
                      />
                    ) : (
                      <>
                        {course.image && course.image.url && (
                          <img
                            src={course.image.url}
                            alt={course.cousrseTittle}
                            className="justify-center h-[455px] w-full left-0 bottom-0 right-0 top-0 m-auto object-contain absolute rounded-[20px] sm:h-[200px]" //
                            style={{ maxWidth: "100%" }}
                          />
                        )}
                      </>
                    )}
                    {course.lessons && course.lessons.length > 0 && (
                      <Heading
                        size="xl"
                        as="h1"
                        className="!text-black-900_02 mt-4 "
                      >
                        {course.lessons[0].title}
                      </Heading>
                    )}
                  </div>

                  <div className="flex flex-col items-start justify-start w-[40%] sm:mt-16 gap-3 sm:w-full sm:text-lg ">
                    <Heading
                      size="lg"
                      as="h2"
                      className="!text-black-900_02 sm:text-lg"
                    >
                      Course Playlists
                    </Heading>
                    {course.lessons &&
                      course.lessons.length > 0 &&
                      course.lessons.map((lesson, index) => {
                        const lessonClassName =
                          course.lessons[index].free_preview || enrolled.status
                            ? "flex flex-row justify-start items-center w-full gap-2.5 p-2.5 bg-white-A700 shadow-sm cursor-pointer rounded-[10px] hover:shadow-sm sm:p-1"
                            : "flex flex-row justify-start items-center w-full gap-2.5 p-2.5 bg-dark-A700 shadow-sm cursor-pointer rounded-[10px] hover:shadow-sm sm:p-1";
                        return (
                          <>
                            <div
                              key={lesson._id}
                              className={lessonClassName}
                              onClick={() => {
                                // console.log(index);
                                if (
                                  course.lessons[index].free_preview ||
                                  enrolled.status
                                ) {
                                  setPreview(
                                    course.lessons[index].video_link.Location
                                  );
                                  setShowModal(!showModal);
                                  setTittle(course.lessons[index].title);
                                }
                              }}
                            >
                              {course.image && course.image.url && (
                                <Img
                                  src={course.image.url}
                                  alt={course.courseTitle}
                                  className="w-[23%] object-cover rounded-[5px]"
                                />
                              )}

                              <div className="flex flex-col items-start justify-start w-[64%] gap-[3px]">
                                <Heading as="h4" className="!text-black-900_02">
                                  {lesson.title}
                                </Heading>
                                <Text
                                  size="s"
                                  as="p"
                                  className="!text-deep_orange-400"
                                >
                                  5:43
                                </Text>
                              </div>
                            </div>
                            <Modal
                              title={tittle}
                              visible={showModal}
                              onCancel={() => {
                                setShowModal(!showModal);
                              }}
                              width={720}
                              footer={null}
                            >
                              <ReactPlayer
                                url={preview}
                                playing={showModal}
                                controls={true}
                                width="100%"
                                height="100%"
                              />
                            </Modal>
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-8">
          <div className="flex flex-row-reverse justify-start items-start w-full gap-10 max-w-7xl sm:flex-col">
            <div className="flex flex-col items-center justify-start w-[32%] gap-[23px] sm:w-full">
              <div className="flex flex-col items-center justify-center w-full gap-[19px] p-[19px] bg-white-A700 rounded-[10px]">
                <div className="flex flex-row justify-between items-center w-full mt-[5px]">
                  <Heading size="s" as="h6" className="!text-gray-700_01">
                    Price
                  </Heading>
                  <Heading
                    size="lg"
                    as="h4"
                    className="!text-deep_orange-400 text-right !font-bold"
                  >
                    {course.IsPaid ? <span>₹{course.price}</span> : "Free"}
                  </Heading>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <Heading
                    size="s"
                    as="h5"
                    className="mb-0.5 !text-gray-700_01"
                  >
                    Instructor
                  </Heading>
                  {course.instructor && course.instructor.name && (
                    <Heading size="s" as="h5" className="text-right underline">
                      {course.instructor.name}
                    </Heading>
                  )}
                </div>
                <div className="flex flex-row justify-between w-full">
                  <Heading
                    size="s"
                    as="h5"
                    className="mb-0.5 !text-gray-700_01"
                  >
                    Durations
                  </Heading>
                  <Heading size="s" as="h5" className="text-right">
                    {course.contentDuration} Hours
                  </Heading>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <Heading size="s" as="h5" className="mt-px !text-gray-700_01">
                    Lessons
                  </Heading>
                  <Heading size="s" as="h5" className="text-right">
                    {course.lessons && `${course.lessons.length}`}
                  </Heading>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <Heading size="s" as="h5" className="mb-px !text-gray-700_01">
                    Certificate
                  </Heading>
                  <Heading size="s" as="h5" className="text-right">
                    {course.IsPaid ? "Yes" : "No"}
                  </Heading>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <Heading size="s" as="h5" className="!text-gray-700_01">
                    Language
                  </Heading>
                  <Heading size="s" as="h5" className="text-right">
                    English
                  </Heading>
                </div>
                <div className="flex flex-row justify-between w-full mb-[5px]">
                  <Heading size="s" as="h5" className="mt-px !text-gray-700_01">
                    Access
                  </Heading>
                  <Heading size="s" as="h5" className="text-right">
                    Lifetime
                  </Heading>
                </div>
              </div>
              {loading ? (
                <div className="d-flex justify-content-center">
                  <LoadingOutlined className="h1 text-danger" />
                </div>
              ) : (
                <Button
                  size="2xl"
                  className="w-full font-medium"
                  onClick={(e) =>
                    course.IsPaid
                      ? handlePaidEnrollment(course.price)
                      : handleFreeEnrollment(e)
                  }
                >
                  {user ? (
                    enrolled.status ? (
                      "You are already enrolled"
                    ) : (
                      "Enroll"
                    )
                  ) : (
                    <Link to="/login">Login to Enroll</Link>
                  )}
                </Button>
              )}
            </div>
            <div className="flex flex-col items-center justify-start w-[66%] gap-6 sm:w-full">
              <div className="flex flex-col items-start justify-start w-full gap-2">
                <Heading size="xl" as="h2">
                  Course Details
                </Heading>
                <Text as="p" className="!leading-[30px]">
                  {course.description}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-2">
                <Heading size="xl" as="h3">
                  Certification
                </Heading>
                <Text as="p" className="!leading-[30px]">
                  The attainment of a certificate of completion is contingent
                  upon successfully completing 90% of the coursework. This
                  requirement highlights the importance of sustained effort and
                  engagement throughout the learning process, showcasing a
                  commitment to excellence. Upon achieving this milestone,
                  individuals not only demonstrate proficiency but also gain
                  validation of their expertise. This certification serves as a
                  gateway to new opportunities, affirming dedication to
                  continuous learning and professional development. Ultimately,
                  it serves as a beacon of motivation, inspiring learners to
                  strive for excellence and unlock their full potential.
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-2">
                <Heading size="xl" as="h4">
                  Who this course is for
                </Heading>
                <Text as="p" className="!leading-[30px]">
                  {course.prerequisites}
                </Text>
              </div>
            </div>
          </div>
        </div>

        <Footer className="flex flex-col items-center justify-center w-full" />
      </div>
    </>
  );
}
