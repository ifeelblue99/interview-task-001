import "./user-holder.css";
import Card from "../../components/card/Card";

export default function UserHolder({ users }) {
  return (
    <div className="user-holder">
      {users.map((el) => {
        return <Card key={el.name} {...el} />;
      })}
    </div>
  );
}
