import {
  ContactUsSection,
  CouponsAndDiscountsSection,
  FeatureSection,
  HeroSection,
  Reviews,
  WhyChooseUsSecton,
} from ".";

const MainHome = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <Reviews />
      <WhyChooseUsSecton />
      <CouponsAndDiscountsSection />
      <ContactUsSection />
    </div>
  );
};

export default MainHome;
