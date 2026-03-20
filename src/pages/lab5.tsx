import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, Popconfirm, Table } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

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
            title: "mota",
            dataIndex: "description"
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
                <>
                    <Popconfirm
                        title="X"
                        description="bạn muốn nó bay màu???"
                        okText="Có"
                        cancelText="Ko"
                        onConfirm={() => mutate(record.id)}>
                        <Button danger>Delete</Button>
                    </Popconfirm>
                    <Button type="primary">
                        <Link to={`/lab6/${record.id}`}>Edit</Link>
                    </Button>
                </>
            ),
        },

    ];
    // const data = [];
    return <Table rowKey="id" columns={columns} dataSource={data} loading={isLoading} />;
}