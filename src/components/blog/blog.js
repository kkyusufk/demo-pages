import React from 'react';

import './blog.css';

const Blog = ({ author, date, title, src }) => {
  return (
    <div className="blogContainer">
      <div className="blog">
        <div className="blog_author">
          <span>{author}</span> / <span>{date}</span>
        </div>
        <div className="blog_title">{title}</div>
        <div className="imageContainer"> 
          <img src={src} />
        </div>
      </div>
    </div>
  )
};

export { Blog };
