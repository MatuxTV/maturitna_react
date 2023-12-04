export  async function getProducts() {
  const products = await fetch("http://0.0.0.0:8055/items/produkty", { cache: "no-cache"})
  console.log(products);
  return products.json();
}