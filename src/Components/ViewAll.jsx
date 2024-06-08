import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const[data,changeData]=useState([] )
    const fetchData=() =>{
      axios.get("https://jsonplaceholder.typicode.com/todos").then(

        (response)=>{
          changeData(response.data)
        }
      ).catch().finally()

  }
  useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">USERID</th>
                                            <th scope="col">TITLE</th>
                                            <th scope="col">ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(
                                            (value, indes) => {
                                                return  <tr>
                                                <th scope="row">{value.userId}</th>
                                                <td>{value.title}</td>
                                                <td>{value.id}</td>
                                            </tr>
                                            }
                                        )}
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll