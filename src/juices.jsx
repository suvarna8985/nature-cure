import { useState } from "react";
import JuiceDetails from "./juice Details";
import "./App.css";

function Juices() {
  const [selectedJuice, setSelectedJuice] = useState(null);

  const juices = [
    {
      id: 1,
      name: "Wheatgrass Juice",
      image: "/images/wheatgrass.jpg",
      benefits: "Detoxifies liver, boosts immunity, increases hemoglobin.",
      nutrients: "Chlorophyll, Vitamin A, C, Iron",
      bestTime: "Morning on empty stomach",
      duration: "10–15 days regularly improves blood health.",
    },
    {
      id: 2,
      name: "Bottle Gourd Juice",
      image: "/images/bottleguard.jpg",
      benefits: "Weight loss, cools body, reduces acidity.",
      nutrients: "Vitamin C, Calcium, Magnesium",
      bestTime: "Morning",
      duration: "Daily for 2 weeks improves digestion.",
    },
    {
      id: 3,
      name: "Keera Juice (Cucumber Juice)",
      image: "/images/keera.jpg",
      benefits: "Hydrates body, good for skin glow.",
      nutrients: "Water, Vitamin K, Potassium",
      bestTime: "Any time of day",
      duration: "Daily for a month gives glowing skin.",
    },
    {
      id: 4,
      name: "Beetroot + Carrot Juice",
      image: "/images/carrot.jpg",
      benefits: "Improves blood, increases energy, good for skin.",
      nutrients: "Iron, Vitamin A, C, Fiber",
      bestTime: "Morning or evening",
      duration: "15 days improves hemoglobin levels.",
    },
    {
      id: 5,
      name: "Mint + Coriander + Ginger Juice",
      image: "/images/MintCorianderJuice.jpg",
      benefits: "Improves digestion, removes toxins, fresh breath.",
      nutrients: "Antioxidants, Vitamin C",
      bestTime: "After lunch",
      duration: "1 week improves digestion.",
    },
  ];

  return (
    <div className="juices-section" id="juices">
      <h1 className="juices-title">Healthy Juices</h1>

      <div className="juices-container">
        {juices.map((juice) => (
          <div
            key={juice.id}
            className="juice-card"
            onClick={() => setSelectedJuice(juice)}
          >
            <img src={juice.image} alt={juice.name} />
            <h3>{juice.name}</h3>
            <p>{juice.benefits}</p>
          </div>
        ))}
      </div>

      {/* show details when clicked */}
      <JuiceDetails item={selectedJuice} />
    </div>
  );
}

export default Juices;
