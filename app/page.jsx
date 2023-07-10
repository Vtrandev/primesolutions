import Main from "@/components/Landing"
import Questions from "@/components/Questions"
import Testimonial from "@/components/Testimonial"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <Main />

        <Testimonial />

        <Questions />
    </section>
  )
}

export default Home