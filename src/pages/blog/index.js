import React from "react";
import "./blogPage.css";

import { Blog } from "../../components/blog/blog";
import { blogs, FOOTER } from "../../data";
import { FooterLinks } from "../../components/footer/footerLinks";
import { PAGES } from "../../constants";

const BlogPage = () => {
  return (
    <>
      <div className="blogLayout">
        {blogs.map((blog) => {
          return (
            <Blog
              author={blog.author}
              date={blog.date}
              title={blog.title}
              src={blog.src}
            />
          );
        })}
      </div>
      <div>
        <FooterLinks page={PAGES.BLOG} to={PAGES.ABOUT} />
      </div>
    </>
  );
};

export default BlogPage;
