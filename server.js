const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
require('./config/passport');
const path = require("path");

const host = '0.0.0.0';
const port = process.env.PORT || 3000;
const app = express();
const db = require("./models");
// const dist = path.resolve(__dirname + "/crs-client");

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({extended: true}));

db.sequelize.sync();

// simple route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to your CRS application server side!" });
});

// Routes
const adminRouter = require("./routes/admin");
// app.use("/api/auth", require("./routes/authentification"));
// app.use("/api/clients", require("./routes/clients"));
// app.use("/api/staff", require("./routes/staff"));
// app.use("/api/researchRequest", require("./routes/researchRequest"));
// app.use("/api/admin", passport.authenticate('jwt', {session:false}), adminRouter);
// app.use("/api/titleReport", require("./routes/titleReport"));
// app.use("/api/counties", require("./routes/counties"));
// app.use("/api/requests", require("./routes/requests"));
// app.use("/api/uploadedFiles", require("./routes/uploadedFiles"));
// app.use("/api/mailer", require("./routes/clientNodeMailer"));
// app.use("/api/s3BucketFileManagement", require("./routes/s3BucketFileManagement"));
// app.use("/api/allFiles", require("./routes/allFiles"));
// app.use("/api/deliverables", require("./routes/deliverables"));
// app.use("/api/typeManagement", require("./routes/userAndRoleTypes"));
// app.use("/api/guidelines", require("./routes/guidelines"));
// app.use("/api/notes", require("./routes/notes"));

// Serve only the static files form the dist directory
app.use(express.static(dist));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(dist+"/index.html"));
});

// set port, listen for requests
// const PORT = process.env.PORT || 3000;
app.listen(port, host, () => {
  console.log(`Example app listening at port ${port}...`);
});
