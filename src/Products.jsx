
const Products = ({ products, onRemove, edit1 }) => {
  
  return (

    <table class="table table-light table-striped">
      
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Avatar</th>
          <th scope="col">Price</th>
          <th scope="col">Function</th>
        </tr>
        
      </thead>
      <tbody>
        
        {products &&
          products.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <h4 > 
                    {item.id}

                  </h4>
                </td>
                <td>
                  <h4>
                    {item.name}

                  </h4>
                </td>
                <td>
                  <h4>
                    <img src={item.avatar} style={{width: '20%'}}  />

                  </h4>
                </td>
                <td>
                  <h4>
                    {item.price}

                  </h4>
                </td>
                
                <td>
                  <h4>
                    <button onClick={()=> edit1(item.id)} >Edit</button>
                    <button onClick={() => onRemove(item.id)}>Remove</button>
                  </h4>
                </td>
              </tr>
            );
          })}
      </tbody>
      
    </table>


  );
};
export default Products;
