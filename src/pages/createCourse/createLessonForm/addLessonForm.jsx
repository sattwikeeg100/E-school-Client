import { Button, Row, Col, Progress, Tooltip } from "antd";
import {
  DownloadOutlined,
  CloseCircleFilled,
  CloseCircleOutlined,
  CloudUploadOutlined,
} from "@ant-design/icons";

const AddLessonForm = ({
  values,
  setValues,
  handleAddLesson,
  uploading,
  uploadButtonText,
  handleVideo,
  progress,
  handleVideoRemove,
}) => {
  return (
    <div className="container pt-3">
      <form onSubmit={handleAddLesson}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <input
              type="text"
              className="form-control square"
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              values={values.title}
              placeholder="Title"
              autoFocus
              required
              style={{ width: "100%" }}
            />
          </Col>
          <Col span={24}>
            <textarea
              className="form-control mt-3"
              cols="7"
              rows="7"
              onChange={(e) =>
                setValues({ ...values, content: e.target.value })
              }
              values={values.content}
              placeholder="Content"
              style={{ width: "100%" }}
            ></textarea>
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <label className="inline-flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg border border-blue-500 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-600 hover:border-blue-600  shadow-md">
            <span className="mr-2 text-white !important">
              {uploadButtonText}
            </span>
            <span className="text-xl">
              <CloudUploadOutlined className="inline-block" />
            </span>
            <input
              onChange={handleVideo}
              type="file"
              accept="video/*"
              className="hidden"
            />
          </label>

          {!uploading && values.video.Location && (
            <Tooltip title="Remove">
              <span onClick={handleVideoRemove} className="pt-1 pl-3">
                <CloseCircleFilled className="text-danger d-flex justify-content-center pt-4 pointer" />
              </span>
            </Tooltip>
          )}
        </div>

        {progress > 0 && (
          <Progress
            className="d-flex justify-content-center pt-2"
            percent={progress}
            steps={10}
          />
        )}

        <Button
          onClick={handleAddLesson}
          icon={<DownloadOutlined />}
          className="col mt-3"
          size="large"
          type="primary"
          loading={uploading}
          shape="round"
          style={{ display: "block", backgroundColor: "#ff9900" }}
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default AddLessonForm;
