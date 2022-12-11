const express = require("express");
const app = express();
const userArr = require("./InitialData");
const bodyParser = require("body-parser");
const port = 8080;
app.use(express.urlencoded({ extended: true }));
// Parsing JSON bodies (as send by the  API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// your code goes here
// console.log(userArr);
// console.log(userArr.length);
let newId = userArr[(userArr.length-1)].id;
// --------------Fetch All Records-----------------------
app.get("/api/student", (req, res) => {
  try {
    res.json({ userArr });
  } catch (e) {
    res.status(404).json({
      status: "Failed to get student",
      message: e.message,
    });
  }
});

// --------------Fetch one Record-----------------------

app.get("/api/student/:id",async (req, res) => {
  console.log(req.params);
  try{
    let avialable = "";
    for (i of userArr) {
      if (req.params.id == i.id) {
        avialable = i;
        // console.log(i);
      }}
  if(avialable != ''){
 res.json({ avialable });
  }
  }catch(e){
   res.status(404).json({
      status: "Failed to get student",
      message: e.message,
    });
  }
});
//---------------------put All Records----------------------------------
app.put("/api/student/:id", (req, res) => {
  // console.log(req.body);
  // console.log(req.params);
console.log(userArr);
  try {
    const idx = userArr.findIndex((obj) => obj.id == req.params.id);
    // console.log(idx);
    // if (parseInt(req.params.id) > userArr.length && parseInt(req.params.id) < 0) {
    //   return res.status(400).json({
    //     status: "Failed",
    //     message: "There is no Student With Given ID",
    //   });
  // }
    if (req.body.name) userArr[idx].name = req.body.name;
    if (req.body.currentClass)
      userArr[idx].currentClass = req.body.currentClass;
    if (req.body.division) userArr[idx].division = req.body.division;
    res.json({
      status: "Success",
      message: "Student Updated Successfully",
      data: userArr[idx],
    });
console.log(userArr);
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});
//---------------------------Post the Record--------------------------------
app.post("/api/student", (req, res) => {
  console.log(req.body);
  const { name, currentClass, division } = req.body;
  if (!name || !currentClass || !division) {
    res.status(400).json({
      status: "Failed",
      message: "All fields are required",
    });
  }
  newId++
  userArr.push({
    id: newId,
    name: req.body.name,
    currentClass: req.body.currentClass,
    division: req.body.division,
  });
console.log(userArr);
console.log(userArr.length);
  res.json({
    status: "Success",
    id: newId,
    message: "Student Added Successfully",
  });
  
});

//-----------------------------Delete Record-----------------------------------------------
app.delete("/api/student/:id", (req, res) => {
  try {
// console.log(userArr);
    const idx = userArr.findIndex((obj) => obj.id == req.params.id);
    // console.log(idx);
    if (idx == -1) {
      return res.status(404).json({
        status: "Failed",
        message: "There is no Student With Given ID",
      });
    }
    res.json({
      status: "Success",
      message: "Student Deleted Successfully",
      data: userArr[idx],
    });
    userArr.splice(idx, 1);
    // console.log(userArr);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
