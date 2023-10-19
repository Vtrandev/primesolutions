import Googlemap from "@/components/Googlemap";
import Main from "@/components/Landing";
import Questions from "@/components/Questions";
import Testimonial from "@/components/Testimonial";
import Script from "next/script";

const Home = () => {
  return (
    <section className="flex-center flex-col">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-4M8QW8GP2L" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-4M8QW8GP2L');
        `}
      </Script>

      <Main />

      <Testimonial />

      <Questions />

      <Googlemap />
    </section>
  );
};

export default Home;
