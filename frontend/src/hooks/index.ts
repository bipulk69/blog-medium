import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blog {
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
  };
}
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log("Response:", response);
        setBogs(response.data.blogs);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching blogs:", error);
        console.log("Error status:", error.response?.status);
      });
  }, []);

  return {
    loading,
    blogs,
  };
};
