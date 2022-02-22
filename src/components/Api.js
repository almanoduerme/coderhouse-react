const products = [
  {
    id: 0,
    name: "Product 1",
    img: "https://images.pexels.com/photos/7045174/pexels-photo-7045174.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 1",
    price: 1.99,
    category: "remeras",
    stock: 6
  },
  {
    id: 1,
    name: "Product 2",
    img: "https://images.pexels.com/photos/6744427/pexels-photo-6744427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 2",
    price: 2.99,
    category: "zapatos",
    stock: 6
  },
  {
    id: 2,
    name: "Product 3",
    img: "https://images.pexels.com/photos/3674322/pexels-photo-3674322.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 3",
    price: 3.99,
    category: "remeras",
    stock: 6
  },
  {
    id: 3,
    name: "Product 4",
    img: "https://images.pexels.com/photos/9902629/pexels-photo-9902629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 4",
    price: 4.99,
    category: "remeras",
    stock: 6
  },
  {
    id: 4,
    name: "Product 5",
    img: "https://images.pexels.com/photos/1461048/pexels-photo-1461048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 5",
    price: 5.99,
    category: "zapatos",
    stock: 6
  },
  {
    id: 5,
    name: "Product 6",
    img: "https://images.pexels.com/photos/4452517/pexels-photo-4452517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 6",
    price: 6.99,
    category: "zapatos",
    stock: 6
  },
  {
    id: 6,
    name: "Product 7",
    img: "https://images.pexels.com/photos/3728826/pexels-photo-3728826.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 7",
    price: 7.99,
    category: "remeras",
    stock: 6
  },
  {
    id: 7,
    name: "Product 8",
    img: "https://images.pexels.com/photos/1461048/pexels-photo-1461048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 8",
    price: 8.99,
    category: "zapatos",
    stock: 6
  },
  {
    id: 8,
    name: "Product 9",
    img: "https://images.pexels.com/photos/1461048/pexels-photo-1461048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 9",
    price: 9.99,
    category: "zapatos",
    stock: 6
  },
  {
    id: 9,
    name: "Product 10",
    img: "https://images.pexels.com/photos/1461048/pexels-photo-1461048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 10",
    price: 10.99,
    category: "zapatos",
    stock: 6
  },
  {
    id: 10,
    name: "Product 11",
    img: "https://images.pexels.com/photos/1461048/pexels-photo-1461048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 11",
    price: 11.99,
    category: "zapatos",
    stock: 6
  },
  {
    id: 11,
    name: "Product 12",
    img: "https://images.pexels.com/photos/1461048/pexels-photo-1461048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 12",
    price: 12.99,
    category: "zapatos",
    stock: 6
  },
  {
    id: 12,
    name: "Product 13",
    img: "https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "Description 13",
    price: 13.99,
    category: "vestidos",
    stock: 6
  },
  {
    id: 13,
    name: "Product 14",
    img: "https://images.pexels.com/photos/11039284/pexels-photo-11039284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=1260",
    description: "Description 14",
    price: 14.99,
    category: "vestidos",
    stock: 6
  },
  {
    id: 14,
    name: "Product 15",
    img: "https://images.pexels.com/photos/6254565/pexels-photo-6254565.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 15",
    price: 15.99,
    category: "remeras",
    stock: 6
  },
  {
    id: 15,
    name: "Product 16",
    img: "https://images.pexels.com/photos/7622455/pexels-photo-7622455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 16",
    price: 16.99,
    category: "vestidos",
    stock: 6
  },
];

// filter

const categorias = [
  {
    id: "",
    description: "Todos",
  },
  {
    id: "remeras",
    description: "Remeras",
  },
  {
    id: "vestidos",
    description: "Vestidos",
  },
  {
    id: "zapatos",
    description: "Zapatos",
  },
];

// Return categories list
export const getCategorias = () => {
  return categorias;
};


// Return products list
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

// Return product by category
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    const productsToResolve = products.filter(
      (item) => item.category === categoryId
    );
    resolve(productsToResolve);
  });
};
