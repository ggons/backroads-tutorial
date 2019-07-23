import React from 'react';
import Layout from '../components/Layout'
import Images from '../examples/Images'

export default props => {
  console.log(props);

  return (
    <Layout>
      <Images />
    </Layout>
  )
}