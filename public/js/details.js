var url = 'http://localhost:3000/products?id=';
var url2 = 'http://localhost:3000/categories';

var urlParam = new URL(document.URL);
var editId = urlParam.searchParams.get('id');
console.log(editId);
fetch(`${url}${editId}`)
    .then(res => res.json())
    .then(data => {
        var output = '';
        data.forEach(product => {
            output += `<li data-thumb="assets/img/product/8.jpg">
            <a href="javascript:;" title="Freshness Photo">
                <img  src="${product.image}" alt="" style="with=300px;height=300px"/>
            </a>
        </li>
        `;
        });
        document.querySelector('#imageaaa').innerHTML = output;
    })
    fetch(`${url}${editId}`)
    .then(res => res.json())
    .then(data => {
        var output = '';
        data.forEach(product => {
            output += `<div class="product-title">
            <h2 class="text-uppercase">${product.productName}</h2>
        </div>

        <div class="product-price txt-xl">
            <span class="border-tb p-tb-10"> ${product.price}</span>
        </div>

        
        <p>
            ${product.productDesc}
        </p>
        <div class="clearfix">
            <a href="shopcart.html?id=${product.id}" class="btn btn-medium btn-dark-solid  "><i class="fa fa-shopping-cart"></i> Add to cart</a>
        </div>
        `;
        });
        document.querySelector('#avc').innerHTML = output;   
    })
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
        document.querySelector('#abc').innerHTML=output;
    })
           