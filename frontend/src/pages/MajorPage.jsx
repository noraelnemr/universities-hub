import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DegreeInfo from "../components/DegreeInfo";
import UniBanner from "../components/UniBanner";
import Accordion from "../components/RegList";
import StudyPlan from "../components/StudyPlan";
import JobProfiles from "../components/JobProfiles";
import ProgramSlider from "../components/ProgramSlider";
import Footer from "../components/Footer";
import Fees from "../components/fees"

function MajorPage() {
  const { id } = useParams();
  const [program, setProgram] = useState(null);
  const [university, setUniversity] = useState(null);
  const [otherPrograms, setOtherPrograms] = useState([]);

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        
        const res = await fetch(`http://localhost:5000/api/programs/${id}`);
        const data = await res.json();
        console.log("Fetched program data:", data);
        setProgram(data);
  
        const uniRes = await fetch(`http://localhost:5000/api/universities/${data.universityId}`);
        const uniData = await uniRes.json();
        console.log("Fetched university data:", uniData);
        setUniversity(uniData);

        const otherRes = await fetch(`http://localhost:5000/api/programs/university/${data.universityId}`);
    const allPrograms = await otherRes.json();

    // Exclude the current program from the list
    const filtered = allPrograms.filter(p => p._id !== data._id);
    setOtherPrograms(filtered);
        
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };  

    fetchProgram();
  }, [id]);

  if (!program || !university) return <div>Loading...</div>;

  return (
    <div>
      <UniBanner image={university.bgimage} name={university.name} />
      <DegreeInfo
        degreeName={program.name}
        
        degreeInfo={program.aboutDegree}
        imageSrc={program.photo}
        applyLink={university.website}
      />
       <StudyPlan 
        qualification={program.schoolName}
        durationn={program.duration}
        modules={program.modules}
      />
      <Accordion requirements={program.requirements}/>
      <Fees fees={program.fees}/>
      <JobProfiles job={program.jobs} major={program.name}/>
      <ProgramSlider programs={otherPrograms} uniLink={university.applylink} />
      <Footer />
    </div>
  );
}

export default MajorPage;
