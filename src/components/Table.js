import React, {useState} from "react";
import employees from "./Sample.json";



const Table= ({employees, showModal}) =>{
    
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
                    {employees.map((employees,id => (
                        <tr key ={id}>
                            <td>{employees.name}</td>
                            <td>{employees.contact}</td>
                            <td>{employees.address}</td>
                        </tr>


                   ) ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;