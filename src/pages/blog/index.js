import React from "react";
import "./blogPage.css";

import { Blog } from "../../components/blog/blog";
import { blogs, FOOTER } from "../../data";
import { Layout } from "../../components/layoutC/layout";
import { Heading } from "../../components/typography/heading/heading";
import { ALIGNMENT } from "../../constants";

const MainContent = () => {
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
      <Heading 
        innerHtml={FOOTER.blog}
        align={ALIGNMENT.CENTER}
        justify='center'
      />
    </>
  );
};

const BlogPage = () => {
  return <Layout MainContent={MainContent} />;
}

export default BlogPage;
