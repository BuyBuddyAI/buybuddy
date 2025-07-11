// Simulating an affiliate product fetch
export const getProducts = async () => {
  return [
    {
      id: 1,
      title: "Wireless Headphones",
      price: "₹2,999",
      image: "https://via.placeholder.com/200x150?text=Headphones",
      url: "https://www.amazon.in/example-product-1",
    },
    {
      id: 2,
      title: "Smart Watch",
      price: "₹4,499",
      image: "https://via.placeholder.com/200x150?text=Smart+Watch",
      url: "https://www.flipkart.com/example-product-2",
    },
    {
      id: 3,
      title: "Bluetooth Speaker",
      price: "₹1,799",
      image: "https://via.placeholder.com/200x150?text=Speaker",
      url: "https://www.amazon.in/example-product-3",
    },
    {
      id: 4,
      title: "Laptop Stand",
      price: "₹899",
      image: "https://via.placeholder.com/200x150?text=Stand",
      url: "https://www.flipkart.com/example-product-4",
    },
  ];
};
