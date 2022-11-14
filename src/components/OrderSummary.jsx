import { useNavigate } from "react-router-dom";

export default function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <div>OrderSummary</div>
       <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}
