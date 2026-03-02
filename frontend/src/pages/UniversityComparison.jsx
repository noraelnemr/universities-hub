import React, {  useEffect, useState } from 'react';
import '../styles/Comparison.css';
import Footer from '../components/Footer';
import UniBanner from '../components/UniBanner';


function UniversityComparison()  {
    const [allUniversities, setAllUniversities] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selectedPrograms, setSelectedPrograms] = useState({});

    useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const uniRes = await fetch('http://localhost:5000/api/universities');
        const universities = await uniRes.json();

        // Fetch programs for each university and attach
        const universitiesWithPrograms = await Promise.all(
          universities.map(async (uni) => {
            const progRes = await fetch(`http://localhost:5000/api/programs/university/${uni._id}`);
            const programs = await progRes.json();
            return {
              ...uni,
              id: uni._id, // ensure compatibility with old code
              programs
            };
          })
        );

        setAllUniversities(universitiesWithPrograms);
      } catch (err) {
        console.error("Error fetching universities or programs:", err);
      }
    };

    fetchUniversities();
  }, []);


  const handleAddUniversity = (uni) => {
    if (selected.length < 4 && !selected.some(s => s.id === uni.id)) {
      setSelected([...selected, uni]);
    }
  };

  const handleRemoveUniversity = (id) => {
    setSelected(selected.filter(uni => uni.id !== id));
    setSelectedPrograms(prev => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const handleProgramChange = (uniId, programName) => {
    const university = allUniversities.find(u => u.id === uniId);
    const program = university.programs.find(p => p.name === programName);
    setSelectedPrograms(prev => ({
      ...prev,
      [uniId]: program
    }));
  };

  const availableToAdd = allUniversities.filter(u => !selected.some(s => s.id === u.id));

  const attributes = [
    { label: "Location", key: "address" },
    { label: "World Rank of 14,131" , key: "rank.world" },
    { label: "Africa Rank of 1,104", key: "rank.africa" },
    { label: "Egypt Rank of Top 50 ", key: "rank.egypt" },
    { label: "School Name", key: "schoolName", isProgram: true },
    { label: "Tuition", key: "fees", isProgram: true },
    { label: "Duration", key: "duration", isProgram: true }
  ];

  const allProgramsSelected = selected.every(uni => selectedPrograms[uni.id]);

   const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc?.[part], obj) || '—';
  };
  return (
    <div>
      <UniBanner image="https://i.pinimg.com/736x/8f/a1/b8/8fa1b8901468414c161278e64cff3b17.jpg" name="University Comparison Tool" />

      <div className="comparison-wrapper">
        <div className="card-row">
          <div className='startcomp'></div>
          {selected.map((uni, idx) => (
            <React.Fragment key={uni.id}>
              <div className="university-card university-card-2">
                <button className="close-btn" onClick={() => handleRemoveUniversity(uni.id)}>×</button>
                <img src={uni.image} alt={uni.name} className="university-logo-2" />
                <h3><a href='http://localhost:5173/university/2'>{uni.name}</a></h3>
                <select
                  className="program-select"
                  value={selectedPrograms[uni.id]?.name || ""}
                  onChange={(e) => handleProgramChange(uni.id, e.target.value)}
                >
                  <option className="firstcomp" value="">Select Program</option>
                  {uni.programs.map((p, i) => (
                    <option key={i} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>
              {idx < selected.length - 1 && <div className="vs-badge">vs</div>}
            </React.Fragment>
          ))}
          {selected.length < 4 && (
            <>
              {selected.length > 0 && <div className="vs-badge">vs</div>}
              <div className="university-card university-card-2 add-card">
                <div className="add-plus">+</div>
                <select className="add-select" onChange={(e) => {
                  const uni = allUniversities.find(u => u.id === parseInt(e.target.value));
                  if (uni) handleAddUniversity(uni);
                }}>
                  <option className="firstcomp" value="">Add University</option>
                  {availableToAdd.map(u => (
                    <option key={u.id} value={u.id}>{u.name}</option>
                  ))}
                </select>
              </div>
            </>
          )}
        </div>

        <div className="attribute-table">
          <div className="attribute-column label-column">
  {attributes.map(attr => {
    if (attr.isProgram && !allProgramsSelected) return null;
    return (
      <div key={attr.key} className="attribute-cell label-cell">{attr.label}</div>
    );
  })}
</div>


          {selected.map((uni) => (
            <div key={uni.id} className="attribute-column label-column">
              {attributes.map(attr => {
                if (attr.isProgram && !allProgramsSelected) return null;
                const value = attr.isProgram
                  ? selectedPrograms[uni.id]?.[attr.key] || "—"
                  : getNestedValue(uni, attr.key) || "—";
                return (
                  <div key={attr.key} className="attribute-cell">{value}</div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UniversityComparison;
