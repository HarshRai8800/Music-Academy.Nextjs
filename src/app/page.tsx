import HeroSection from "@/components/HeroSection";
import FeaturedCard from "@/components/FeaturedCard";
import Sticky_Scroll from "@/components/Sticky_Scroll";
import MovingCards from "@/components/MovingCards";
import { GridBackgroundDemo } from "@/components/ui/grid_background";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Wavy_Component from "@/components/Wavy_Component";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="flex flex-col">
     <HeroSection/>
     <FeaturedCard/>
     <Sticky_Scroll/>
    <MovingCards/>
    <UpcomingWebinar/>
    <Wavy_Component/>
    <Footer/>
    </div>
  );
}
