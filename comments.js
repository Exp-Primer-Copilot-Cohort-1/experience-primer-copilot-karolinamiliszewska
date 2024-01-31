// create web server
const express = require("express");
const app = express();

// import axios
const axios = require("axios");
// import cors
const cors = require("cors");
// import body-parser
const bodyParser = require("body-parser");

// use cors
app.use(cors());
// use body-parser
app.use(bodyParser.json());

// create port
const port = process.env.PORT || 4001;

// create a get request to return comments from API
app.get("/posts/:id/comments", async (req, res) => {
  const postId = req.params.id;
  const response = await axios.get(
    `http://localhost:4002/posts/${postId}/comments`
  );
  res.send(response.data);
});

// create a post request to create a comment
app.post("/posts/:id/comments", async (req, res) => {
  const postId = req.params.id;
  const { content } = req.body;
  const response = await axios.post(
    `http://localhost:4002/posts/${postId}/comments`,
    {
      content,
    }
  );

  res.send(response.data);
});

// listen to port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});