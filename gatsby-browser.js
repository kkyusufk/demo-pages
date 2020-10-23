// check gatsby site for replication of some functions to gatsby-ssr
const { AnimateSharedLayout } = require("framer-motion");
const React = require("react");
const { Layout } = require("./src/components/layout/layout");
const { Provider } = require("./src/context/navContext");

exports.wrapPageElement = ({ element, props }) => {
  return (
    <AnimateSharedLayout type="crossfade">
      <Layout {...props}>
        {element}
      </Layout>
    </AnimateSharedLayout>
  )
};

exports.wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>;
};
