import PropTypes from "prop-types";

const Bookmark = ({ bookMark }) => {
    const {id,title} = bookMark;
  console.log(bookMark);
  return (
    <div>
      <div className="collapse collapse-plus bg-base-200 mt-2">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        <h4>Id of Blog - {id}</h4>
        </div>
        <div className="collapse-content">
          <p>{title}</p>
        </div>
      </div>

    </div>
  );
};

Bookmark.propTypes = {
  bookMark: PropTypes.object.isRequired,
};

export default Bookmark;
