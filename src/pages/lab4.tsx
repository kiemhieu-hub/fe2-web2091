import { useMutation, useQueryClient } from "@tanstack/react-query";// baif 4 lab5
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import toast from "react-hot-toast";

export default function lab42() {
    const queryClient = useQueryClient(); // bai4 lab5
    const mutation = useMutation({
        mutationFn: async (data: any) => {
            await axios.post("http://localhost:3000/stoties", data);
        },
        onSuccess: () => {
            toast.success("Thêm truyện thành công");
        },

        onError: () => {
            toast.error("Có lỗi xảy ra");
        },
    });

    const onAdd = (values: any) => {
        mutation.mutate(values);
    };
    return (
        <Form layout="vertical" onFinish={onAdd} style={{ maxWidth: 500 }}>
            <Form.Item
                label="Tên truyện"
                name="title"
                rules={[{ required: true, message: "Nhập tên truyện" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Mô tả" name="description">
                <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item name="active" valuePropName="checked">
                <Checkbox>Active</Checkbox>
            </Form.Item>

            <Button type="primary" htmlType="submit" loading={mutation.isPending}>
                Thêm truyện
            </Button>
        </Form>
    );
};