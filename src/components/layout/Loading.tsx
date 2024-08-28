import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-1/4">
      <Spin size="default" />
    </div>
  );
};

export default Loading;
