import React from "react";
import { Layout } from './src/components/layoutC/layout';
import { Provider } from './src/context/navContext';

export function wrapPageElement({ element }) {
  console.log(element)
  // TODO: maybe make this a little pretty
  return ( 
    <Layout>
      {element}
    </Layout>
  )
}

export function wrapRootElement({ element }) {
  return <Provider>{element}</Provider>
}