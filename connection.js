const mongoose = require('mongoose')
function mongoConnect(url) {
    return mongoose.connect(url)
  .then(() => console.log("✅ Connection Established"))
  .catch((err) => console.log("❌ Unable to Connect:", err));
}

module.exports = mongoConnect