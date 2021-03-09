const express = require("express");

const router = express.Router();

const Snack = require("../models/snack");

router.get("/", async (req, res, next) => {
  console.log(req.body, "this is all snacks");
  try {
    const allSnacks = await Snack.find();
    res.json({
      status: {
        code: 200,
        message: "Success",
      },
      data: allSnacks,
    });
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body, " this is req.body");
    const createdSnack = await Snack.create(req.body);
    res.json({
      status: {
        code: 201,
        message: "Resource successfully created",
      },
      data: createdSnack,
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const foundSnack = await Snack.findById(req.params.id);
    res.json({
      status: {
        code: 200,
        message: "Success",
      },
      data: foundSnack,
    });
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedSnack = await Snack.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({
      status: {
        code: 201,
        message: "Resource successfully updated",
      },
      data: updatedSnack,
    });
  } catch (err) {
    res.send(err);
  }
});

// Delete route
router.delete("/:id", async (req, res) => {
  try {
    const deletedSnack = await Snack.findByIdAndRemove(req.params.id);
    res.json({
      status: {
        code: 200,
        message: "Resource successfully deleted",
      },
      data: deletedSnack,
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
