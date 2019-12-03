const Koa = require('koa')
const app = new Koa()

//引入connect
const mongoose = require('mongoose')
const {connect , initSchemas} = require('./database/init.js')
const Router = require('koa-router')
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");

app.use(cors());
app.use(bodyParser());

let user = require('./appApi/user.js')
let goods = require('./appApi/goods.js')

let router = new Router();
router.use('/user', user.routes())
router.use('/goods', goods.routes())

app.use(router.routes())
app.use(router.allowedMethods())

//立即执行函数
;(async () => {
  await connect()
    initSchemas();
    // const User = mongoose.model("User");
    // let oneUser = new User({ userName: "caichao2", password: "123456" });
    // oneUser.save().then(() => {
    // console.log("插入成功");
    // });
    // let users = await User.findOne({}).exec()
    // console.log('------------------')
    // console.log(users)
    // console.log('------------------')

})()

app.use(async(ctx)=>{
    ctx.body='<h1>Hello Koa2</h1>'
})

app.listen(3000, () => {
    console.log("[Server output] port number: 3000")
})