const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.users = require("./user.model.js")(sequelize, Sequelize);
// db.roleTypes = require("./roleTypes.model.js")(sequelize, Sequelize);
// db.userTypes = require("./userTypes.model.js")(sequelize, Sequelize);
// db.customers = require("./customers.model.js")(sequelize, Sequelize).Customer;
// db.companies = require("./customers.model.js")(sequelize, Sequelize).company;
// db.clients = require("./clients.model.js")(sequelize, Sequelize);
// db.staff = require("./staffCRS.model.js")(sequelize, Sequelize);
// db.order = require("./order.model.js")(sequelize, Sequelize);
// db.report = require("./report.model.js")(sequelize, Sequelize);
// db.documentTypes = require("./documentTypes.model.js")(sequelize, Sequelize);
// db.counties = require("./counties.model.js")(sequelize, Sequelize);
// db.requests = require("./requests.model.js")(sequelize, Sequelize);
// db.uploadedFiles = require("./uploadedFiles.model.js")(sequelize, Sequelize);
// db.allFiles = require("./allFiles.model.js")(sequelize, Sequelize);
// db.deliverables = require("./deliverables.model.js")(sequelize, Sequelize);
// db.guidelines = require("./guidelines.model.js")(sequelize, Sequelize);
// db.submittedGuidelines = require("./submittedGuidelines.model.js")(sequelize, Sequelize);
// db.notes = require("./notes.model.js")(sequelize, Sequelize);


module.exports = db;