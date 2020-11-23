import React from "react";
import Img from "gatsby-image";
import { formatDate } from "../../utils/dateUtil";

import "./blog.scss";

const Blog = ({ author, date, title, src }) => {
  console.log(src);
  return (
    <div className="blogContainer">
      <div className="blog">
        <div className="blog-header">
          <h2 className="grey">
            {author} / {formatDate(date)}
          </h2>
          <div className="blog-title heading-h1">{title}</div>
        </div>
        <div className="imageContainer">
          <img src={src.srcWebp} width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export { Blog };
