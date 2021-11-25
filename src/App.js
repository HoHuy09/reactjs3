
import './App.css';
import { useState, useEffect } from "react";
import Products from './Products';
import LayoutAdmin from "./layout/LayoutAdmin";
import LayoutWebsite from "./layout/LayoutWebsite";
import { list, remove, create, read, update } from './api/productAPI';
import { BrowserRouter, Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import Cproducts from './CpProducts';
import ProductDetail from "./ProductDetail";
import Signin from "./Signin";
import Signup from './Signup';
import PrivateAdmin from './copoments/PrivateAdmin';





function App() {

  const [products, setProduct] = useState([]);


  useEffect(() => {
    list().then((response) => setProduct(response.data));
  }, []);

  const onHandleRemove = (id) => {
    remove(id).then(() => {
      // xoa phan tu dua vao state ( render lại màn hình)
      const newProducts = products.filter((item) => item.id !== id);
      setProduct(newProducts);
    });
  };
  // formedit chưa chạy
  const formedit = (id) => {
    document.querySelector('.formedit').classList.toggle("active");
    read(id).then(response=>{
      document.querySelector('#namedit').value=response.data.name
      document.querySelector('#avataredit').value=response.data.avatar
      document.querySelector('#pricedit').value=response.data.price
      document.querySelector('#btn-edit').value=response.data.id
    })
    document.querySelector('.formedit').addEventListener('submit', function (e) {
      e.preventDefault();
      let id = document.querySelector('#btn-edit').value
      const product = {
        name: document.querySelector('#namedit').value,
        avatar: document.querySelector('#avataredit').value,
        price: document.querySelector('#pricedit').value
      }
      update(id,product)
        .then(() => alert('Sửa thành công!'))
        .then(() => {
          list().then(response => setProduct(response.data))
        })
        .then(() => document.querySelector('.formedit').classList.remove('active'))
    })
  }
  

  useEffect(() => {
    document.querySelector('.formadd').addEventListener('submit', function (e) {
      e.preventDefault();
      const product = {
        name: document.querySelector('#Name').value,
        avatar: document.querySelector('#avatar').value,
        price: document.querySelector('#price').value
      }
      create(product)
        .then(() => alert('Thêm thành công!'))
        .then(() => {
          list().then(response => setProduct(response.data))
        })
        .then(() => document.querySelector('.formadd').classList.remove('active'))
    })
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutWebsite />}>
            <Route index element={<Cproducts products={products} />} />
            <Route
              path="product:id"
              element={
                <div>Chi tiết sản phẩm</div>
              }
            />
            <Route path="product/:id" element={<ProductDetail/>} />
            <Route path="signin" element={<Signin/>} />
            <Route path="signup" element={<Signup />} />
            <Route path="category" element={<div>Danh muc san pham</div>} />
          </Route>
          <Route path="admin/*" element={
              <PrivateAdmin abc="123">
                <LayoutAdmin />
              </PrivateAdmin>
            }>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="product" element={
                <Products products={products} onRemove={onHandleRemove} edit1={formedit}/>
            }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <form className='formadd' style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'gainsboro',
        display: 'none'
      }}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="text" class="form-control" id="Name" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">Điền tên</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">avatar</label>
          <input type="text" class="form-control" id="avatar" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">price</label>
          <input type="text" class="form-control" id="price" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
                <form className='formedit' style={{
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    background: 'gainsboro',
                    display: 'none'
                  }} >
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Name</label>
                      <input type="text" class="form-control" id="namedit" aria-describedby="emailHelp" />
                      <div id="emailHelp" class="form-text">Điền tên</div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">avatar</label>
                      <input type="text" class="form-control" id="avataredit" />
                    </div>
                    <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">price</label>
                    <input type="text" class="form-control" id="pricedit" />
                  </div>
                    <button type="submit" class="btn btn-primary " id='btn-edit'>Submit</button>
                  </form>
    </div>
      
  );
}

// - Trang chủ
// - Trang sản phẩm
// - Trang chi tiết sản phẩm
// - Trang danh mục sản phẩm




export default App;
