import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3">
      <h1>Total Blogs : {blogs.length} </h1>
      <div className="blogs_data">
        {blogs.map((blog, idx) => (
          <Blog key={idx} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
