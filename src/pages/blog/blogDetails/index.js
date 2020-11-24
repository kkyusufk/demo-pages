import React, { useRef, useEffect } from "react";
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

const BlogDetails = ({ location }) => {
  const compactShareIt = useRef();
  const expndedShareIt = useRef();
  useEffect(() => {
    let prevRatio = 0.0;
    function buildThresholdList() {
      let thresholds = [];
      let numSteps = 20;
    
      for (let i=1.0; i<=numSteps; i++) {
        let ratio = i/numSteps;
        thresholds.push(ratio);
      }
    
      thresholds.push(0);
      return thresholds;
    }
    // configure the intersection observer instance
    const intersectionObserverOptions = {
      root: null, // default is the viewport
      rootMargin: "0px",
      threshold: buildThresholdList(), // percentage of the taregt visible area which will trigger "onIntersection"
    };

    const observer = new IntersectionObserver(
      onIntersection,
      intersectionObserverOptions
    );

    // called when target is fully visible
    function onIntersection(entries, opts) {
      const { style } = compactShareIt.current;
      console.log(entries, opts)
      entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
          style.opacity = style.opacity - 0.30;
        } else {
          style.opacity = 1;
        }
        prevRatio = entry.intersectionRatio;
      });
    }

    // provide the observer with a target
    observer.observe(expndedShareIt.current);

    return function cleanUp() {
      observer.unobserve(expndedShareIt.current);
    };
  });
  return (
    <>
      {environmentUtil.isWindowDefined() ? (
        <>
          <Spacing marginTop={SIZES.L}>
            <Blog
              author={location.state.author}
              date={location.state.date}
              title={location.state.title}
              src={location.state.metadata.meta_image.childImageSharp.fixed}
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
      ) : (
        "null"
      )}
    </>
  );
};

export default BlogDetails;
