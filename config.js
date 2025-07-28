const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "4FYiEA5Y#OFa-yn-p0CPQpmnanXpQLfjkuRIrxlJT-xUtHWNX474",
  MONGODB: process.env.MONGODB || "mongodb://mongo:mAnUPgNyLGcMHjTMiwFcpviLpvbOiamI@crossover.proxy.rlwy.net:36230",
  OWNER_NUM: process.env.OWNER_NUM || "94778080044",
};
