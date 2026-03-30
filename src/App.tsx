import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { Layout } from "antd";
import Page from "./pages/lab1";
import Page2 from "./pages/lab2";
import PageLogin from "./pages/lab3";
import Lab4 from "./pages/lab4test";
import Lab42 from "./pages/lab4";
import { StoryList } from "./pages/lab5";
import { EditStory } from "./pages/lab6";

import Navbar from "./components/Header";



// const { Header, Content, Footer } = Layout;

function App() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  
  return (
    <>
     
      {/* <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/lab1" className="hover:text-gray-200">
              Lab1
            </Link>
            <Link to="/lab2" className="hover:text-gray-200">
              Lab2
            </Link>
            <Link to="/lab3" className="hover:text-gray-200">
              lab3
            </Link>
            <Link to="/lab4" className="hover:text-gray-200">
              lab4
            </Link>
            <Link to="/lab42" className="hover:text-gray-200">
              lab4,2
            </Link>
            <Link to="/lab5" className="hover:text-gray-200">
              lab5
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav> */}
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        {/* <Button type="primary">Click me</Button>
        <Button type="default">Click me</Button>
        <Button type="dashed">Click me</Button>
        <Button type="link">Click me</Button>
        <Button type="text">Click me</Button>

        <Layout>
          <Header style={{ color: "white" }}>Header</Header>
          <Content style={{ padding: 20 }}>
            <Form onFinish={onFinish}>
              <Form.Item label="Username" name="fullname">
                <Input placeholder="username"/>
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="default">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Content>
          <Footer>Footer</Footer>
        </Layout> */}
       
      <Routes>
          <Route path="/lab1" element={<Page />} />    {/* lab1 */}
          <Route path="/lab2" element={<Page2 />} />{/* lab2 */}
          <Route path="/lab3" element={<PageLogin />} />{/* lab3 */}
          <Route path="/lab4" element={<Lab4 />} />{/* lab4 */}
          <Route path="/lab42" element={<Lab42 />} />{/* lab4 */}
          <Route path="/lab5" element={<StoryList/>} />{/* lab5 */}
          <Route path="/lab6/:id" element={<EditStory/>} />{/* lab6 - edit */}
          <Route path="/lab7" element={<EditStory/>} />{/* lab7 */}

     </Routes>
        

      </div>

      <Toaster />
    </>
  );
}

export default App;
