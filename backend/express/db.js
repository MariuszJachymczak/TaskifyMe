const { MongoClient } = require("mongodb");
let dbConnection;
let uri =
  "mongodb+srv://taskifyme:Dupablada1@cluster0.xlf9nly.mongodb.net/TaskifyMe?retryWrites=true&w=majority";

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => console.log(err));
  },
  getDb: () => dbConnection,
};
