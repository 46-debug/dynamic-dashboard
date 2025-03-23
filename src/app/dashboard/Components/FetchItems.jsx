import PostList from "./PostList";

async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function Items() {
  const data = await getData();

  return (
    <div>
      <PostList posts={data} />
    </div>
  );
}

