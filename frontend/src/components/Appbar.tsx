import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className="flex flex-col justify-center">MEDIUM</div>
      <div>
        <Avatar name="Bipul" size={"big"} />
      </div>
    </div>
  );
};
