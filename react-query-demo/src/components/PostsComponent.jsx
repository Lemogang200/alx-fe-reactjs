import { useQuery } from "react-query";
import { useQuery } from "@tanstack/react-query";


const fetchPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery("posts", fetchPosts);

  if (isLoading) {
    return <p className="p-6">Loading posts...</p>;
  }

  if (isError) {
    return (
      <p className="p-6 text-red-500">
        Error: {error.message}
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Posts (React Query)
      </h1>

      <button
        onClick={refetch}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Refetch Posts
      </button>

      <ul className="space-y-3">
        {data.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="bg-white p-4 rounded shadow"
          >
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-gray-600 text-sm">
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}