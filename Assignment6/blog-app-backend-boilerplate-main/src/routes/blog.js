const router = require("express").Router();
let Blog = require("../models/Blog");
const express = require("express");
const bodyparser = require("body-parser");

// Your routing code goes here
router.use(bodyparser.json());
// ----------------To CREATE DATA -----------------

router.post("/blog", (req, res) => {
  console.log(req.body);
  const user = new Blog(req.body);
  user
    .save() //.save() this method returns promisse,The save() method uses either the insert or the update command
    .then(() => {
      res.json({
        status: "suceess",
        Result: user,
      });
    })
    .catch((e) => {
      res.json({
        status: "failuer",
        Result: e.message,
      });
    });
});

// ------------------To READ DATA by Search Query -------------------
router.get("/blog", async (req, res) => {
  console.log(req.query);
  try {
    const data = await Blog.find({
      topic: req.query.search,
    }).limit(req.query.page * 5);
    res.json({
      status: "suceess",
      Result: data,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

// ----------------To UPDATE DATA---------------------------
router.put("/blog/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const updateData = await Blog.findOneAndUpdate(
      //findByIdAndUpdate
      { _id: req.params.id },
      req.body
    );

    res.json({
      status: "suceess",
      Result: updateData,
    });
  } catch (e) {
    res.send({ message: "Either Name Or Weight is Missing" });
  }
});

// ----------------------To DELETE DATA -------------------------------
router.delete("/blog/:id", async (req, res) => {
  try {
    console.log(req.params.id);

    const deletData = await Blog.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({
      status: "Sucess",
      Result: deletData,
    });
  } catch (e) {
    res.send(404).send(e);
  }
});
module.exports = router;
