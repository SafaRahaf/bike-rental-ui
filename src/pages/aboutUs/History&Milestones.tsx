import React from "react";
import { Timeline } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const milestones = [
  {
    id: 1,
    date: "January 2020",
    title: "Company Founded",
    description:
      "Our journey began with the mission to provide high-quality bike rentals.",
  },
  {
    id: 2,
    date: "June 2020",
    title: "First Store Opening",
    description:
      "We opened our first physical store to better serve our customers.",
  },
  {
    id: 3,
    date: "December 2021",
    title: "Launched New Fleet",
    description:
      "Introduced a new range of bikes to offer more variety to our customers.",
  },
  {
    id: 4,
    date: "August 2022",
    title: "Reached 100,000 Rentals",
    description:
      "Celebrated a major milestone with over 100,000 rentals and counting.",
  },
];

const HistoryAndMilestones = () => {
  return (
    <div className="py-16 text-[#72445e]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          History & Milestones
        </h2>
        <Timeline mode="alternate" className="max-w-3xl mx-auto">
          {milestones.map((milestone) => (
            <Timeline.Item
              key={milestone.id}
              dot={
                <CheckCircleOutlined
                  style={{ fontSize: "20px", color: "#72445e" }}
                />
              }
              color="green"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="md:w-1/4">
                  <p className="text-sm font-semibold text-[#72445e]">
                    {milestone.date}
                  </p>
                </div>
                <div className="md:w-3/4 md:ml-4">
                  <h3 className="text-xl font-semibold text-pink-500">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 font-semibold text-cyan-600">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default HistoryAndMilestones;
