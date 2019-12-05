const BASEURL = "http://zhilong.mocklab.io/smilevue/"
const LOCALURL = "http://localhost:3000/"
const URL = {
  getShoppingMallInfo: LOCALURL + "index/",
  getGoodsInfo: BASEURL + "goods/",
  registerUser: LOCALURL + "user/register", //用户注册接口
  login: LOCALURL + 'user/login', //用户注册接口
  getDetailGoodsInfo: LOCALURL + 'goods/getDetailGoodsInfo', //获取商品详情
  getCategoryList: LOCALURL + 'goods/getCategoryList', //得到大类信息
  getCategorySubList: LOCALURL + 'goods/getCategorySubList', //得到小类信息
  getGoodsListByCategorySubID: LOCALURL + 'goods/getGoodsListByCategorySubID' //得到小磊商品信息
};

module.exports = URL