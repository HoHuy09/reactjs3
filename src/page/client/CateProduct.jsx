import React from 'react'

const CateProduct = () => {
    return (
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
                          <img src={item.avatar} style={{ with: "400px", height: "240px" }} />
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
    )
}

export default CateProduct
