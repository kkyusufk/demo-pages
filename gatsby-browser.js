import React from "react";
import { Layout } from './src/components/layoutC/layout';
import { Provider } from './src/context/navContext';

export function wrapPageElement({ element }) {
  // TODO: maybe make this a little pretty
  return ( 
    <Provider>
      <Layout>
        {element.props.children.props.children}
      </Layout>
    </Provider>
  )
}