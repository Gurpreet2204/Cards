import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Card from "../components/Card/Card.jsx";
import EditForm from "../pages/EditForm/EditForm.jsx";
import cardsData from "../components/Card/data/cards.json";
import Header from "../components/Header/Header.jsx";

const AppRoutes = () => {
  const [allData, setAllData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    setAllData(cardsData);
  }, []);
  const getHeaderTitle = () => {
    if (location.pathname === '/') {
      return 'Cards';
    } else if (location.pathname.startsWith('/edit')) {
      return 'Edit';
    }
    return '';
  };
  const updateCard = (updatedCard) => {
    setAllData((prevData) =>
      prevData.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
  };

  const handleDelete = (id) => {
    setAllData((prevData) => prevData.filter((card) => card.id !== id));
  };

  return (
    <div>
      <Header title={getHeaderTitle()} />
      <Routes>
        <Route
          path="/"
          element={<Card allData={allData} onDelete={handleDelete} />}
        />
        <Route
          path="/edit/:id"
          element={<EditForm updateCard={updateCard} allData={allData} />}
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
