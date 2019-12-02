const BASEURL = "http://zhilong.mocklab.io/smilevue/"
const LOCALURL = "http://localhost:3000/"
const URL = {
  getShoppingMallInfo: BASEURL + "index/",
  getGoodsInfo: BASEURL + "goods/",
  registerUser: LOCALURL + "user/register", //用户注册接口
  login: LOCALURL + 'user/login', //用户注册接口
};

module.exports = URL