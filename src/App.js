import logo from './logo.svg';
import './App.css';
import { Layout, Avatar, Menu, Breadcrumb, Button } from "antd";
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { useState } from 'react';
import CareerDetails from './CareerDetails';
// import { Button  } from 'bootstrap';

const { Header, Footer, Sider, Content } = Layout

function App() {
 const [stateValue, setStateValue] = useState('')
 const [visible, setVisible] = useState(false)

 const onSelect = name => {
   setStateValue(name)
   setVisible(true)
 }

 const onClose = () => setVisible(false)

 const ViewProfileButton = ({ name }) => (
   <button onClick={() =>onSelect(name)}>
     Press Me!
   </button>
 )
  return (
    <div className="App">
        <div className="d-flex justify-content-around align-items-center">
        <Layout>
          <Header style={{}} className="text-center">
            <Avatar size="large" shape="square" icon="user" />
            <Avatar size="small"  icon="user" />
            <Avatar icon="user" />
            <Title style={{color:"white"}} level={3}>Lord Gerald</Title>
          </Header>
          <Layout>
            <Sider style={{ backgroundColor: "red" }}>
              <Menu defaultOpenKeys={["Dashboard"]} mode="inline" >
                <Menu.Item key="DashBoard">DashBoard</Menu.Item>
                <SubMenu
                title={
                  <span>
                    {/* <Icon type="mail" /> */}
                    <span>NAvigation</span>
                  </span>
                }
                >
                  <Menu.ItemGroup title="Menu Group About Us">
                    <Menu.Item key="Abous Us">About US</Menu.Item>
                    <Menu.Item key="location">location</Menu.Item>
                    <Menu.Item key="location1">location</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Content className="text-center">
                <Breadcrumb style={{margin:"16px 0"}}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                  <div style={{background: '#fff', padding:'24px', minHeight: 280}}></div>
                </Breadcrumb>
              </Content>
              <CareerDetails player={stateValue} {...{visible}} {...{onClose}} />
              <Footer><ViewProfileButton name="LordGerald" /></Footer>
            </Layout>
          </Layout>
        </Layout>
        </div>
    </div>
  );  
}

export default App;
