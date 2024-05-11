import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Text, Img } from "../../../components";
import { Modal, List, Avatar, Tooltip } from "antd";
import AddLessonForm from "../createLessonForm/addLessonForm";
import { toast } from "react-toastify";
import { Context } from "context";
import Item from "antd/lib/list/Item";
import { DeleteOutlined, UserSwitchOutlined } from "@ant-design/icons";

const CourseView = () => {
  const [course, setCourse] = useState({});
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({
    title: "",
    content: "",
    preview: false,
    video: {},
  });
  const [studentCount, setStudentCount] = useState([]);
  const {
    state: { user },
  } = useContext(Context);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Video");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { slug } = useParams();
  useEffect(() => {
    loadCourse(course);
  }, [slug]);
  useEffect(() => {
    course && StudentCount();
  }, [course]);

  const loadCourse = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/course/${slug}`);
    setCourse(data);
  };

  const StudentCount = async () => {
    const { data } = await axios.post(
      `${API_BASE_URL}/instructor/student-count`,
      {
        courseId: course._id,
      }
    );
    // console.log(data);
    setStudentCount(data.length);
  };

  const handleAddLesson = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/course/lesson/${slug}/${course.instructor._id}`,
        values
      );
      setValues({ ...values, title: "", content: "", video: {} });
      setVisible(false);
      setUploadButtonText("Upload video");
      setCourse(data);
      toast.success("Lesson added");
    } catch (err) {
      console.log(err);
      toast.error("Lesson add failed");
    }
  };

  const handleVideo = async (e) => {
    try {
      if(course && course.instructor){
        const file = e.target.files[0];
        setUploadButtonText(file.name);
        setUploading(true);
        const videoData = new FormData();
        videoData.append("video", file);
        const { data } = await axios.post(
          `${API_BASE_URL}/course/video-upload/${course.instructor._id}`,
          videoData,
          {
            onUploadProgress: (e) => {
              setProgress(Math.round((100 * e.loaded) / e.total));
            },
          }
        );

        console.log(data);
        setValues({ ...values, video: data });
        setUploading(false);
      }
    } catch (err) {
      console.log(err);
      setUploading(false);
      toast.error("Video upload failed!");
    }
  };

  const handleVideoRemove = async () => {
    try {
      setUploading(true);
      const { data } = await axios.post(
        `${API_BASE_URL}/course/video-remove/${course.instructor._id}`,
        values.video
      );
      console.log(data);
      setValues({ ...values, video: {} });
      setUploading(false);
      setUploadButtonText("Upload another video");
    } catch (err) {
      console.log(err);
      setUploading(false);
      toast("Video remove failed");
    }
  };

  const handleLessonDelete = async (index) => {
    const answer = window.confirm("Are you sure you want to delete?");
    if (!answer) return;

    let allLessons = [...course.lessons];

    const removed = allLessons.splice(index, 1);

    try {
      const { data } = await axios.post(`${API_BASE_URL}/course/${slug}`, {
        removed,
      });

      setCourse(data);
      toast.success("Lesson deleted successfully");
    } catch (error) {
      console.error("Error deleting lesson:", error);
      toast.error("Error deleting lesson");
    }
  };

  return (
    <div>
      {/* <h1 className="jumbotron text-center square">{slug}</h1> */}
      {/* <pre>{JSON.stringify(course, null, 4)}</pre> */}
      <div className="flex flex-col items-center justify-start w-full ">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row justify-start w-full">
                <div className="justify-start w-full p-[29px] bg-red-50 rounded-[20px] mx-28 mt-4 sm:mx-4">
                  <Text
                    as="p"
                    className="!text-black-900_02 text-5xl font-bold sm:text-2xl"
                  >
                    {course.cousrseTittle}
                  </Text>
                  <p className="mb-[92px] !text-black-900_02  mt-4 sm:mt-2">
                    {course.subject}
                  </p>
                </div>
              </div>

              <div className="mt-8 px-28 sm:px-8 sm:mt-4">
                <div className="flex flex-row justify-start w-full gap-5 sm:flex-col sm:gap-2">
                  <div className="w-[200px] h-[150px] mt-4 sm:w-[200px] sm:h-[100px] sm:mt-2 sm:mx-auto">
                    <Img
                      src={
                        course.image
                          ? course.image.url
                          : "https://www.questpond.com/img/2.png"
                      }
                      alt="bg_one"
                      className="w-full object-fit bg-transparent rounded-[10px] "
                    />
                  </div>
                  <div className="m-2">
                    <div className="w-[700px] sm:w-full">
                      <p className="!text-gray-900 text-md sm:text-sm">
                        {course.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 mt-8">
                      <button
                        type="button"
                        onClick={() => setVisible(true)}
                        className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        Start Adding Lesson
                      </button>
                      <Tooltip title={`${studentCount} Enrolled`}>
                        <UserSwitchOutlined className="pointer mr-4 h-8 w-8 text-red-500 text-2xl" />
                      </Tooltip>
                    </div>
                  </div>

                  <div className="mt-1">
                    <h1 className="text-xl font-bold text-gray-500 pb-4 text-center ">
                      {course && course.lessons && course.lessons.length}{" "}
                      Lessons Added
                    </h1>
                    <List
                      itemLayout="horizontal"
                      dataSource={course && course.lessons}
                      className="w-80 sm:w-full"
                      renderItem={(item, index) => (
                        <Item>
                          <Item.Meta
                            avatar={<Avatar>{index + 1}</Avatar>}
                            title={item.title}
                            className="items-center"
                          ></Item.Meta>
                          <DeleteOutlined
                            onClick={() => handleLessonDelete(index)}
                            className=" items-center"
                          />
                        </Item>
                      )}
                    ></List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="+ Add Lesson"
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <AddLessonForm
          values={values}
          setValues={setValues}
          handleAddLesson={handleAddLesson}
          uploading={uploading}
          uploadButtonText={uploadButtonText}
          handleVideo={handleVideo}
          progress={progress}
          handleVideoRemove={handleVideoRemove}
        />
      </Modal>
    </div>
  );
};

export default CourseView;
