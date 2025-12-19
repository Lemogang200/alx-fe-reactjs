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
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    // ✅ Data is considered fresh for 1 minute
    staleTime: 1000 * 60,

    // ✅ Cache stays in memory for 5 minutes after unmount
    cacheTime: 1000 * 60 * 5,

    // ✅ Disable auto-refetch when switching browser tabs
    refetchOnWindowFocus: false,

    // ✅ Keep old data while refetching
    keepPreviousData: true,
  });

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
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Refetch Posts
      </button>

      {isFetching && (
        <p className="text-sm text-gray-500 mb-2">
          Updating data...
        </p>
      )}

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