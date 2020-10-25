// check gatsby site for replication of some functions to gatsby-ssr
const React = require("react");
const { AnimateSharedLayout } = require("framer-motion");
const { Layout } = require("./src/components/layout/layout");
const { Provider } = require("./src/context/navContext");

exports.wrapPageElement = ({ element, props }) => {
  let ignoreLayout = false;
  if (element.key.match(/abhisek/)) ignoreLayout = true;
  return (
    <>
      {ignoreLayout ?
      <div> 
        {element}
      </div> : 
      <AnimateSharedLayout type="crossfade">
        <Layout {...props}>
          {element}
        </Layout>
      </AnimateSharedLayout>
      }
    </>
  )
};

exports.wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>;
};
