var urlProduct = "http://localhost:3000/products?id=";
var urlCate = "http://localhost:3000/categories";
var urlOrder = "http://localhost:3000/Order";
//
var urlParam = new URL(document.URL);
var Id = urlParam.searchParams.get('id');

//

//
fetch(urlCate)
    .then(res => res.json())
    .then(data => {
        var output = "";
        data.forEach(element => {
            output += `
            
            <li><a href="#">${element.name}</a></li>

        `;
        });
        document.querySelector("#danhmuc").innerHTML = output;
    })

//
fetch(`${urlProduct}${Id}`, {
    method: "GET"
})
    .then(res => res.json())
    .then(data => {
        console.log(data)
        var output = '';        
        data.forEach(product => {
            output +=`
                <tr>
                    <td>
                        <div class="cart-img">
                            <a href="#">
                                <img src="${product.image}" alt="">
                            </a>
                        </div>
                    </td>
                    <td><a href="#">${product.productName}</a>
                    </td>
                    <td>
                        <div class="cart-action">
                            <input type="number" value="1" class="form-control cart-quantity" name="quantity"/>
                        </div>
                    </td>
                    <td>${product.price}</td>
                </tr>
            `;
        });
        document.querySelector("#tbodyy").innerHTML = output;                      
    })

//-------------------------------add
var dateOrder = new Date;
var addCart = document.querySelector('.form-add');
addCart.addEventListener('submit', e => {
    e.preventDefault();
    alert('Mua thanh cong')
    fetch(urlOrder, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            productid: Id,
            quantity: addCart.quantity.value,
            dateOrder: dateOrder,
            phone: addCart.dienThoai.value,
            address: addCart.diaChi.value
        })
    })
        .then(res => res.json())
        .then(data => {
            var arrData = [];
            arrData.push(data);
            renderUsers(arrData);        
        })
});

