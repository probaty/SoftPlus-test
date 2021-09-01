const goods = [
  { id: 1, type: "mango", price: 53 },
  { id: 2, type: "mango", price: 77 },
  { id: 3, type: "potato", price: 48 },
  { id: 4, type: "potato", price: 52 },
  { id: 5, type: "mango", price: 33 },
  { id: 6, type: "apple", price: 50 },
  { id: 7, type: "mango", price: 89 },
  { id: 8, type: "apple", price: 60 },
  { id: 9, type: "mango", price: 51 },
  { id: 10, type: "apple", price: 80 },
];

// 2 способ
const filteredGoods = goods
  .filter((el) => el.type !== "mango")
  .map((el) => (el.type === "apple" ? { ...el, price: el.price * 3 } : el));

// 1 способ
for (let i = 0; i < goods.length; i++) {
  if (goods[i].type === "apple") {
    goods[i].price *= 3;
    continue;
  }
  if (goods[i].type === "mango") {
    goods.splice(i, 1);
    i -= 1;
  }
}

console.log("1 способ: ", goods);
console.log("2 способ: ", filteredGoods);
