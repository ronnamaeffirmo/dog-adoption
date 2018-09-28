import React, { Component } from 'react'
import { Layout } from 'antd'
import 'antd/dist/antd.css'

import Routes from './Routes'

const App = () => {
  return (
    <Layout style={styles.layout}>
      <Layout.Header style={styles.header}>Dog Adoption</Layout.Header>
      <Layout.Content style={styles.content}>
        <div style={styles.contentDiv}>
          <Routes />
        </div>
      </Layout.Content>
      <Layout.Footer style={styles.footer}>
        ronami ©2018
      </Layout.Footer>
    </Layout>
  );
}

const styles = {
  layout: {
    height: '100vh'
  },
  header: {
    position: 'fixed',
    zIndex: 1,
    width: '100%',
    color: 'white',
    paddingLeft: '426px'
  },
  content: {
    padding: '0 26px', 
    marginTop: 64
  },
  contentDiv: {
    paddingTop: '32px',
    paddingLeft: '400px',
    paddingRight: '400px',
    minHeight: 400
  },
  footer: {
    paddingLeft: '426px'
  }
}

export default App;
