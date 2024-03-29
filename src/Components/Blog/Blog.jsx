import PropTypes from "prop-types";

const Blog = ({ blog, handleAddToBookMarked, handleReadingTime }) => {
  const {
    title,
    cover_img,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog || {};

  return (
    <div>
      <div className="card m-4 shadow-xl">
        <figure>
          <img
            className="h-80 w-full "
            src={cover_img}
            alt={`title of img : ${title}`}
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{title}</h2>
            <div className="flex items-center">
              <p className="text-gray-600 mr-4">{reading_time} minutes</p>
              <button onClick={() => handleAddToBookMarked(blog)}>
                Bookmark
              </button>
              {/* <button
                onClick={handleAddToBookMarked}
                className={`rounded-full p-2 ${
                  isBookmarked ? "bg-yellow-500" : ""
                }`}
              >
                Bookmark
              </button> */}
            </div>
          </div>
          <div className="flex">
            <div>
              <img
                className="w-10 h-10 rounded-full "
                src={author_img}
                alt=""
              />
            </div>
            <div className="ml-4">
              <p>{author}</p>
              <p>{posted_date}</p>
            </div>
          </div>
          <div className="card-actions">
            {hashtags.map((tag, idx) => (
              <div key={idx} className="badge badge-outline">
                <p className="text-white">{tag}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleReadingTime(reading_time)}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Complete Reading
          </button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMarked: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};

export default Blog;
