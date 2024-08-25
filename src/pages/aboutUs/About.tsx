import MissionStatement from "./MissionStatement";
import TeamSection from "./TeamSection";
import HistoryAndMilestones from "./History&Milestones";
import ContactInformation from "./ContactInformation";

const About = () => {
  return (
    <div className="m-6">
      <MissionStatement />
      <TeamSection />
      <HistoryAndMilestones />
      <ContactInformation />
    </div>
  );
};

export default About;
