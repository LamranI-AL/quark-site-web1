const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

const UsersModel = require("./USERS"); // Utilisation de require pour importer des modules
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://othmanelamrani:lamraniotman000@cluster0.gk8lzsx.mongodb.net/QUARK?retryWrites=true&w=majority"
);
// Enable CORS for all routes
app.use(cors());

// get metode
app.get("/Users", async (request, result) => {
  try {
    const Users = await UsersModel.find();
    result.json(Users);
    console.log("fitch is okyy");
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    result.status(500).send("Erreur lors de la récupération des utilisateurs.");
  }
});

// post methode
app.post("/CreatUser", async (request, result) => {
  const user = request.body;
  const newUser = new UsersModel(user);
  await newUser.save();
  result.json(user);

  // si j'aissay de post seulement
  // result.json(request.body);
});

app.listen(3001, () => {
  console.log("Le serveur WORK");
});
