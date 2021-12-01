import { Link, Outlet } from "react-router-dom";
import Header from "../page/client/layout/Header";
import Footer from "../page/client/layout/Footer";

export default function LayoutWebsite() {
  return (
    <div>
      <div class="wrapper">
        <Header />
        <section class="body-content ">
          <div class="pull-left" style={{
            paddingLeft: '200px',
            paddingTop: '100px',
          }} >
          </div>
          <div class="page-content product-grid">
            <div class="container">
              <Outlet />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
