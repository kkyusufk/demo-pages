import React from 'react';
import { Blog } from '../../components/blog/blog';

import './blogPage.css';
import { blogs } from '../../data';

const BlogPage = () => {
  return (
    <div className="blogLayout">
      {blogs.map(blog => {
        return <Blog 
          author={blog.author}
          date={blog.date}
          title={blog.title}
          src={blog.src}
        />
      })}
    </div>
  )
};

export default BlogPage;