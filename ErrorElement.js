import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="error">
      <h1>Opps! 🙈</h1>
      <h4>
        {err.status}: {err.statusText}
      </h4>
    </div>
  );
};
export default ErrorElement;
