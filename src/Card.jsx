export function Card({ name, phoneNumber, age, address }) {
  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <div className="body">
        <div className="label">Age:</div>
        <div>{age}</div>
        <div className="label">Phone:</div>
        <div>{phoneNumber}</div>
        <div className="label">Address:</div>
        <div>{address}</div>
        <p style={{ fontSize: "10px" }}>This is a Function Component</p>
      </div>
    </div>
  );
}
