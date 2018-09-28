import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import 'antd/dist/antd.css'

import Dogs from './Dogs'

const App = () => {
  return (
    <Layout style={styles.layout}>
      <Layout.Header style={styles.header}>Dog Adoption</Layout.Header>
      <Layout.Content style={styles.content}>
        <div style={styles.contentDiv}>
          <h1>List of Doges</h1>
          <Dogs />
        </div>
      </Layout.Content>
      <Layout.Footer>ronami ©2018</Layout.Footer>
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
    color: 'white'
  },
  content: {
    padding: '0 26px', 
    marginTop: 72
  },
  contentDiv: {
    padding: '42px 68px 68px 68px',
    minHeight: 400
  },
}

export default App;
