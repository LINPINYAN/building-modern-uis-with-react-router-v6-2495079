import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const location = useLocation();
  const { state } = location || {};

  return (
    <div className="container">
      <h1>Thank You!</h1>

      {state ? (
        <>
          <p>{state.name}, you're now registered for Red30 Tech.</p>
          <p>
            We've sent more details to <strong>{state.email}</strong>.
          </p>
        </>
      ) : (
        <p>No registration details found. Please register again.</p>
      )}
    </div>
  );
}