import { Space, Table } from 'antd';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listCate } from '../../../api/categoryAPI';



const Categories = ({category,onDelete}) => {
  // const [category, setCategory] = useState([]);
  
  // useEffect(() => {
  //   listCate().then((response) => setCategory(response.data));
  // }, []);
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Link to={`/admin/category/edit/${record.id}`}>Update</Link>
        <button onClick={() => onDelete(record.id)}>Remove</button>
      </Space>
    ),
  },
  ];
  const data = [...category];

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <div>
      <Link to={`add`}>Add</Link>
    <Table columns={columns} dataSource={data} onChange={onChange} />

    </div>
  )
}

export default Categories;
