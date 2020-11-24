import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import "./blogPage.css";

import { Blog } from "../../components/blog/blog";
import { FooterLinks } from "../../components/footer/footerLinks";
import { NAVITEMS, PAGES, SIZES } from "../../constants";
import { Spacing } from "../../components/spacing/spacing";

const BlogPage = () => {
  const { strapiBlogs } = useStaticQuery(query);
  console.log(strapiBlogs);
  return (
    <>
      <Spacing marginTop={SIZES.L}>
        <div className="blogLayout">
          <Link
            key={strapiBlogs.id}
            to="/blog/blogDetails/"
            style={{
              textDecoration: "none",
              color: "#000000",
            }}
            state={strapiBlogs}
          >
            <Blog
              author={strapiBlogs.author}
              date={strapiBlogs.date}
              title={strapiBlogs.title}
              src={strapiBlogs.metadata.meta_image.childImageSharp.fixed}
            />
          </Link>
        </div>
      </Spacing>
      <Spacing marginTop={SIZES.XXL}>
        <FooterLinks page={PAGES.BLOG} to={NAVITEMS.ABOUT} />
      </Spacing>
    </>
  );
};

const query = graphql`
  query MyQuery {
    strapiBlogs {
      id
      author
      title
      date(formatString: "DD/MM/YY")
      metadata {
        meta_image {
          childImageSharp {
            fixed {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
