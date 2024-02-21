import Blogs from "../../Components/Blogs/Blogs.jsx";
import Bookmarks from "../../Components/Bookmarks/Bookmarks.jsx";
import Header from "../../Components/Header/Header.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="md:flex">
        <Blogs />
        <Bookmarks />
      </main>
    </div>
  );
};
export default Home;
