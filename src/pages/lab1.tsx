import { Button, Form, Input, Layout, Menu, Table } from "antd";


const { Header, Content, Sider } = Layout;


const columns2 = [
  { title: "Name", dataIndex: "name" },
  { title: "Email", dataIndex: "email" },
  { title: "Role", dataIndex: "role" },
];

const data2 = [
  { key: 1, name: "NG van a", email: "a@gmail.com", role: "Admin" },
  { key: 2, name: "Ng thi B", email: "b@gmail.com", role: "User" },
  { key: 3, name: "Tran Van c", email: "c@gmail.com", role: "Editor" },
]
const onFinish = (values: any) => {
  console.log("Form Data:", values);
};


export default function Page() {
  return (

    <Layout style={{ minHeight: "100vh" }}>

      <Header style={{ color: "white", fontSize: 20 }}>
        Dashboard Header
      </Header>

      <Layout>

        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              { key: "1", label: "Dashboard" },
              { key: "2", label: "Users" },
              { key: "3", label: "Settings" },
            ]}
          />
        </Sider>


        <Content style={{ padding: "20px" }}>
         
          <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
            <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter your name" }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please enter your email" }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please enter your password" }]}>
              <Input.Password />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Submit
            </Button>

          </Form>
         
          <h2 style={{ marginTop: 40 }}>User List</h2>
          <Table columns={columns2} dataSource={data2} />

        </Content>

      </Layout>

    </Layout>
  );
}