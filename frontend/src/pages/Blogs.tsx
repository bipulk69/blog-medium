import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="justify-center max-w-xl">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Bipul"}
              title={blog.title}
              content={blog.content}
              publishedData={"14 May 2024"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
