
import './App.css';
import { useState, useEffect } from "react";
import Products from './page/admin/products/Products';
import LayoutAdmin from "./layout/LayoutAdmin";
import LayoutWebsite from "./layout/LayoutWebsite";
import { list, remove, create, read, update } from './api/productAPI';
import { BrowserRouter, Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import PrivateAdmin from './copoments/PrivateAdmin';
import Home from './page/client/Home';
import AddProduct from './page/admin/products/AddProduct';
import Categories from './page/admin/category/Categories';
import AddCategory from './page/admin/category/AddCategory';
import { createCate, listCate, removeCate, updateCate } from './api/categoryAPI';
import { toast } from 'react-toastify';
import Signin from './page/client/Signin';
import Signup from './page/client/Signup';
import ProductDetail from './page/client/ProductDetail';
import EditProduct from './page/admin/products/EditProduct';
import EditCategory from './page/admin/category/EditCategory';
import Dashboard from './page/admin/Dashboard';





function App() {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    list().then((response) => setProducts(response.data));
    listCate().then((response) => setCategory(response.data));
  }, []);

  //////////////Add//////
  const Addproduct = (product) => {
    const fakeProduct = {...product };
    create(fakeProduct).then((response) =>
      setProducts([...products, (response.data)])
    );
  }
// //-------------------ffff
//   const onHandelUpdate = (product) => {
//     updateProduct(product).then(() => {
//       const newPro = products.map((item) =>
//         item.id === product.id ? product : item
//       );
//       setProducts(newPro);
//     });
//   }
//   // --------Remove-------------------
  const onHandelRemove = (id) => {
    remove(id).then(() => {
      const newProduct = products.filter((item) => item.id !== id);
      setProducts(newProduct);
    });
  };
  const onHandelUpdate = (product) => {
    update(product).then(() => {
      const newPro = products.map((item) =>
        item.id === product.id ? product : item
      );
      setProducts(newPro);
    });
  }

  ///---------------------------------------------------------------------------------------------------------

  const AddHandelCategory = (categori) => {
    const fakeCategory = {...categori };
    createCate(fakeCategory).then((response) =>
    setCategory([...category, (response.data)])
    );
  }


const onCateRemove = (id) => {
  removeCate(id).then(() => {
    const newCategory= category.filter((item) => item.id !== id);
    setCategory(newCategory);
  });
};



const onCatelUpdate = (cate) => {
  updateCate(cate).then(() => {
      const newPro = category.map((item) =>
        item.id === cate.id ? cate : item
      );
      setCategory(newPro);
  });
};



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutWebsite />}>
            <Route index element={<Home products={products} />} />
            <Route path="product" element={<div>sản phẩm</div>} />
            <Route path="product:id" element={<div>Chi tiết sản phẩm</div>} />
            <Route path="product/:id" element={<ProductDetail />}/>
            <Route path="signin" element={<Signin />}/>
            <Route path="signup" element={<Signup />}/>
            <Route path="category" element={<div>Danh muc san pham</div>} />
          </Route>
          <Route path="admin/" element={
            <PrivateAdmin abc="123">
              <LayoutAdmin />
            </PrivateAdmin>
          }>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard products={products} category={category}/>} />
            <Route path="product" element={<Products product={products} onRemove={onHandelRemove}/>} />
            <Route path="product/add" element={<AddProduct category={category} onAdd={Addproduct}/>} />
            <Route path="product/edit/:id" element={<EditProduct category={category} onUpdate={onHandelUpdate}/>} />

            <Route path="category" element={<Categories category={category} onDelete={onCateRemove} />} />
            <Route path="category/add" element={<AddCategory onAdd={AddHandelCategory}/>} />
            <Route path="category/edit/:id" element={<EditCategory onUpdate={onCatelUpdate} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}




export default App;
