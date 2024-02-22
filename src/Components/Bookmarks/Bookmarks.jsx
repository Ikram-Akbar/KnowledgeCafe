import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookMarked, readingTime }) => {
  return (
    <div className="w-1/3">
      <div>
        <h1 className="text-center text-2xl">Reading Time : {readingTime} minutes</h1>
      </div>
      <h1 className="text-center text-2xl mt-5">
        Bookmarks as a read list - {bookMarked.length}
      </h1>
      <div className=" p-5">
        {bookMarked.map((bookMark, idx) => (
          <Bookmark key={idx} bookMark={bookMark} />
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookMarked: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
