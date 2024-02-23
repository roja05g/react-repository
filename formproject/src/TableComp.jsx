import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';

function TableComp() {
 const [allData, setAllData] = useState([])
  setInterval(() => {
    setAllData(JSON.parse(localStorage.getItem('userData')))
    console.log(allData);
  }, 1000);
  return (
    <div className='container pt-5'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Car model</th>
        </tr>
        </thead>
      <tbody>
        {
          allData.map((value,index)=>{
            return <tr>
            <td>{index+1}</td>
            <td>{value.name}</td>
            <td>{value.email}</td>
            <td>{value.carmodel}</td>
          </tr>
          })
        }
        </tbody>
      </Table>
      </div>
  )
  }

export default TableComp;
