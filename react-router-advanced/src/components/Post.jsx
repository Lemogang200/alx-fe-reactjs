import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();

  return (
    <div>
      <h2>Post Details</h2>
      <p>Post ID: {id}</p>
    </div>
  );
}