
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import { readCate } from "../../../api/categoryAPI";


const EditCategory = (props) => {
    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset} = useForm();

    const {id} = useParams();
    const [category, setCategory] = useState({});

    useEffect(() => {
        readCate(id).then((response) => {
            setCategory(response.data);
            reset(response.data);
        })
    }, [id]);
    const onSubmit = (data) => {
        props.onUpdate({id, ...data});
        navigate("/admin/category", { replace: true });
    }
    return (
        <div>
             <form className="content__box-product-add" method="POST" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="content__box-product-add-name">Sửa Danh muc</h3>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="" {...register('name')} />
                </div>
                <button className="content__box-product-btn" name="btnSend">Sửa Danh muc</button>
            </form>
        </div>
    )
}

export default EditCategory
