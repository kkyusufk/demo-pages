import React from 'react';
import './blogDetails.scss';
import { Blog } from '../../../components/blog/blog';
import { Div } from '../../../components/Div/Div';
import { SIZES } from '../../../constants';

const BlogDetails = ({ location = {} }) => {
  const { state ={} } = location;
  console.log(location)
  return (
    <>
    <Blog
      author={state.author}
      date={state.date}
      title={state.title}
      src={state.src}
  />
  <Div type={SIZES.L}>
    <div className="blog-content-container">
     <img src="https://source.unsplash.com/random" width="100%" height="300px" />
    </div>
  </Div>
  </>
  )
}

export default BlogDetails;