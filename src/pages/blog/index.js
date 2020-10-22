import React from "react";
import "./blogPage.css";

import { Blog } from "../../components/blog/blog";
import { blogs } from "../../data";
import { FooterLinks } from "../../components/footer/footerLinks";
import { NAVITEMS, PAGES, SIZES } from "../../constants";
import { Div } from "../../components/Div/Div";
import { Link } from "gatsby";

const BlogPage = () => {
  return (
    <>
      <Div type={SIZES.L}>
        <div className="blogLayout">
          {blogs.map((blog) => {
            return (
              <Link to="/blog/blogDetails/" style={{
                textDecoration: 'none',
                color: '#000000'
              }} state={blog}>
                <Blog
                  author={blog.author}
                  date={blog.date}
                  title={blog.title}
                  src={blog.src}
                />
              </Link>
            );
          })}
        </div>
      </Div>
      <Div type={SIZES.XXL}>
        <FooterLinks page={PAGES.BLOG} to={NAVITEMS.ABOUT} />
      </Div>
    </>
  );
};

export default BlogPage;
