import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spin size="default" />
    </div>
  );
};

export default Loading;
