import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResultsPage() {
  const query = useQuery();
  const searchTerm = query.get("q") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResults() {
      try {
        const res = await fetch(`http://localhost:5000/api/programs/search?q=${encodeURIComponent(searchTerm)}`);
        const data = await res.json();
        setResults(data);
        setLoading(false);
      } catch (err) {
        console.error("Search error:", err);
        setLoading(false);
      }
    }

    if (searchTerm.trim()) {
      fetchResults();
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [searchTerm]);

  return (
    <div className="search-results-page">
      <h1>Search Results for "{searchTerm}"</h1>

      {loading ? (
        <p>Loading...</p>
      ) : results.length === 0 ? (
        <p>No programs found matching your search.</p>
      ) : (
        <div className="results-list">
          {results.map(({ program, university }) => (
            <div key={program._id} className="result-card">
              <h2>{program.name}</h2>
              <p>{program.aboutDegree}</p>

              {university && (
                <div className="university-info">
                  <h3>University: {university.name}</h3>
                  <p>{university.address}</p>
                  <a href={university.website} target="_blank" rel="noreferrer">Visit Website</a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default SearchResultsPage;
