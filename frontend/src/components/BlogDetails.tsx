import { Blog } from "../hooks";
import { Appbar } from "./Appbar";

export const BlogDetails = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="grid grid-cols-12 px-10 w-full">
        <div className=" bg-red-200 col-span-8">
          <div className="text-3xl font-extrabold">{blog.title}</div>
          <div className="">{blog.content}</div>
        </div>
        <div className=" bg-green-200 col-span-4">hello</div>
      </div>
    </div>
  );
};
