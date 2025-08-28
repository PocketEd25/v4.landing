import AboutSection from "./about";
import FeatureSection from "./feature";
import Hero from "./hero";
import StatisticSection from "./statistics";
import CommunitySection from "./community";
import FooterSection from "./footer";

export default function Main(){
  return(
    <>
    <Hero/>
    <AboutSection/>
    <FeatureSection/>
    <StatisticSection/>
    <CommunitySection/>
    <FooterSection/>
    </>
  );
}