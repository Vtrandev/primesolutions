import Googlemap from "@/components/Googlemap";
import Landing from "@/components/Landing";
import Questions from "@/components/Questions";
import StepProcess from "@/components/StepProcess";
import Testimonial from "@/components/Testimonial";

const Home = () => {
  return (
    <section className="flex-center flex-col">
      <Landing />

      <StepProcess />

      <Testimonial />

      <Questions />

      <Googlemap />
    </section>
  );
};

export default Home;
