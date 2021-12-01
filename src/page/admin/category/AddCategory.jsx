import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const AddCategory = (props) => {
    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        props.onAdd(data);
        navigate("/admin/category", { replace: true });
    }
    const addCategory = () => {
        return (
            <form className="content__box-product-add" method="POST" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="content__box-product-add-name">Thêm Danh muc</h3>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="" {...register('name')} />
                </div>
                <button className="content__box-product-btn" name="btnSend">Thêm Danh muc</button>
            </form>
        )
    }
    return <div>{addCategory()}</div>
};

export default AddCategory;
