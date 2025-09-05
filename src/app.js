// import { nanoid } from "nanoid";
import book from "./book.json";
import template from "./tamplate.hbs";

const list = document.querySelector(".list-js");
list.innerHTML = template({ book });

// const users = [
//   { name: "Олександр", email: "oleksandr@example.com" },
//   { name: "Марія", email: "maria@example.com" },
//   { name: "Іван", email: "ivan@example.com" },
//   { name: "Анастасія", email: "anastasia@example.com" },
//   { name: "Андрій", email: "andrii@example.com" },
//   { name: "Олена", email: "olena@example.com" },
//   { name: "Дмитро", email: "dmytro@example.com" },
//   { name: "Катерина", email: "kateryna@example.com" },
//   { name: "Сергій", email: "serhii@example.com" },
//   { name: "Юлія", email: "yulia@example.com" },
// ];

// users.forEach(item => {
//     item.id = nanoid();

// })
// console.log(users);
