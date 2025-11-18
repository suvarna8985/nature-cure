function FoodDetails({ item }) {
  if (!item) return null; // if no food clicked, show nothing

  return (
    <div className="food-details" >
      <h2>{item.name}</h2>
      <p><strong>Nutrients:</strong> {item.nutrients}</p>
      <p><strong>Benefits:</strong> {item.benefits}</p>
      <p><strong>Best Time:</strong> {item.bestTime}</p>
      <p><strong>Usage Duration:</strong> {item.duration}</p>
    </div>
  );
}

export default FoodDetails;
