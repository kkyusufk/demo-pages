// check gatsby site for replication of some functions to gatsby-ssr
const React = require("react");
const { Layout } = require("./src/components/layout/layout");
const { Provider } = require("./src/context/navContext");

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

exports.wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>;
};
