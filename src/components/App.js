import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import '../styles/app.css'

import Routes from './Routes'

const App = ({ history }) => {
  return (
    <Layout>
      <Layout.Header style={styles.header}>
        <a onClick={() => history.push('/')}>Dog Adoption</a>
      </Layout.Header>
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

export default withRouter(App);
