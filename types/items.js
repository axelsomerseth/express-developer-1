function Item(
  name = "",
  description = "",
  category = 0,
  price = 0,
  stock = 0,
  url = ""
) {
  return {
    name,
    description,
    category,
    price,
    stock,
    url,
  };
}

module.exports = Item;
