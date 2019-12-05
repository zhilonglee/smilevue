const fs = require("fs")
const Router = require("koa-router")
let router = new Router()




router.get("/", async (ctx) => {
   ctx.body = fs.readFileSync("./data_json/index.json", "UTF-8")
   ctx.set("Content-type","application/json;charset=utf-8")
})

module.exports=router
