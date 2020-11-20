import React from "react";

import "./blog.scss";

const Blog = ({ author, date, title, src }) => {
  return (
    <div className="blogContainer">
      <div className="blog">
        <div className="blog-header">
          <h2 className="grey">
            {author} / {date}
          </h2>
          <div className="blog-title heading-h1">{title}</div>
        </div>
        <div className="imageContainer">
          <img src={src} />
        </div>
      </div>
    </div>
  );
};

export { Blog };
