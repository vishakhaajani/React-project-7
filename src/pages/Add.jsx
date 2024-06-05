import React, { useState } from 'react'
import Header from '../components/Header'
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Add = () => {

    const [name , setName] = useState("")
    const [phone , setPhone] = useState("")

    let data = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []
    const [record , setRecord] = useState(data)

    const navigation = useNavigate("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name && !phone){
            toast.error("Must fill this...")
            return false;
        }

        let obj = {
            id : Math.floor(Math.random()*10000),
            name ,
            phone
        }

        let all = [...record,obj]

        localStorage.setItem('user',JSON.stringify(all))
        setRecord(all)
        toast("record Added...")
        setName("")
        setPhone("")
        setTimeout(() => {
            navigation("/")
        },2000)
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 mt-5 mx-auto">
                        <form onSubmit={handleSubmit} className='p-5 bg-light'>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} value={name || ""} />
                                
                            </div>
                            <div className="mb-4">
                                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setPhone(e.target.value)} value={phone || ""} />
                            </div>
                            <div className="button d-flex justify-content-center mt-4">
                                <button type="submit" className="btn bodyColor text-light">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}/>
        </div>
    )
}

export default Add
