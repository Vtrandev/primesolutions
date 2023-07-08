import Questions from "@/components/Questions"
import Testimonial from "@/components/Testimonial"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Looking for a car?
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">Speak to an expert now!</span>
        </h1>
        <p className="desc text-center">
            Apply Now
        </p>

        <Testimonial />

        <Questions />

    </section>
  )
}

export default Home