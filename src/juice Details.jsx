function JuiceDetails({ item }) {
  if (!item) return null;

  return (
    <div className="juice-details">
      <h2>{item.name}</h2>
      <p><strong>Benefits:</strong> {item.benefits}</p>
      <p><strong>Nutrients:</strong> {item.nutrients}</p>
      <p><strong>Best Time:</strong> {item.bestTime}</p>
      <p><strong>Usage Duration:</strong> {item.duration}</p>
    </div>
  );
}

export default JuiceDetails;
