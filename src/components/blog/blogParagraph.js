import React from "react";

import './blog.css'

const BlogParagraph = ({ text, marginTop, color }) => {
  return <p style={{ marginTop, color }} className="blog-paragraph">{text}</p>;
};

export { BlogParagraph };
