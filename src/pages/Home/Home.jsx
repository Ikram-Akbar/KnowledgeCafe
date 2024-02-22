import { useState } from "react";
import Blogs from "../../Components/Blogs/Blogs.jsx";
import Bookmarks from "../../Components/Bookmarks/Bookmarks.jsx";
import Header from "../../Components/Header/Header.jsx";

const Home = () => {

  const [bookMarked, setBookmarked] = useState([]);
  const  [readingTime, setReadingTime] = useState(0);

  const handleAddToBookMarked = (blog) => {
    const newBookmarked = [...bookMarked, blog];
    setBookmarked(newBookmarked);
  };
  const handleReadingTime = (time) => {
    // console.log("time : ", readingTime);
    setReadingTime(readingTime+ time);
  };

  return (
    <div>
      <Header />
      <main className="md:flex  max-w-6xl mx-auto">
        <Blogs handleAddToBookMarked={handleAddToBookMarked} handleReadingTime={handleReadingTime} />
        <Bookmarks  bookMarked={bookMarked} readingTime={readingTime} />
      </main>
    </div>
  );
};
export default Home;
