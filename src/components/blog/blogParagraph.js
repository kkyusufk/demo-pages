import React from "react";

import "./blog.scss";

const BlogParagraph = ({ text, marginTop, color, center }) => {
  return (
    <p
      style={{ marginTop, color, margin: `${center && "0 auto"}` }}
      className="blog-paragraph"
    >
      {text}
    </p>
  );
};

export { BlogParagraph };
