import { Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Img1 from "../../assets/team/pexels-edmond-dantes-4342401.jpg";
import Img2 from "../../assets/team/pexels-katerina-holmes-5905897.jpg";
import Img3 from "../../assets/team/pexels-olly-3763188.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Joseph khan",
    role: "CEO & Founder",
    imgSrc: Img1,
    bio: "John is the visionary behind our company, committed to providing the best biking experience.",
  },
  {
    id: 2,
    name: "Rihanna maki",
    role: "Marketing Director",
    imgSrc: Img2,
    bio: "Jane leads our marketing efforts, ensuring that our message reaches the right audience.",
  },
  {
    id: 3,
    name: "Jenna Blackly",
    role: "Customer Service Manager",
    imgSrc: Img3,
    bio: "Emily is dedicated to ensuring that our customers have the best possible experience with our services.",
  },
];

const TeamSection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-pink-500 to-cyan-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8 ">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="bg-white rounded-lg shadow-lg p-4 w-full sm:w-1/2 md:w-1/4"
              cover={
                <img
                  alt={member.name}
                  src={member.imgSrc}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
              }
              actions={[<UserOutlined key="user" />]}
            >
              <Card.Meta
                title={<h3 className="text-xl font-semibold">{member.name}</h3>}
                description={<p className="text-gray-600">{member.role}</p>}
              />
              <p className="mt-4 text-gray-700">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
