import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Something went wrong... ";

  if (error.status === 500) {
    const data = JSON.parse(error.data);
    message = data.message;
  } else if (error.status === 404) {
    message = "Not found...";
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}
