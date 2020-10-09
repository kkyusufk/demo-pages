import React from "react";
import "./blogPage.css";

import { Blog } from "../../components/blog/blog";
import { blogs } from "../../data";
import { FooterLinks } from "../../components/footer/footerLinks";
import { PAGES, SIZES } from "../../constants";
import { Div } from "../../components/Div/Div";

const BlogPage = () => {
  return (
    <>
      <Div type={SIZES.L}>
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
      </Div>
      <Div type={SIZES.XXL}>
        <FooterLinks page={PAGES.BLOG} to={PAGES.ABOUT}/>
      </Div>
    </>
  );
};

export default BlogPage;
