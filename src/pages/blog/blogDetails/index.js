import React, { useState, useRef, useEffect } from "react";
import "./blogDetails.scss";
import { Blog } from "../../../components/blog/blog";
import { Spacing } from "../../../components/spacing/spacing";
import { SIZES } from "../../../constants";
import { BlogTemplate } from "../../../templates/blogTemplate";
import { ShareIt } from "../../../components/blog/shareIt";
import { environmentUtil } from "../../../utils/environmentUtil";

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
  const [opacity, setOpacity] = useState(1);
  const compactShareIt = useRef();
  const expndedShareIt = useRef();
  const { state = {} } = location;

  useEffect(() => {
    // configure the intersection observer instance
    const intersectionObserverOptions = {
      root: null, // default is the viewport
      threshold: 0.1, // percentage of the taregt visible area which will trigger "onIntersection"
    };

    const observer = new IntersectionObserver(
      onIntersection,
      intersectionObserverOptions
    );

    // called when target is fully visible
    function onIntersection(entries, opts) {
      entries.forEach((entry) => {
        const visible = entry.intersectionRatio >= opts.thresholds[0];
        if (visible) {
          compactShareIt.current.style.opacity = 0
        } else {
          compactShareIt.current.style.opacity = 1
        }
      });
    }

    // provide the observer with a target
    observer.observe(expndedShareIt.current);

    return function cleanUp() {
      observer.unobserve(expndedShareIt.current)
    }
  });
  return (
    <>
      <Spacing marginTop={SIZES.L}>
        <Blog
          author={state.author}
          date={state.date}
          title={state.title}
          src={state.src}
        />
      </Spacing>
      <Spacing marginTop={SIZES.L}>
        <BlogTemplate data={data} />
      </Spacing>
      <Spacing marginTop={SIZES.XL}>
        <ShareIt forwardRef={expndedShareIt} />
      </Spacing>
      <div className="share-it-compact-container">
        <ShareIt toast={true} forwardRef={compactShareIt} />
      </div>
    </>
  );
};

export default BlogDetails;
