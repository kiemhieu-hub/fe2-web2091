import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function EditStory() {
     const { id } = useParams();
     const navigate = useNavigate();//chuyen trang
    // Lấy dữ liệu chi tiết
    const { data } = useQuery({
        queryKey: ["story", id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/stoties/${id}`);
            return res.data;
        },

    });
    // Fill form
    const [form] = Form.useForm();
    useEffect(() => {
        if (data) {
            form.setFieldsValue(data);
        }
    }, [data]);

    const onFinish = (values: any) => {
        // console.log(values);
        mutation.mutate(values);

    }

    // Update
    const mutation = useMutation({
    mutationFn: async (values: any) => {
        console.log("Updating...");
        return await axios.put(`http://localhost:3000/stoties/${id}`, values);
    },
    onSuccess: () => {
        message.success("Cap nhat thanh cong");
        navigate("/lab5");
    },
});

    return (
        <Form layout="vertical" form={form} onFinish={onFinish} >
            <Form.Item label="Ten Truyen" name="title"
             rules={[{required:true, message:"Nhap ten truyen"}]}>
                <Input />
            </Form.Item>
            <Form.Item name="author" label="Tác giả"
            rules={[{required:true, message:"nhap ten tac gia"}]}>
                <Input />
            </Form.Item>

            <Form.Item name="image" label="Ảnh">
                <Input />
            </Form.Item>

            <Form.Item name="description" label="Mô tả">
                <Input.TextArea />
            </Form.Item>
            <Button htmlType="submit" type="primary" loading={mutation.isPending}>Submit</Button>
        </Form>
    );
}