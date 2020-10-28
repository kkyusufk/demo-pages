// check gatsby site for replication of some functions to gatsby-ssr
const React = require("react");
const { AnimateSharedLayout } = require("framer-motion");
const { Layout } = require("./src/components/layout/layout");
const { Provider } = require("./src/context/navContext");
const { team } = require("./src/data");

exports.wrapPageElement = ({ element, props }) => {
  let ignoreLayout = false;
  const teamMembers = [];
  team.forEach((member) => teamMembers.push(`/about/${member.id}`));
  teamMembers.forEach((member) => {
    if (element.key && element.key.match(RegExp(member))) {
      ignoreLayout = true;
    }
  });
  return (
    <>
      {ignoreLayout ? (
        <div>{element}</div>
      ) : (
        <AnimateSharedLayout type="crossfade">
          <Layout {...props}>{element}</Layout>
        </AnimateSharedLayout>
      )}
    </>
  );
};

exports.wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>;
};
