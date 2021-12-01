import React from 'react';


const Dashboard = (props) => {
    return (
        <div>
            Số lượng sản phẩm : {props.products.length}
            <br></br>
            Số lượng danh mục : {props.category.length}
        </div>
    )
}

export default Dashboard
