import { Table } from "antd";


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
    }
];

const data2 =[
    {key:1 , name: "Tuan" ,email:"a@gmail.com",status:"active" },
    {key:1 , name: "Tuan" ,email:"a@gmail.com",status:"inactive" },

];


export default function Page2(){
    return(
        <>
        {/*Bai 1*/}
    <Table columns={colum} dataSource={data}/>
    {/* bai 3 */}
    <Table columns={colum2} dataSource={data2}/>
    </>
    );
}