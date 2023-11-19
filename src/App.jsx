import "./user.css";
import user from "./user.json";
import { Card } from "./Card";
import { CardClass } from "./CardClass";

export default function App() {
  return (
    <div>
      <Card
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
      <br />
      <CardClass
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
    </div>
  );
}
