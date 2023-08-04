import Googlemap from "@/components/Googlemap"
import Main from "@/components/Landing"
import Questions from "@/components/Questions"
import Testimonial from "@/components/Testimonial"

const Home = () => {
  return (
    <section className="flex-center flex-col">
        <Main />

        <Testimonial />

        <Questions />
        
        <Googlemap />
    </section>
  )
}

export default Home