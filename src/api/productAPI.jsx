import instance from "./instance";

export const create = (name) => {
  const url = "/products";
  return instance.post(url, name);
};
export const list = () => {
  const url = "/products";
  return instance.get(url);
};
export const read = (id) => {
  const url = "/products/" + id;
  return instance.get(url);
};
export const remove = (id) => {
  const url = "/products/" + id;
  return instance.delete(url);
};
export const update = (id,name) => {
    const url = "/products/" + id;
    return instance.put(url, name);
  };

  // GET /product => Hien thi danh sach
  // GET /product/:id => Chi tiet san pham
  // POST /product => Them san pham
  // DELETE /product/:id => Xoa san pham
  // PATCH /product/:id => cap nhat san pham
