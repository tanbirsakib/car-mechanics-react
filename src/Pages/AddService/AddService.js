import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Addservice.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('data inserted successfully')
                    reset();
                }
            })
    }


    return (
        <div className="addService">
            <h1>Add a service......</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <input type='number' {...register("price")} placeholder="price" />
                <textarea {...register("description")} placeholder="service description" />
                <input {...register("image")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;