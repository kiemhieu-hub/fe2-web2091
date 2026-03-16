import { Button, Table } from "antd";


//bai1
const colum = [
    {title: "Name" , dataIndex:"name"},
    {title: "Age" , dataIndex:"age"},
    {title: "Major" , dataIndex:"major"},
    
];

const data =[
    {key:1 , name: "Tuan" , age: 18 ,major: "CNTT" },
    {key:2 , name: "Tu" , age: 19 ,major: "Phu Ho" },
    {key:3 , name: "Trang" , age: 20 ,major: "Ke Toan" },

];
//bai3
const colum2 = [
    {title: "Name" , dataIndex:"name"},
    {title: "Email" , dataIndex:"email"},
    {title: "Status" , dataIndex:"status",
        render: (status : string) => (
           <span style={{ color: status === "active" ? "green" : "red" }}>
        {status}
      </span>
        ),
    },
    {title: "Action",
        key: "action",
        render:(_:any,record:any) => (
        <>
        <Button style={{ background: "orange", color: "white" }}>Edit</Button>
        <Button style={{ background: "red", color: "white", marginLeft: 8 }}>Delete</Button>
        </>)
    }
];

const data2 =[
    {key:1 , name: "Tuan" ,email:"a@gmail.com",status:"active" },
    {key:2 , name: "Tu" ,email:"b@gmail.com",status:"inactive" },

];


export default function Page2(){
    return(
        <>
        {/*Bai 1 phân trang làm vào b1*/}
    <Table columns={colum} dataSource={data} pagination={{ pageSize: 2 }}/>
    {/* bai 3 */}
    <Table columns={colum2} dataSource={data2}/>
    </>
    );
}