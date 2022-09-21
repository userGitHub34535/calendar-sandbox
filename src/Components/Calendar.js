import React, { useEffect, useState, useSyncExternalStore } from 'react';
//display information to the UI using AXIOS GET
import axios from "axios";

export default function Home() {

    const [timeLaboureds, setTimeLaboureds] = useState([])

    useEffect(() => {
        console.log("Test useEffect SS");
        loadTimeLaboureds();
    }, [])
    
    const loadTimeLaboureds = async () => {
        const result = await axios.get("http://localhost:8080/getAllTimeLaboreds");
        console.log(result.data);
        setTimeLaboureds(result.data);
    }
    return (
        <div>
            HI!!!
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Id</th>
                        <th>Desc</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        timeLaboureds.map((timeLaboured, index) => {
                            <tr>
                                <td scope="row" key={index}>
                                    {index + 1}
                                </td>
                                <td>{timeLaboured.categoryId}</td>
                                <td>{timeLaboured.description}</td>
                                <td>{timeLaboured.name}</td>
                            </tr>

                        })
                    }

                    {/* {
                            timeLaboureds.map((timeLaboured, index) => {
                                <tr>
                                    <th scope="row" key = {index}>
                                        {index+1}
                                    </th>
                                    <td>{timeLaboured.categoryId}</td>
                                    <td>{timeLaboured.description}</td>
                                    <td>{timeLaboured.name}</td>
                                </tr>

                            })
                        } */}
                </tbody>
            </table>
        </div>
    )
}


