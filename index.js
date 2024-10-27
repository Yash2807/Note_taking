import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const db = new pg.Client({
  username: "postgres",
  host: "localhost",
  database: "permalist",
  password: "yashpostgres@28",
  port: "5432",
});
db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", (req, res) => {
  db.query(
    `INSERT INTO permalist (id,items) VALUES (${items.id},${items.title}`
  );
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", (req, res) => {
  const item = req.body.newItem;
  items.push({ title: item });
  res.redirect("/");
});

app.post("/edit", (req, res) => {});

app.post("/delete", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
