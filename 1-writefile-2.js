const fs = require("fs");
const people = [
  {
    id: 1,
    name: "MT",
  },
  {
    id: 2,
    name: "沈剑心",
  },
  {
    id: 3,
    name: "哪吒",
  },
];
fs.writeFileSync("./people.json", JSON.stringify(people));
