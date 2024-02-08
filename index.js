import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const API_URL= "https://official-joke-api.appspot.com/jokes/programming/random";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    res.render("index.ejs", {
      setup: result.data[0].setup,
      punchline: result.data[0].punchline
    });
    console.log(result);
  } catch(error) {
    console.log(error.response.data);
    res.status(500);
  }
});





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});