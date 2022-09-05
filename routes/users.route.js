const express = require("express");
const userControler = require("../controllers/users.controller");
const router = express.Router();

router.get("/random", userControler.getRandomUser);
router.get("/all", userControler.getAllUser);
router.post("/save", userControler.saveOneUser);
router.patch("/update", userControler.updateOneUser)
router.patch("/bulk-update", userControler.updateMultipleUser)
router.delete("/delete", userControler.deleteOneUser)

module.exports = router;
