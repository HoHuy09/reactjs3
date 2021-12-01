import instance from "./instance";

export const createCate = (name) => {
  const url = "/categories";
  return instance.post(url, name);
};
export const listCate = () => {
  const url = "/categories";
  return instance.get(url);
};
export const readCate = (id) => {
  const url = "/categories/" + id;
  return instance.get(url);
};
export const removeCate = (id) => {
  const url = "/categories/" + id;
  return instance.delete(url);
};
export const updateCate = (name) => {
    const url = "/categories/" + name.id;
    return instance.patch(url, name);
  };

  // GET /product => Hien thi danh sach
  // GET /product/:id => Chi tiet san pham
  // POST /product => Them san pham
  // DELETE /product/:id => Xoa san pham
  // PATCH /product/:id => cap nhat san pham
