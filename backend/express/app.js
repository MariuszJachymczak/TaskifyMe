const { connectToDb, getDb } = require("./db");
const { ObjectId } = require(`mongodb`);

const express = require("express");
const app = express();
app.use(express.json());
let db;

connectToDb((err) => {
  if (!err) {
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
    db = getDb();
  }
});

app.get("/tasks", (req, res) => {
  // const page = req.query.p || 0;
  // const booksPerPage = 3;

  let tasks = [];

  db.collection("tasks")
    .find()
    .sort({ description: 1 })
    // .skip(page * booksPerPage)
    // .limit(booksPerPage)
    .forEach((task) => {
      tasks.push(task);
    })
    .then(() => {
      res.status(200).json(tasks);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch tasks" });
    });
});

app.get("/tasks/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("tasks")
      .findOne({ _id: ObjectId(req.params.id) })
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch((err) => {
        res.status(500).json({ error: "Could not fetch the document" });
      });
  } else {
    res.status(500).json({ error: "Not a valid format" });
  }
});

app.post("/tasks", (req, res) => {
  const task = req.body;
  db.collection("tasks")
    .insertOne(task)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not create new task" });
    });
});

app.delete("/tasks/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("tasks")
      .deleteOne({ _id: ObjectId(req.params.id) })
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch((err) => {
        res.status(500).json({ error: "Could not delete the document" });
      });
  } else {
    res.status(500).json({ error: "Not a valid doc id" });
  }
});

app.patch("/tasks/:id", (req, res) => {
  const updates = req.body;

  if (ObjectId.isValid(req.params.id)) {
    db.collection("tasks")
      .updateOne({ _id: ObjectId(req.params.id) }, { $set: updates })
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch((err) => {
        res.status(500).json({ error: "Could not update document" });
      });
  } else {
    res.status(500).json({ error: "Not a valid doc id" });
  }
});
