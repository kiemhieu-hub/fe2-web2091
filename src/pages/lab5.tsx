import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, Popconfirm, Table } from "antd";
import axios from "axios";

export function StoryList() {
    
    const { data, isLoading } = useQuery({
        queryKey: ["getAllStories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/stoties");
            return res.data;
        }
    });
    // xóa
    const x = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: async (id: number) => await axios.delete(`http://localhost:3000/stoties/${id}`),
        onSuccess: () => {
            x.invalidateQueries({ queryKey: ["stories"] });
        },
    });

    const columns = [
        {
            title: "Ten truyen",
            dataIndex: "title",
        },
        {
            title: "tac gia",
            dataIndex: "author"
        },
        {
            title: "Hinh anh",
            dataIndex: "image",
            render: (src: string) => <Image src={src} height={100} />,
        },
        {
            title: "Created At",
            dataIndex: "createdAt",
            render: (date: string) => new Date(date).toLocaleDateString("vi-VN")
        },
        {
            title: "Action",
            render: (_: any, record: any) => (
                <Popconfirm
                    title="Delete the story"
                    description="Are you sure to delete this story?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => mutate(record.id)}>
                    <Button danger>Delete</Button>
                </Popconfirm>
            ),
        },

    ];
    // const data = [];
    return <Table rowKey="id" columns={columns} dataSource={data} loading={isLoading} />;
}