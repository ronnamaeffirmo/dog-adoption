import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'

import 'antd/dist/antd.css'

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header style={styles.header}>Dog Adoption</Header>
        <Content style={styles.content}>
          <div style={styles.contentTitle}>List of Doges</div>
        </Content>
        <Footer>ronami ©2018</Footer>
      </Layout>
    );
  }
}

const styles = {
  header: {
    position: 'fixed',
    zIndex: 1, 
    width: '100%',
    color: 'white'
  },
  content: {
    padding: '0 26px', 
    marginTop: 64
  },
  contentTitle: {
    fontSize: 30,
    padding: 24, 
    minHeight: 380
  }
}

export default App;
