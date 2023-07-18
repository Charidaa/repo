import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Table } from 'react-bootstrap';
import { BrowserRouter, Route, Router, Routes, NavLink } from 'react-router-dom';
import Contact from './Contact';
import { useRef } from 'react';


export function Layout() {
  return (
    <nav className='bg-secondary p-2 mb-3 text-center '>
      <NavLink to="/" className="link" style={({ isActive }) => {
        return {
          textDecoration: isActive ? "none" : "underline",

        };
      }}>Main</NavLink>
      <NavLink to="/product" className="link"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",

          };
        }}>Product</NavLink>

      <NavLink to="/contact" className="link"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",

          };
        }}
      >
        Contact Us

      </NavLink>

    </nav >
  );

}
function Index() {
  const header1 = useRef();
  return (
    <>
      <Layout />
      <h3 ref={header1}>Hello</h3>
      <Button onClick={() => { header1.current.innerHTML = "Do you wanna seekouw with me ?" }}>Click Me</Button>
    </>
  );
}

function Product() {
  const table = useRef();
  const tr = useRef([]);
  const DeleteRow = (i) => {
    const index = tr.current[i].rowIndex;
    table.current.deleteRow(index);
  }

  const data = [
    ["Iphone", 45000],
    ["AirPod", 6000],
    ["Macbook", 45000],
    ["Ipad", 35000]
  ];
  return (
    <>
      <Layout />
      <h4>Product</h4>
      <Table striped border hover className='my-3 ' ref={table}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, i) => {
              return (
                <tr ref={(el) => { tr.current[i] = el }} key={i}>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td className='text-center'><button variant="danger" onClick={() => DeleteRow(i)}>
                    Delete
                  </button></td>
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
      {/*  //if you wanna use URL you should create this Element and cover this Element all */}
      <Container className='bg-light p-2 my-3' >
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/main' element={< Index />} />
          <Route path='/product' element={< Product />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>



  );
}

export default App;