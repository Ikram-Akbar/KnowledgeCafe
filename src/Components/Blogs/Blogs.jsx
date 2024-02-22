import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookMarked}) => {
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
          <Blog handleAddToBookMarked={handleAddToBookMarked} key={idx} blog={blog} />
        ))}
      </div>
    </div>
  );
};
Blogs.propTypes = {
  handleAddToBookMarked: PropTypes.object.isRequired,
};
export default Blogs;
