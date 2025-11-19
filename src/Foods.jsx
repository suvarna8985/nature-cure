import { useState } from "react";
import FoodDetails from "./FoodDetails";



function Foods() {
  const [selectedFood, setSelectedFood] = useState(null);

  const foods = [
    {
      id: 1,
      name: "Sprouts",
<img src="/images/sprouts.jpg" alt="sprouts" />,

      description: "Rich in protein and great for digestion.",
      nutrients: "Protein 25%, Iron 10%, Fiber 20%",
      benefits: "Improves digestion, boosts immunity.",
      bestTime: "Morning before breakfast.",
      duration: "Daily for 3 weeks reduces anemia.",
    },
    {
  id: 2,
  name: "Nuts",
  <img src="/images/nuts.jpg" alt="Nuts" />,
  description: "Healthy fats and energy booster.",
  nutrients: "Omega-3, Vitamin E, Magnesium",
  benefits: "Improves brain health, strengthens bones.",
  bestTime: "Evening or morning snack.",
  duration: "Handful daily for 1 month boosts memory.",
},

    {
      id: 3,
      name: "Seeds",
      <img src="/images/seeds.jpg" alt="Seeds" />,
      description: "High in fiber and antioxidants.",
      nutrients: "Fiber 30%, Zinc 15%, Iron 12%",
      benefits: "Reduces inflammation, improves heart health.",
      bestTime: "Night before sleeping.",
      duration: "2 tbsp daily improves digestion.",
    },
  ];

  return (
    <div className="foods-section" id="foods">
      <h1 className="foods-title">Healthy Foods</h1>

      <div className="foods-container">
        {foods.map((food) => (
          <div
            key={food.id}
            className="food-card"
            onClick={() => setSelectedFood(food)}
          >
            <img src={food.image} alt={food.name} />
            <h3>{food.name}</h3>
            <p>{food.description}</p>
          </div>
        ))}
      </div>

      {/* Show details when clicked */}
      <FoodDetails item={selectedFood} />
    </div>
  );
}

export default Foods;
