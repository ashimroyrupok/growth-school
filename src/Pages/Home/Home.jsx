import AboutFounder from "../../Components/AboutFounder/AboutFounder";
import Banner from "../../Components/Banner/Banner";
import CallToAction from "../../Components/CallToAction/CallToAction";
import Timer from "../../Components/Timer/Timer";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div className="w-full h-full">
            <Banner/>
            <AboutFounder/>
            <WhyChooseUs/>
            <Timer/>
            <CallToAction/>
        </div>
    );
};

export default Home;