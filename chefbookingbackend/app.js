//core module
const path=require("path");

//external module
const express = require("express");
const { default: mongoose } = require("mongoose");
const cors=require("cors");
const  session=require('express-session');
const mongoDBStore=require("connect-mongodb-session")(session);

//local module
const rootDir=require("./utils/pathUtil");
const chefRouter=require("./routes/chefRouter");
const serviceRouter=require("./routes/serviceRouter");

//mongo path
const DB_path ="mongodb+srv://root:root@chefbooking.rpuqc5d.mongodb.net/ChefBooking?retryWrites=true&w=majority&appName=chefbooking";

//creating session store
const store=new mongoDBStore({
  uri:DB_path,
  collection:'sessions'
});

const app = express();

//body parsing
app.use(express.urlencoded({ extended: true }));

//creating session
app.use(session({
  secret:"fuck",
  resave:false,
  saveUninitialized:true,
  store:store,
}));

//json->javascript
app.use(express.json());

app.use(cors());

app.use(serviceRouter);
app.use(chefRouter);
app.use(express.static(path.join(rootDir, 'public')));



const PORT = 3001;

mongoose
  .connect(DB_path)
  .then(() => {

    app.listen(PORT, () => {
      console.log(`server running at: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("error while connecting");
  });
