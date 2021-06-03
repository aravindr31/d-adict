const express = require("express");
const cors = require("cors");
const db = require("./dbconfig/connection");
const mainfunction = require("./functions");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

db.connect((err) => {
  if (err) console.log(err);
  else console.log("DB Connected");
});

app.get("/getschedule", (req, res) => {
  mainfunction.getSchedule().then((response) => {
    res.send(response).status(200);
  });
});

app.post("/addschedule", (req, res) => {
  console.log("here")
  mainfunction.addSchedule(req.body).then(() => {
    res.send("success").status(200);
  });
});
app.get("/editschedule/:id", (req, res) => {
  console.log(req.params.id)
  mainfunction.editSchedule(req.params.id).then((response) => {
    res.send(response).status(200);
  });
});
app.post("/updateschedule",(req,res)=>{
  mainfunction.updateSchedule(req.body)
  // .then(()=>{
  //   res.send("success").status(200)
  // })
})
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
