const express = require("express");
const {
  createUser,
  getUsers,
  getDataAI,
  externalApiCall,
} = require("../controllers/userController");

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.post("/aadharVerify", externalApiCall);


module.exports = router;
