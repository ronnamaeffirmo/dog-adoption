import React from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Row, Col } from 'antd'
import 'antd/dist/antd.css'
import '../styles/app.css'

import Routes from './Routes'

const App = ({ history }) => {
  return (
    <Layout>
      <Layout.Header style={styles.header}>
        <Col span={6}></Col>
        <Col span={12}>
          <a onClick={() => history.push('/')}>Dog Adoption</a>
        </Col>
        <Col span={6}></Col>
      </Layout.Header>
      <Layout.Content style={styles.content}>
        <Row>
          <Col span={6}></Col>
          <Col span={12} style={styles.col}>
            <Routes />
          </Col>
          <Col span={6}></Col>
        </Row>
      </Layout.Content>
      <Layout.Footer style={styles.footer}>
        <Col span={6}></Col>
        <Col span={12}>
          ronami ©2018
        </Col>
        <Col span={6}></Col>
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
    paddingLeft: '16px'
  },
  content: {
    marginTop: 96
  },
  col: {
    minHeight: 400
  },
  footer: {
    paddingLeft: '16px'
  }
}

export default withRouter(App);
