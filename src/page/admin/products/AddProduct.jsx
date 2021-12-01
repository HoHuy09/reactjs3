import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const AddProduct = (props) => {
    let navigate = useNavigate();
    console.log(props.category);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        props.onAdd(data);
        navigate("/admin/product", { replace: true });
    }
    const addProductFrom = () => {
        return (
            <form className="content__box-product-add" method="POST" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="content__box-product-add-name">Thêm sản phẩm</h3>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="" {...register('name')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Category</label>

                    <select className="form-select" aria-label="Default select example" {...register('cate_id')}>
                        {props.category && props.category.map(
                            (item, index) => {
                            return (
                            <option value={item.id}>{item.name}</option>
                            );
                        })
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                    <input type="text" className="form-control" placeholder="" {...register('price')}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Image</label>
                    <input type="text" className="form-control" placeholder="" {...register('image')}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control" rows={3} defaultValue={""} {...register('description')}/>
                </div>
                <button className="content__box-product-btn" name="btnSend">Thêm sản phẩm</button>
            </form>
        )
    }
    return <div>{addProductFrom()}</div>
};

export default AddProduct;
