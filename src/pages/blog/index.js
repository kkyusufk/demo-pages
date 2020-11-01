import React from "react";
import "./blogPage.css";

import { Blog } from "../../components/blog/blog";
import { blogs } from "../../data";
import { FooterLinks } from "../../components/footer/footerLinks";
import { NAVITEMS, PAGES, SIZES } from "../../constants";
import { Spacing } from "../../components/spacing/spacing";
import { Link } from "gatsby";

const BlogPage = () => {
  return (
    <>
      <Spacing marginTop={SIZES.L}>
        <div className="blogLayout">
          {blogs.map((blog) => {
            return (
              <Link
                to="/blog/blogDetails/"
                style={{
                  textDecoration: "none",
                  color: "#000000",
                }}
                state={blog}
              >
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
      </Spacing>
      <Spacing marginTop={SIZES.XXL}>
        <FooterLinks page={PAGES.BLOG} to={NAVITEMS.ABOUT} />
      </Spacing>
    </>
  );
};

export default BlogPage;
