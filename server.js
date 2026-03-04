import express from "express";

const app = express();

app.get("/verify", (req, res) => {
  res.status(200).json({
    platform_name: "Demo App",
    metadata: {
      verified: "1"
    }
  });
});

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(process.env.PORT || 3000);
