import React, {useState, useEffect} from "react";
//  import employees from "./Sample.json";




const Table= () =>{
    const [column, setColumn] = useState([]);
    const [records, setRecords] = useState([]);
    

    useEffect(()=> {
        fetch('http://localhost:3000/Sample.json')
        .then(res=>res.json())
        .then(data => {
            setColumn(Object.keys(data.employees[0]))
            setRecords(data.employees)
    })
    },[]);

  /*  const handleEmployeeClick = (employees) => {
        selectedEmployee(employees);
    }
    const closeModal = () => {
        setSelectedEmployee(null);
    } */
    return (
        <div className="tab">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>Contact Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record,id)=> (
                        <tr key ={id}>
                            <td>{record.id}</td>
                            <td>{record.name}</td>
                            <td>{record.contact}</td>
                            <td>{record.Address}</td>
                        </tr>


                    ))}
                </tbody>
            </table>
            
           
        </div>
    )
}

export default Table;