import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Text, Img } from "../../../components";
import { Modal, List, Avatar } from "antd";
import AddLessonForm from "../createLessonForm/addLessonForm";
import { toast } from "react-toastify";
import { Context } from "context";
import Item from "antd/lib/list/Item";

const CourseView = () => {
  const [course, setCourse] = useState({});
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({
    title: "",
    content: "",
    video: {},
  });
  const {
    state: { user },
  } = useContext(Context);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Video");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { slug } = useParams();
  useEffect(() => {
    loadCourse(course);
  }, []);
  const loadCourse = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/course/${slug}`);
    setCourse(data);
  };

  const handleAddLesson = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/course/lesson/${slug}/${course.instructor._id}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setValues({ ...values, title: "", content: "", video: {} });
      setVisible(false);
      setUploadButtonText("Upload video");
      setCourse(data);
      toast("Lesson added");
    } catch (err) {
      console.log(err);
      toast("Lesson add failed");
    }
  };

  const handleVideo = async (e) => {
    try {
      const file = e.target.files[0];
      setUploadButtonText(file.name);
      setUploading(true);
      const videoData = new FormData();
      videoData.append("video", file);
      const { data } = await axios.post(
        `${API_BASE_URL}/course/video-upload/${course.instructor._id}`,
        videoData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
          onUploadProgress: (e) => {
            setProgress(Math.round((100 * e.loaded) / e.total));
          },
        }
      );

      console.log(data);
      setValues({ ...values, video: data });
      setUploading(false);
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
        values.video,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
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

  return (
    <div>
      {/* <h1 className="jumbotron text-center square">{slug}</h1> */}
      {/* <pre>{JSON.stringify(course, null, 4)}</pre> */}
      <div className="flex flex-col items-center justify-start w-full gap-12">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full max-w-7xl">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row justify-start w-full">
                <div className="flex flex-row justify-start w-full p-[29px] bg-red-50 rounded-[20px]">
                  <Text
                    as="p"
                    className="mb-[92px] !text-black-900_02 !font-medium"
                  >
                    Dashboard | Course | Details
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start w-[32%] mt-[-81px] ml-[30px]">
                <div className="flex flex-row justify-start items-center w-full gap-5">
                  <Img
                    src={
                      course.image
                        ? course.image.url
                        : "https://www.questpond.com/img/2.png"
                    }
                    alt="bg_one"
                    className="w-[170px] mb-px object-cover rounded-[10px]"
                  />

                  <div className="flex flex-col items-start justify-start w-[53%] gap-1">
                    <Text size="2xl" as="p" className="!text-gray-900">
                      {course.cousrseTittle}
                    </Text>
                    <Text size="lg" as="p">
                      {course.subject}
                    </Text>
                    <button
                      type="button"
                      onClick={() => setVisible(true)}
                      className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Start Adding Lesson
                    </button>
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
                    <div className="row pb-5">
                      <div className="col lesson-list">
                        <h4>
                          {course && course.lessons && course.lessons.length}{" "}
                          Lessons
                        </h4>
                        <List
                          itemLayout="horizontal"
                          dataSource={course && course.lessons}
                          renderItem={(item, index) => (
                            <Item>
                              <Item.Meta
                                avatar={<Avatar>{index + 1}</Avatar>}
                                title={item.title}
                              ></Item.Meta>
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
        </div>
      </div>
    </div>
  );
};

export default CourseView;
