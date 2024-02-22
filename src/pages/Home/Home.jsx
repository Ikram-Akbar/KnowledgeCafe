import { useState } from "react";
import Blogs from "../../Components/Blogs/Blogs.jsx";
import Bookmarks from "../../Components/Bookmarks/Bookmarks.jsx";
import Header from "../../Components/Header/Header.jsx";

const Home = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleAddToBookMarked = (blog) =>{
    console.log("Bookmarked");
  }
  return (
    <div>
      <Header />
      <main className="md:flex  max-w-6xl mx-auto">
        <Blogs handleAddToBookMarked={handleAddToBookMarked} />
        <Bookmarks />
      </main>
    </div>
  );
};
export default Home;
