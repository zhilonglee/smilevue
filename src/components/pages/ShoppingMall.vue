<template>
    <div>
        <div class="search-bar">
            <van-row>
                <van-col span="3">
                    <img :src="locationIcon" width="40%" class="location-icon"/>
                </van-col>
                <van-col span="16"> 
                    <input type="text" class="search-input" />
                </van-col>
                <van-col span="5"> 
                    <van-button size="mini">Search</van-button>
                </van-col>
            </van-row>
        </div>
        <!--swipwer area-->
        <div class="swiper-area">
            <van-swipe :autoplay="5000">
                <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                    <img :src="banner.imageUrl" width="100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Shopping Mall',
                locationIcon: require('../../assets/images/location.png'),
                bannerPicArray:[
                {imageUrl: require('../../assets/images/90percentsdiscount.png')},
                {imageUrl: require('../../assets/images/itemdiscount.jpeg')},
                {imageUrl: require('../../assets/images/phonediscount.png')},
                {imageUrl: require('../../assets/images/snackdiscount.jpeg')},
                {imageUrl: require('../../assets/images/rush.jpg')},
                {imageUrl: require('../../assets/images/timg.jpg')},
                {imageUrl: require('../../assets/images/timg2.jpg')}
                ]
            }
        },
    }
</script>

<style scoped>
        .search-bar{
        height:1.5rem;
        background-color: #e5017d;
        line-height: 1rem;
        overflow: hidden;
    }
    .search-input{
        width:100%;
        height: 1.3rem;
        border-top:0px;
        border-left:0px;
        border-right:0px;
        border-bottom:1px solid #fff !important;
        background-color: #e5017d;
        color:#fff;
    }
    .location-icon{
        padding-top:.2rem;
        padding-left:.3rem;
    }
    .swiper-area{
        clear:both;
        max-height:15rem;
        overflow: hidden;
    }
    .type-bar{
        background-color: #fff;
        margin:0 .3rem .3rem .3rem;
        border-radius: .3rem;
        font-size:14px;
        display:flex;
        flex-direction:row;
        flex-wrap:nowrap;
    }
    .type-bar div{
        padding:.3rem;
        font-size:12px;
        text-align: center;
        flex:1;
    }
    .recommend-area{
        background-color: #fff;
        margin-top:.3rem;
    }
    .recommend-title{
        border-bottom:1px solid #eee;
        font-size:14px;
        padding:.2rem;
        color:#e5017d;
    }
    .recommend-body{
        border-bottom:1px solid #eee;
    }
    .recommend-item{
        width:99%;
        border-right:1px solid #eee;
        font-size:12px;
        text-align: center;
    }
    .hot-area{
        text-align: center;
        font-size:14px;
        height: 1.8rem;
        line-height:1.8rem;
    }
    .hot-goods{
        height: 130rem;
        overflow: hidden;
        background-color: #fff;
    }
    
</style>