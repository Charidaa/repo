import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button, Table } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


export function Layout() {
  return (
    <nav className="bg-warning p-2 mb-3 text-left">
      <NavLink
        to="/"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าเเรก
      </NavLink>
      <NavLink
        to="/product"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ตารางเทียบเเคลอรี
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
  );
}

function Index() {
  const header1 = useRef();
  return (
    <>
      <Layout />
      <td className="text-center">
      <h3 ref={header1}>อาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพตามวิถีภูมิปัญญาท้องถิ่นของจังหวัดอุบลราชธานี</h3>
    </td>
    </>
  );
}

function Product() {
  const table = useRef();
  const tr = useRef([]);
  const DeleteRow = (i) => {
    const index = tr.current[i].rowIndex;
    table.current.deleteRow(index);
  };

  const data = [
    ["หลนเค็มบักนัด ", 200],
    ["เแกงเห็ดเผำะไข่มดแดง", 350],
    ["ผัดไทหมื่นปีห่อใบบัว", 250],
  ];

  return (
    <>
      <Layout />
      <h4>ตารางเทียบเเคลอรี</h4>
      <Table striped bordered hover className="my-3" ref={table}>
        <thead>
          <tr>
            <th>เมนูอาหาร</th>
            <th>พลังงานที่ได้รับ</th>
            <th>เลือกเมนูนี้</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr
                ref={(el) => {
                  tr.current[i] = el;
                }}
                key={i}
              >
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td className="text-center">
                  <Button variant="primary" onClick={() => DeleteRow(i)}>
                    เลือกเมนูนี้
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;