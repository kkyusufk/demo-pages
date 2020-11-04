import React from "react";

import "./blog.scss";

const Blog = ({ author, date, title, src }) => {
  return (
    <div className="blogContainer">
      <div className="blog">
        <div className="blog-header">
          <h2 className="grey">{author} / {date}</h2>
          <h1 className="blog-title">{title}</h1>
        </div>
        <div className="imageContainer">
          <img src={src} />
        </div>
      </div>
    </div>
  );
};

export { Blog };
