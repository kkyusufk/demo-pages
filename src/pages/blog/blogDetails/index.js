import React from "react";
import "./blogDetails.scss";
import { Blog } from "../../../components/blog/blog";
import { Div } from "../../../components/Div/Div";
import { SIZES } from "../../../constants";
import { BlogTemplate } from "../../../templates/blogTemplate";

const data = [
  {
    id: "Blog-Text",
    text: `Design has evolved through varied cultural and art progressions. 
  The Postmodern began with a liberalisation of ideas without any set adherence to rational order and formal organization. The movement has been an expressive and playful time for designers with a number of conspicuous trends – retro, techno, punk, grunge, beach, parody, and pastiche. There has been no singular defined design language or demi-gods; it is an anarchy of sorts. 
  
  The Postmodern is an ever-evolving organism, a mangled up mix of counter culture’s, aesthetics driven by nostalgic revivals, juxtaposed with advances in material technologies. Everyone and everything fits in this cacophonous bandwagon; the Postmodern is a never-ending journey we continue straddling, wandering, defining and redefining ourselves to suit its meanderings and hysterics. 
  
  The quote below pretty much sums it up.`,
  },
  {
    id: "Blog-Quotes",
    quotedText: `“Creativity is a slot machine. There’s a certain amount of intuitive thinking that goes into everything. It’s so hard to describe how things happen intuitively”, Paula Scher`,
  },
  { id: "Image", src: "https://source.unsplash.com/random" },
];

const BlogDetails = ({ location = {} }) => {
  const { state = {} } = location;
  return (
    <>
      <Blog
        author={state.author}
        date={state.date}
        title={state.title}
        src={state.src}
      />
      <Div type={SIZES.L}>
        <BlogTemplate data={data} />
      </Div>
    </>
  );
};

export default BlogDetails;
