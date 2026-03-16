import { Form, Input, Button, InputNumber, Select, Card } from "antd";
import { useState } from "react";



export default function PageLogin() {

  const onFinish = (values: any) => {
    console.log("Login:", values);
  };

  const onSubmit = (values: any) => {
    console.log("Register:", values);
  };

  const onAdd = (values: any) => {
    console.log("Product: ", values);
    
  }
  
  type Post = {
  title: string;
  category: string;
  slug: string;
  content: string;
  image: string;
};

const [data, setData] = useState<Post | null>(null);

  const onData = (values: any) => {
    console.log(values);
    setData(values);
  };


  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>

      {/* bai1*/}
      <h2>dang nhap</h2>
      <Form layout="vertical" onFinish={onFinish} style={{ marginBottom: 40 }}>
        
        <Form.Item label="Email" name="email" rules={[{ required: true, message: "nhap email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true, message: "nhap mk..." }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            dang nhap
          </Button>
        </Form.Item>

      </Form>


      {/* bai2  */}
      <h2>dang ky</h2>
      <Form layout="vertical" onFinish={onSubmit}>

        <Form.Item label="Tên" name="name" rules={[{ required: true, message: "Nhập tên" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[
            { required: true, message: "nhap email" },{ type: "email", message: "email nhap ko dung dinh dang" }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Mật khẩu" name="password" rules={[
            { required: true, message: "nhap mk" },{ min: 6, message: "MK toi thieu 6 ki tu" }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            dang ky
          </Button>
        </Form.Item>

      </Form>

      {/* bai 3 */}
      <h2>them dt</h2>

      <Form layout="vertical" onFinish={onAdd}>

        <Form.Item label="ten sp" name="name" rules={[{ required: true, message: "nhap ten dt" }]} >
          <Input placeholder="Vidu: iPhone 15 Pro Max" />
        </Form.Item>

        <Form.Item label="gia"  name="price" rules={[{ required: true, message: "nhap gia dt" }]} >
          <InputNumber style={{ width: "100%" }} placeholder="Vidu: 30000000" />
        </Form.Item>

        <Form.Item label="so luong" name="quantity" rules={[{ required: true, message: "so luong" }]} >
          <InputNumber style={{ width: "100%" }} placeholder="Ví dụ: 10" />
        </Form.Item>

        <Form.Item label="mo ta" name="description">
          <Input.TextArea rows={4} placeholder="mo ta..." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            them dt
          </Button>
        </Form.Item>

      </Form>

      {/* bai 4 */}
      <h2>them bai viet</h2>

      <Form layout="vertical" onFinish={onData}>

        <Form.Item label="title" name="title" 
            rules={[{ required: true, message: "nhap ten bai viet" }]} >
          <Input placeholder="Vidu: abc1223" />
        </Form.Item>

        <Form.Item label="category"  name="category" 
            rules={[{ required: true, message: "chon ..." }]} >
          <Select
            options={[
              { label: "Technology", value: "tech" },
              { label: "Education", value: "edu" },
              { label: "Entertainment", value: "ent" },
            ]}/>
        </Form.Item>

        <Form.Item label="slug" name="slug" 
        rules={[{ required: true, message: "sluggg" }]} >
          <Input style={{ width: "100%" }}  />
        </Form.Item>

        <Form.Item label="content" name="content">
          <Input.TextArea rows={4} placeholder="mo ta..." />
        </Form.Item>

        <Form.Item label="Image URL" name="image">
          <Input placeholder="https://image.jpg" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            submitt
          </Button>
        </Form.Item>

      </Form>
      
       {data && (
  <Card title="Post Data" style={{ marginTop: 20 }}>
    <p><b>Title:</b> {data.title}</p>
    <p><b>Category:</b> {data.category}</p>
    <p><b>Slug:</b> {data.slug}</p>
    <p><b>Content:</b> {data.content}</p>
    <p><b>Image:</b></p>
    <img src={data.image} alt="" width="200" />
  </Card>
)}
 
    </div>
  );
}