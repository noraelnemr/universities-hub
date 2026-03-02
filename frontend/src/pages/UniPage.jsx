import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UniBanner from "../components/UniBanner";
import "../App.css";
import Info from "../components/Info";
import UniInfo from "../components/UniInfo";
import Footer from "../components/Footer";
import "../styles/Uni.css";
import ProgramCard from "../components/ProgramCard";
import UniBottom from "../components/UniBottom";




function UniPage() {
  const { id } = useParams();
  const [university, setUniversity] = useState(null);
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchUniversity = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/universities/${id}`);
        const data = await res.json();
        console.log("Fetched university:", data);
        setUniversity(data);
      } catch (error) {
        console.error("Failed to fetch university:", error);
      }
    };

    const fetchPrograms = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/programs/university/${id}`);
        const data = await res.json();
        setPrograms(data);
      } catch (error) {
        console.error("Failed to fetch programs:", error);
      }
    };

    fetchUniversity();
    fetchPrograms();
  }, [id]);

  if (!university) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div>
      <UniBanner image={university.bgimage} name={university.name} />
      <Info title="About Us" info={university.about} />
      <UniInfo
        address={university.address}
        campusTourLink={university.explore360}
        website={university.website}
        world={university.rank.world}
        totalWorld="14,131"
        africa={university.rank.africa}
        totalAfrica="1,104"
        egypt={university.rank.egypt}
        totalEgypt="50"
      />
    </div>
    <div class="prog">
        <h1>Programmes Offered</h1>
        <div className="school-container">
          {programs.map((program) => (
            <ProgramCard
              key={program._id}
              title={program.name}
              duration={program.duration}
              image={program.photo}
              learnMoreLink={`/program/${program._id}`}
              applyNowLink={university.applylink}
            />
          ))}
        </div>
      </div>
      <UniBottom link={university.website} />
      <Footer />
    </div>
  );
}

export default UniPage;





   