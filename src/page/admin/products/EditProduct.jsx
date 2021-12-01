import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import { read } from "../../../api/productAPI";


const EditProduct = (props) => {
    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset} = useForm();

    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        read(id).then((response) => {
            setProduct(response.data);
            reset(response.data);
        })
    }, [id]);
    const onSubmit = (data) => {
        props.onUpdate({id, ...data});
        navigate("/admin/product", { replace: true });
    }
    return (
        <div>
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
                <button className="content__box-product-btn" name="btnSend">Sữa sản phẩm</button>
            </form>
        </div>
    )
}

export default EditProduct
