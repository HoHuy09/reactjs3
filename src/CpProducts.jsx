import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Cproducts = ({ products }) => {
  return (


    <div class="wrapper">
      <header class="l-header">

<div class="l-navbar l-navbar_t-light l-navbar_expand js-navbar-sticky">
    <div class="container-fluid">
        <nav class="menuzord js-primary-navigation" role="navigation" aria-label="Primary Navigation">

           
            <a href="index-2.html" class="logo-brand">
            <img class="retina" src="assets/img/logo.png" alt="Massive"/>
            </a>
            
            <ul class="menuzord-menu menuzord-right c-nav_s-standard">
                <li><a href="">Home</a>

                </li>
                <li class=""><a href="#">Sản phẩm</a>
                    <ul class="dropdown" id="menulistcat">
                        
                        
                    </ul>
                </li>
                <li class="cart-info">
                    <a href="javascript:void(0)"><i class="fa fa-shopping-cart"></i> cart</a>
                    <div class="megamenu megamenu-quarter-width ">
                        <div class="megamenu-row">
                            <div class="col12">

                                
                                <table class="table cart-table-list table-responsive">
                                    <tr>
                                        <td>
                                            <a href="#">
                                                <img src="assets/img/product/1.jpg" alt="" />
                                            </a>
                                        </td>
                                        <td><a href="#"> Women's Top</a>
                                        </td>
                                        <td>X4</td>
                                        <td>$ 122.00</td>
                                        <td>
                                            <a href="#" class="close">
                                                <img src="assets/img/product/close.png" alt="" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#">
                                                <img src="assets/img/product/2.jpg" alt="" />
                                            </a>
                                        </td>
                                        <td><a href="#"> Men's T-shirt</a>
                                        </td>
                                        <td>X4</td>
                                        <td>$ 122.00</td>
                                        <td>
                                            <a href="#" class="close">
                                                <img src="assets/img/product/close.png" alt="" />
                                            </a>
                                        </td>
                                    </tr>
                                </table>

                                <div class="total-cart pull-right">
                                    <ul>
                                        <li><span>Sub Total</span> <span>$ 2000.00 </span>
                                        </li>
                                        <li><span>Total </span> <span>$ 2000.00 </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="s-cart-btn pull-right">
                                    <a href="shop-cart.html" class="btn btn-small btn-theme-color"> View
                                        cart</a>
                                    <a href="#" class="btn btn-small btn-dark-solid"> Checkout</a>
                                </div>
                          

                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <a href="javascript:void(0)"><i class="fa fa-search"></i> Search</a>
                    <div class="megamenu megamenu-quarter-width navbar-search">
                        <form role="searchform">
                            <input type="text" id="search" class="form-control" placeholder="Search Here"/>
                        </form>
                    </div>
                </li>
            </ul>
        

        </nav>
    </div>
</div>

</header>
      <section class="body-content ">

        <div class="pull-left" style={{
          paddingLeft: '200px',
          paddingTop: '100px',

        }} >

        </div>

        <div class="page-content product-grid">
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <div class="row" id="list">
                  {products &&
                    products.map((item) => {
                      return (
                        <div class="col-md-4">
                    <div class="product-list">
                        <div class="product-img">
                            <a href="">
                                <img src={item.avatar} style={{with: "400px",height:"240px"}} />
                            </a>
                            
                            
                        </div>
                        <div class="product-title">
                            <h5> <Link to={`product/${item.id}`}>{item.name}</Link></h5>
                        </div>
                        <div class="product-price">
                        {item.price} vnđ
                        </div>
                        <div class="product-btn">
                            <a href="" class="btn btn-extra-small btn-dark-border  "><i class="fa fa-shopping-cart"></i> Add to
                                cart</a>
                        </div>
                    </div>
                    
                </div>
                      );
                    })}
                  <div class="text-center col-md-12">
                    <ul class="pagination custom-pagination">
                      <li><a href="#">Prev</a>
                      </li>
                      <li class="active"><a href="#">1</a>
                      </li>
                      <li><a href="#">2</a>
                      </li>
                      <li><a href="#">3</a>
                      </li>
                      <li><a href="#">4</a>
                      </li>
                      <li><a href="#">5</a>
                      </li>
                      <li><a href="#">Next</a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              <div class="col-md-3 ">

                <div class="widget">
                  <div class="heading-title-alt text-left heading-border-bottom">
                    <h6 class="text-uppercase">product category</h6>
                  </div>
                  <ul class="widget-category" id="listcat">


                  </ul>
                </div>

                <div class="widget">
                  <div class="heading-title-alt text-left heading-border-bottom">
                    <h6 class="text-uppercase">price filter</h6>
                  </div>
                  <form method="post" action="#">

                    <div class="row">
                      <div class="col-xs-12 form-group">
                        <input type="text" name="price-from" id="price-from" class=" form-control"
                          placeholder="From, $" maxlength="100" />
                      </div>

                      <div class="col-xs-12 form-group">
                        <input type="text" name="price-to" id="price-to" class=" form-control"
                          placeholder="To, $" maxlength="100" />
                      </div>
                      <div class=" col-xs-12 form-group">
                        <button
                          class="btn btn-small btn-dark-border  btn-transparent">Filter</button>
                      </div>
                    </div>
                  </form>
                </div>

                <div class="widget">
                  <div class="heading-title-alt text-left heading-border-bottom">
                    <h6 class="text-uppercase">latest Products</h6>
                  </div>
                  <ul class="widget-latest-post">
                    <li>
                      <div class="thumb">
                        <a href="#">
                          <img src="assets/img/product/1.jpg" alt="" />
                        </a>
                      </div>
                      <div class="w-desk">
                        <a href="#">Praesent pellentesque</a>
                        <div class="price">$25.99</div>
                        <div class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half-o"></i>
                          <i class="fa fa-star-o"></i>
                        </div>
                        <div class="product-cart">
                          <a href="#"><i class="fa fa-shopping-cart"></i> Add to Cart</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="thumb">
                        <a href="#">
                          <img src="assets/img/product/2.jpg" alt="" />
                        </a>
                      </div>
                      <div class="w-desk">
                        <a href="#">Shirt With Mesh Sleeves</a>
                        <div class="price">$35.99</div>
                        <div class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half-o"></i>
                        </div>
                        <div class="product-cart">
                          <a href="#"><i class="fa fa-shopping-cart"></i> Add to Cart</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="thumb">
                        <a href="#">
                          <img src="assets/img/product/3.jpg" alt="" />
                        </a>
                      </div>
                      <div class="w-desk">
                        <a href="#">Checked Short Dress</a>
                        <div class="price">$45.99</div>
                        <div class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half-o"></i>
                          <i class="fa fa-star-o"></i>
                        </div>
                        <div class="product-cart">
                          <a href="#"><i class="fa fa-shopping-cart"></i> Add to Cart</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="widget">
                  <div class="heading-title-alt text-left heading-border-bottom">
                    <h6 class="text-uppercase">Top Rated Products</h6>
                  </div>
                  <ul class="widget-latest-post">
                    <li>
                      <div class="thumb">
                        <a href="#">
                          <img src="assets/img/product/4.jpg" alt="" />
                        </a>
                      </div>
                      <div class="w-desk">
                        <a href="#">Praesent pellentesque</a>
                        <div class="price">$25.99</div>
                        <div class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half-o"></i>
                        </div>
                        <div class="product-cart">
                          <a href="#"><i class="fa fa-shopping-cart"></i> Add to Cart</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="thumb">
                        <a href="#">
                          <img src="assets/img/product/5.jpg" alt="" />
                        </a>
                      </div>
                      <div class="w-desk">
                        <a href="#">Shirt With Mesh Sleeves</a>
                        <div class="price">$35.99</div>
                        <div class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half-o"></i>
                        </div>
                        <div class="product-cart">
                          <a href="#"><i class="fa fa-shopping-cart"></i> Add to Cart</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="widget">
                  <div class="heading-title-alt text-left heading-border-bottom">
                    <h6 class="text-uppercase">PRODUCT TAGS</h6>
                  </div>
                  <div class="widget-tags">
                    <a href="#">Accessories</a>
                    <a href="#">Branding</a>
                    <a href="#">Belts</a>
                    <a href="#">Cloth</a>
                    <a href="#">Kids</a>
                    <a href="#">Watch</a>
                    <a href="#">Shoes</a>
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>


      </section>

      <footer id="footer" class="dark">
        <div class="primary-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <a href="#" class="m-bot-20 footer-logo">
                  <img class="retina" src="assets/img/logo-dark.png" alt="" />
                </a>
                <p>Massive is fully responsible, performance oriented and SEO optimized, retina ready
                  WordPress theme.</p>

              </div>
              <div class="col-md-3">
                <h5 class="text-uppercase">recent posts</h5>
                <ul class="f-list">
                  <li><a href="#">Standard Blog post</a>
                  </li>
                  <li><a href="#">Quotation post</a>
                  </li>
                  <li><a href="#">Audio Post</a>
                  </li>
                  <li><a href="#">Massive Video Demo</a>
                  </li>
                  <li><a href="#">Blog Image Post</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-3">
                <h5 class="text-uppercase">quick link</h5>
                <ul class="f-list">
                  <li><a href="#">About Massive</a>
                  </li>
                  <li><a href="#">Career</a>
                  </li>
                  <li><a href="#">Terms & Condition</a>
                  </li>
                  <li><a href="#">Privacy Policy</a>
                  </li>
                  <li><a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-3">
                <h5 class="text-uppercase">Recent Work</h5>
                <ul class="r-work">
                  <li>
                    <a href="#">
                      <img src="assets/img/recent-work/1.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/recent-work/2.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/recent-work/3.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/recent-work/4.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/recent-work/5.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/recent-work/6.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/recent-work/7.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/recent-work/8.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/recent-work/9.jpg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="secondary-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <span class="m-top-10">Copyright 2012 - 2015 Massive Theme by <a
                  href="http://themebucket.net/" class="f-link" target="_blank">ThemeBucket</a> | All
                  Rights Reserved</span>
              </div>
              <div class="col-md-6">
                <div class="social-link circle pull-right">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                  <a href="#"><i class="fa fa-behance"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>



    </div>
  );
};
export default Cproducts;
