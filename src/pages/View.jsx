import React from 'react'
import Header from '../components/Header'
import { useState } from 'react'
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const View = () => {

    let data = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    const [record , setRecord] = useState(data)

    const [mDelete , setMDelete] = useState([])

    const handleDelete = (id) => {
        let remove = record.filter(val => val.id != id)
        localStorage.setItem('user',JSON.stringify(remove))
        setRecord(remove)
        toast("Record deleted...")
    }

    const multiDeleteBtn = () => {
        if(mDelete.length == 0){
            toast.error("At least one row select")
            return false
        }

        let deleteRecord = record.filter(val => !mDelete.includes(val.id))
        localStorage.setItem('user',JSON.stringify(deleteRecord))
        toast("Record deleted...")
        setRecord(deleteRecord)
    }

    const multiDelete = (id,checked) => {
        let all = [...mDelete]

        if(checked){
            all.push(id)
        }
        else{
            all = all.filter(val => val.id == id)
        }
        setMDelete(all)
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto mt-5">
                        <table className="table" border={2}>
                            <thead>
                                <tr>
                                    <th scope="col" className='py-3 px-5'>Id</th>
                                    <th scope="col" className='py-3 px-5'>Name</th>
                                    <th scope="col" className='py-3 px-5'>Description</th>
                                    <th scope="col" className='py-3 px-5'>Action</th>
                                    <th scope="col" className='py-3 px-5'>
                                        <button onClick={() => multiDeleteBtn()} className='btn btn-sm btn-danger'>Delete</button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   record.map((val) => {
                                    return(
                                        <tr key={val.id}>
                                            <td className='py-3 px-5'>{val.id}</td>
                                            <td className='py-3 px-5'>{val.name}</td>
                                            <td className='py-3 px-5'>{val.phone}</td>
                                            <td className='py-3 px-5'>
                                                <button onClick={() => handleDelete(val.id)} className='btn btn-sm btn-danger'>Delete</button>
                                            </td>
                                            <td className='py-3 px-5 text-center'>
                                                <input type="checkbox" onChange={(e) => multiDelete(val.id , e.target.checked)}/>
                                            </td>
                                        </tr>
                                    )
                                   })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}/>
        </div>
    )
}

export default View
