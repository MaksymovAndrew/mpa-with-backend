import { Link } from "react-router-dom";

export default function EventsPage() {
  const EVENTS = [
    { id: "ev1", title: "Event 1" },
    { id: "ev2", title: "Event 2" },
    { id: "ev3", title: "Event 3" },
  ];

  return (
    <>
      <h1>List of all events we have</h1>
      <ul>
        {EVENTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
