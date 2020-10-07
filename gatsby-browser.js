const React = require("react")
const { Layout } = require('./src/components/layoutC/layout');
const { Provider } = require('./src/context/navContext');

exports.wrapPageElement = ({ element }) => {
  console.log(element)
  // TODO: maybe make this a little pretty
  return ( 
    <Layout>
      {element}
    </Layout>
  )
}

exports.wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>
}