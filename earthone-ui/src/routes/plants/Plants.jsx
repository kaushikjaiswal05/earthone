import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import "./plants.css";

function Plants() {
  const [plants, setPlants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const plantsPerPage = 18;

  const fetchPlants = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://perenual.com/api/species-list?key=sk-KXwI676523af0666b8037&page=${page}`
      );
      setPlants(response.data.data);
    } catch (error) {
      console.error("Error fetching plant data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPlants(currentPage);
  }, [currentPage]);

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);

  const handlePreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

  const filteredPlants = plants.filter((plant) =>
    plant.common_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedPlants = filteredPlants.slice(0, plantsPerPage);
  return (
    <>
      <Navbar />
      <div className="plants-container">
        <div className="search-bar">
          <div className="search-input-container">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              placeholder="Search plants by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="plant-grid">
          {loading ? (
            <p className="loading">Loading...</p>
          ) : (
            displayedPlants.map((plant) => (
              <div className="plant-card" key={plant.id}>
                <img
                  src={plant.default_image?.original_url}
                  alt={plant.common_name || "Plant"}
                />
                <h2>{plant.common_name || "Unknown Name"}</h2>
              </div>
            ))
          )}
        </div>
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <span>{currentPage}</span>
          <button onClick={handleNextPage}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Plants;
