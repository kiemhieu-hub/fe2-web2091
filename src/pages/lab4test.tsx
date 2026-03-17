import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
export default function Lab4() {

  interface Story {
  id?: number;
  title: string;
  description?: string;
  checkbox: boolean ;
}
    const mutation = useMutation({
        mutationFn: async (values:Story) => {
         await axios.post<Story>(" http://localhost:3000/stoties", values);
        },

    onSuccess: () => {
      toast.success("Thêm truyện thành công");
    },

    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });

  const onFinish = (values: Story) => {
    mutation.mutate(values);
  };
    
  return(
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
      <Form.Item
        label="Tên truyện"
        name="title"
        rules={[{ required: true, message: "Nhập tên truyện" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Tác giả" name="author">
        <Input />
      </Form.Item>

      <Form.Item label="Image URL" name="image">
        <Input />
      </Form.Item>

      <Form.Item label="Mô tả" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={mutation.isPending}>
        Thêm truyện
      </Button>
    </Form>
  );
};