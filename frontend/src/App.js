import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu, Button, theme } from 'antd';
import { CalendarOutlined, BookOutlined, CheckCircleOutlined, UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import './App.css';

const { Header, Sider, Content } = Layout;

// Placeholder components for different routes
const Dashboard = () => <div className="content"><h2>Dashboard</h2><p>Welcome to your Smart Study Planner</p></div>;
const StudyPlans = () => <div className="content"><h2>Study Plans</h2><p>Manage your study plans here</p></div>;
const Subjects = () => <div className="content"><h2>Subjects</h2><p>View and manage your subjects</p></div>;
const Progress = () => <div className="content"><h2>Progress</h2><p>Track your study progress</p></div>;
const Profile = () => <div className="content"><h2>Profile</h2><p>Manage your profile settings</p></div>;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
          <div className="logo">
            <h2>{collapsed ? 'SP' : 'Study Planner'}</h2>
          </div>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <CalendarOutlined />,
                label: <Link to="/">Dashboard</Link>,
              },
              {
                key: '2',
                icon: <BookOutlined />,
                label: <Link to="/plans">Study Plans</Link>,
              },
              {
                key: '3',
                icon: <BookOutlined />,
                label: <Link to="/subjects">Subjects</Link>,
              },
              {
                key: '4',
                icon: <CheckCircleOutlined />,
                label: <Link to="/progress">Progress</Link>,
              },
              {
                key: '5',
                icon: <UserOutlined />,
                label: <Link to="/profile">Profile</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: 8,
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/plans" element={<StudyPlans />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
