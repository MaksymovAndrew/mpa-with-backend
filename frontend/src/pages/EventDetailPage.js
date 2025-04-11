import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>EventDetail page welcome!</h1>
      <p>Event id - {params.eventId}</p>
    </>
  );
}
