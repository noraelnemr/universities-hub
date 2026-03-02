import React, { useRef } from "react";
import HeroSection from "../components/HeroSection";
import Info from "../components/Info"
import UniversitySlider from "../components/UniSlider";
import Feature from "../components/Feature";
import recomm from "../assets/recomm.jpg";
import compare from "../assets/compare.jpg";
import Footer from "../components/Footer";

function HomePage() {
 const universityRef = useRef(null);

    return (
      <div>
        <HeroSection  scrollToUniversities={() => universityRef.current?.scrollIntoView({ behavior: 'smooth' })} />
        <Info
        title="About Us"
        info="Universities Hub is your trusted digital guide for navigating higher education in Egypt. We provide comprehensive, up-to-date information on universities and academic programs, helping students make informed decisions about their futures.
With detailed program outlines, tuition fees, virtual campus tours, and smart comparison tools, we simplify the complex process of choosing the right university and major. Our mission is to empower students and families with transparent data and personalized recommendations — all in one user-friendly platform."
      />
         <div ref={universityRef}>
        <UniversitySlider />
      </div>
      <Feature
        title="Uncover Your Dream Career"
        subtitle="Compare Universities & Majors Side-by-Side!"
        info=" With our easy-to-use comparison chart, you can instantly discover the best fit for your goals. 
          Start comparing now and take the first step towards planning your ideal academic path!"
        button="🎓 Compare Now!"
        image={compare}
        link={"/comparison"}
      />
      <hr />
      <Feature
        title="Discover Your Perfect University and Major!"
        subtitle=""
        info=" Take our personalized University Fit Quiz to uncover the best majors 
        and universities tailored to your unique interests, skills, and goals.
        With just a few questions, we'll guide you toward a future that 
        matches your passions and potential."
        button="📝 Start My Quiz"
        image={recomm}
        reverse
        link={"/quiz"}
      />
      <Footer />
        </div>
        )
        };
export default HomePage;