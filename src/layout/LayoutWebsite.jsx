import { Link, Outlet } from "react-router-dom";

export default function LayoutWebsite() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{display: "flex",
    flexDirection: "column"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Shop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="product">Sản phẩm</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="product/123">chi tiết sản phẩm</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="admin">Trang admin</Link>
        </li>
      </ul>
      
        
      
    </div>
  </div>
  <Outlet />
</nav>
  );
}
