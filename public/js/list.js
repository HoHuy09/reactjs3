
var url='http://localhost:3000/products?_expand=category';
var url2='http://localhost:3000/categories';
var tableProducts= document.querySelector('#tableProducts');
fetch(url,{
    method: 'GET'
})
.then(res => res.json())
.then(data =>{
    var output='';
    data.forEach(product => {
        output += `<div class="col-md-4">
        <!--product list-->
        <div class="product-list">
            <div class="product-img">
                <a href="chitietsanpham.html?id=${product.id}">
                    <img src="${product.image}" alt="" style="with:600px;height:300px"/>
                </a>
                
                <div class="sale-label">
                    Sale
                </div>
            </div>
            <div class="product-title">
                <h5><a href="chitietsanpham.html?id=${product.id}">${product.productName}</a></h5>
            </div>
            <div class="product-price">
                ${product.price} vnđ
            </div>
            <div class="product-btn">
                <a href="#" class="btn btn-extra-small btn-dark-border  "><i class="fa fa-shopping-cart"></i> Add to
                    cart</a>
            </div>
        </div>
        <!--product list-->
    </div>
        `;
    });
    document.querySelector('#list').innerHTML=output;
})
//------------ Danh mục sản phẩm
fetch(url2,{
    method: 'GET'
})
.then(res => res.json())
.then(data =>{
    var output='';
    data.forEach(cat => {
        output += `
        <li><a href="#">${cat.CatName}</a>
        </li>
        `;
    });
    document.querySelector('#listcat').innerHTML=output;
    document.querySelector('#menulistcat').innerHTML=output;
})
fetch(url2)
        .then(res =>res.json())
        .then(data=>{
            console.log(data)
            var output = '';
            data.forEach(item => {
                output += `<option value=${item.id}>${item.CatName}</option>`;
            });
            document.querySelector('#cateFilter').innerHTML=output;
        });
        //xử lý sự kiện
            document.querySelector('#cateFilter').addEventListener('change',function(){
            var id = document.querySelector('#cateFilter').value;
            fetch(`http://localhost:3000/products?categoryId=${id}&_expand=category`)
            .then(res => res.json())
            .then(data =>{
                var output='';
                data.forEach(product => {
                    output += `<div class="col-md-4">
                    <!--product list-->
                    <div class="product-list">
                        <div class="product-img">
                            <a href="chitietsanpham.html?id=${product.id}">
                                <img src="${product.image}" alt="" style="with:600px;height:300px"/>
                            </a>
                            
                            <div class="sale-label">
                                Sale
                            </div>
                        </div>
                        <div class="product-title">
                            <h5><a href="chitietsanpham.html?id=${product.id}">${product.productName}</a></h5>
                        </div>
                        <div class="product-price">
                            ${product.price} vnđ
                        </div>
                        <div class="product-btn">
                            <a href="shopcart.html" class="btn btn-extra-small btn-dark-border  "><i class="fa fa-shopping-cart"></i> Add to
                                cart</a>
                        </div>
                    </div>
                    <!--product list-->
                </div>
                    `;
                });
                document.querySelector('#list').innerHTML=output;
            })
        })
        document.querySelector('#search').addEventListener('keyup',function(){
            var keyword = document.querySelector('#search').value;
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                var output='';
                data.forEach(product => {
                    if(product.productName.search(keyword)>(-1)||product.price.search(keyword)>(-1)){
                    output += `<div class="col-md-4">
                    <!--product list-->
                    <div class="product-list">
                        <div class="product-img">
                            <a href="chitietsanpham.html?id=${product.id}">
                                <img src="${product.image}" alt="" style="with:600px;height:300px"/>
                            </a>
                            
                            <div class="sale-label">
                                Sale
                            </div>
                        </div>
                        <div class="product-title">
                            <h5><a href="chitietsanpham.html?id=${product.id}">${product.productName}</a></h5>
                        </div>
                        <div class="product-price">
                            ${product.price} vnđ
                        </div>
                        <div class="product-btn">
                            <a href="shopcart.html" class="btn btn-extra-small btn-dark-border  "><i class="fa fa-shopping-cart"></i> Add to
                                cart</a>
                        </div>
                    </div>
                    <!--product list-->
                </div>
                    `;
                }});
                document.querySelector('#list').innerHTML=output;
            })
        })
       