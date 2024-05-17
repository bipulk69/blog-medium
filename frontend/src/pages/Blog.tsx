import { BlogDetails } from "../components/BlogDetails";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

// atomFamilies/
export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading) {
    return <div> Loading..</div>;
  }

  // if (!blog) {
  //   return <div>No blog found</div>;
  // }
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};
