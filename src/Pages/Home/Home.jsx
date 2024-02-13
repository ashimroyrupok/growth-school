import AboutFounder from "../../Components/AboutFounder/AboutFounder";
import Banner from "../../Components/Banner/Banner";
import CallToAction from "../../Components/CallToAction/CallToAction";
import Form from "../../Components/Form/Form";
import Timer from "../../Components/Timer/Timer";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
      <div className="w-full h-full">
        <Banner />
        <Form />
        <AboutFounder />
        <WhyChooseUs />
        <Timer />
        <CallToAction />
      </div>
    );
};

export default Home;