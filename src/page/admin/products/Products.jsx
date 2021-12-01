import { Table, Space  } from 'antd';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { list } from '../../../api/productAPI';



const Products = ({product, onRemove}) => {
  // const [products, setProducts] = useState([]);
  // console.log(product)
  // useEffect(() => {
  //   list().then((response) => setProducts(response.data));
  // }, []);

  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Category',
    dataIndex: 'cate_id',
    sorter: {
      compare: (a, b) => a.cate_id - b.cate_id,
      multiple: 3,
    },
  },
  {
    title: 'Price',
    dataIndex: 'price',
    sorter: {
      compare: (a, b) => a.price - b.price,
      multiple: 2,
    },
  },
  {
    title: 'Image',
    dataIndex: 'image',
    sorter: {
      compare: (a, b) => a.image - b.image,
      multiple: 1,
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Link to={`/admin/product/edit/${record.id}`}>Update</Link>
        <button onClick={() => onRemove(record.id)}>Remove</button>
        
      </Space>
    ),
  },
  ];
  
  const data = [...product];


  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <div>
    <Link to={`add`}>Add</Link>
    <Table columns={columns} dataSource={data}  onChange={onChange} />

    </div>
  )
}

export default Products;
