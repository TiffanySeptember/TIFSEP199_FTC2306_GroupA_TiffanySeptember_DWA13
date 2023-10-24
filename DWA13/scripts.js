const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// exercise 1: use forEach to console log each name.
names.forEach((name) => console.log(name));

// exercise 2: use forEach to console log each name with a matching province.
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// exercise 3: using map, convert province names to uppercase.
const provincesUpperCase = provinces.map((province) => province.toUpperCase());
console.log(provincesUpperCase);

// exercise 4: create an array with the amount of characters in each name.
const characterCountArray = names.map((name) => name.length);
console.log(characterCountArray);

// exercise 5: sort provinces alphabetically.
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// exercise 6: use filter to remove provinces with the word "Cape."
const filteredProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(filteredProvinces.length);

// exercise 7: create a boolean array to check for 'S' character in names.
const containsSArray = names.map((name) =>
  name.split("").some((char) => char.toUpperCase() === "S")
);
console.log(containsSArray);

// exercise 8: use reduce to create an object indicating the province of each individual.
const provinceObject = names.reduce((result, name, index) => {
  result[name] = provinces[index];
  return result;
}, {});
console.log(provinceObject);

const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// exercise 1: use forEach to console log each product name.
products.forEach((product) => console.log(product.product));

// exercise 2: filter products with names longer than 5 characters.
const filteredProducts = products.filter(
  (product) => product.product.length <= 5
);

// exercise 3: convert prices to numbers, remove products without prices, and calculate the combined price.
const totalPrice = products
  .map((product) => parseInt(product.price))
  .filter((price) => isNaN(price) === false)
  .reduce((sum, price) => sum + price, 0);
console.log(totalPrice);

// exercise 4: concatenate all product names.
const concatenatedNames = products.reduce((result, product, index, array) => {
  result += product.product;
  if (index < array.length - 1) result += ", ";
  return result;
}, "");
console.log(concatenatedNames);

// exercise 5: calculate highest and lowest-priced items.
const priceEntries = products.map((product) => ({
  name: product.product,
  price: parseFloat(product.price),
}));

const maxPrice = priceEntries.reduce(
  (max, product) => (product.price > max.price ? product : max),
  priceEntries[0]
);
const minPrice = priceEntries.reduce(
  (min, product) => (product.price < min.price ? product : min),
  priceEntries[0]
);
console.log(`Highest: ${maxPrice.name}. Lowest: ${minPrice.name}`);

// exercise 6: recreate the object with modified keys using Object.entries and reduce.
const recreatedObject = Object.entries(products).reduce(
  (result, [key, value]) => {
    result[key] = { name: value.product, cost: value.price };
    return result;
  },
  {}
);
console.log(recreatedObject);
