const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const port = 3000;

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "atsiliepimai1",
});

con.connect((err) => {
  if (err) throw err;
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/atsiliepimai/sort/new", (req, res) => {
  const sql = "SELECT * FROM atsiliepimai ORDER BY laikas";
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

app.get("/api/atsiliepimai/sort/old", (req, res) => {
  const sql = "SELECT * FROM atsiliepimai ORDER BY laikas DESC";
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

app.get("/api/atsiliepimai/sort/good", (req, res) => {
  const sql = "SELECT * FROM atsiliepimai ORDER BY vertinimas DESC";
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

app.get("/api/atsiliepimai/sort/bad", (req, res) => {
  const sql = "SELECT * FROM atsiliepimai ORDER BY vertinimas";
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

app.get("/api/atsiliepimai/", (req, res) => {
  const sql = "SELECT * FROM atsiliepimai";
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

app.get("/api/atsiliepimai/vertinimas", (req, res) => {
  const sql = "SELECT AVG(vertinimas) as vidurkis FROM atsiliepimai";
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

// Retrieve feedback by ID
app.get("/api/atsiliepimai/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM atsiliepimai WHERE id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

app.post("/api/atsiliepimai/", (req, res) => {
  const { vardas, pastas, vertinimas, tekstas } = req.body;
  const sql =
    "INSERT INTO atsiliepimai (vardas, pastas, vertinimas, tekstas) VALUES (?, ?, ?, ?)";
  con.query(sql, [vardas, pastas, vertinimas, tekstas], (err, result) => {
    if (err) throw err;
    res.status(200).json({
      status: "success",
      data: { id: result.insertId },
    });
  });
});

app.put("/api/atsiliepimai/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM atsiliepimai WHERE id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) throw err;
    if (result.length) {
      let atsiliepimas = result[0];
      ["vardas", "pastas", "vertinimas", "tekstas"].forEach((key) => {
        if (req.body[key]) {
          atsiliepimas[key] = req.body[key];
        }
      });
      const updateSql =
        "UPDATE atsiliepimai SET vardas = ?, pastas = ?, vertinimas = ?, tekstas = ? WHERE id = ?";
      con.query(
        updateSql,
        [
          atsiliepimas.vardas,
          atsiliepimas.pastas,
          atsiliepimas.vertinimas,
          atsiliepimas.tekstas,
          id,
        ],
        (err) => {
          if (err) throw err;
          res.status(200).json({ status: "success" });
        }
      );
    } else {
      res.status(404).send({
        status: 404,
        message: "Error: not found",
      });
    }
  });
});

app.delete("/api/atsiliepimai/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM atsiliepimai WHERE id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) throw err;
    if (result.length) {
      const deleteSql = "DELETE FROM atsiliepimai WHERE id = ?";
      con.query(deleteSql, [id], (err) => {
        if (err) throw err;
        res.status(200).json({ status: "success" });
      });
    } else {
      res.status(404).send({
        status: 404,
        message: "Error: not found",
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
