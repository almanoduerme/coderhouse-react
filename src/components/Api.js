const products = [
  {
    id: 1,
    name: "Product 1",
    img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 1",
    price: 1.99,
    destacado: "no",
    categoria: 'zapatos'
  },
  {
    id: 2,
    name: "Product 2",
    img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 2",
    price: 2.99,
    destacado: "no",
    categoria: 'zapatos'
  },
  {
    id: 3,
    name: "Product 3",
    img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 3",
    price: 3.99,
    destacado: "no",
    categoria: 'zapatos'
  },
  {
    id: 4,
    name: "Product 4",
    img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 4",
    price: 4.99,
    destacado: "si",
    categoria: 'remeras'
  },
  {
    id: 5,
    name: "Product 5",
    img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 5",
    price: 5.99,
    destacado: "si",
    categoria: 'zapatos'
  },
  {
    id: 6,
    name: "Product 6",
    img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 6",
    price: 6.99,
    destacado: "no",
    categoria: 'zapatos'
  },
  {
    id: 7,
    name: "Product 7",
    img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 7",
    price: 7.99,
    destacado: "si",
    categoria: 'zapatos'
  },
  {
    id: 8,
    name: "Product 8",
    img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 8",
    price: 8.99,
    destacado: "no",
    categoria: 'zapatos'
  },
  {
    id: 9,
    name: "Product 9",
    img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 9",
    price: 9.99,
    destacado: "si",
    categoria: 'zapatos'
  },
  {
    id: 10,
    name: "Product 10",
    img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 10",
    price: 10.99,
    destacado: "si",
    categoria: 'zapatos'
  },
  {
    id: 11,
    name: "Product 11",
    img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 11",
    price: 11.99,
    destacado: "no",
    categoria: 'zapatos'
  },
  {
    id: 12,
    name: "Product 12",
    img: "https://images.pexels.com/photos/667228/pexels-photo-667228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Description 12",
    price: 12.99,
    destacado: "si",
    categoria: 'zapatos'
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProduct = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products[0]);
    }, 2000);
  });
};
