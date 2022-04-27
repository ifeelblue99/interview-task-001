import "./card.css";
export default function Card({
  userID,
  name,
  lastName,
  dateOfBirth,
  color,
  says,
  topics,
}) {
  const date = new Date(parseInt(dateOfBirth._hex));
  return (
    <div className="card">
      <div className="user-id">
        <span className="card-title">UserID</span>
        <div>{parseInt(userID._hex)}</div>
      </div>
      <div className="name">
        <span className="card-title">Name</span>
        <div>{name + " " + lastName}</div>
      </div>
      <div className="birth-date">
        <span className="card-title">Birth date</span>
        <div>{dateOfBirth}</div>
      </div>
      <div className="says">
        <span className="card-title">Says</span>
        <div>{says}</div>
      </div>
      <div className="color" style={{ backgroundColor: color, color: "white" }}>
        Color: {color}
      </div>
      <div className="topics">
        <span className="card-title">Topics</span>
        <div>
          {topics.map((el) => (
            <span key={el} className="topics-el">
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
