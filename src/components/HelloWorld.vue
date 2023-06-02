<template>
    <div class="all">
        <div class="bg"> <img width="100%" height="100%" src="../img/42047c77ab6e9d10e0e8634f1e4200f4.jpeg" alt=""> </div>
        <div class="top">
            <img width="105px" height="105px" src="../img/843a32713b77fac3bcc60d35246bec31.jpeg" alt="">
            <span class="brand"></span>
            <span class="name">粥品香坊(大运村)</span>
            <br>
            <span class="elm">饿了么专送/38分钟送达</span>
            <br>
            <span class="e2">在线支付满99减1</span>
            <van-notice-bar class="gonggao" color="#1989fa" background="#ecf9ff"
                left-icon="info-o">粥品香坊的成功部分归功于其独特的菜单。餐厅提供了多种口味的粥，包括传统的瘦肉粥、鸡肉粥、海鲜粥等，每一碗都经过精心烹制，汤汁醇厚，米粒饱满。此外，粥品香坊还提供了各种美味的配菜和小吃，如炸香蕉、豆腐花等，丰富了整个餐单，满足了不同食客的需求。</van-notice-bar>
        </div>
        <div class="bt">
            <van-tabs v-model="activeName">
                <van-tab title="商品" name="a">
                    <div></div>
                </van-tab>
                <van-tab title="评论" name="b">内容 2</van-tab>
                <van-tab title="商家" name="c">内容 3</van-tab>
            </van-tabs>
        </div>
        <div class="left">

            <van-tree-select height="55vw" :items="items" :main-active-index.sync="active">
                <template #content>
                    <van-image v-if="active === 0" src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
                    <van-image v-if="active === 1" src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
                </template>
            </van-tree-select>

            <!-- <van-sidebar v-model="activeKey">
                <van-sidebar-item title="热销榜" />
                <van-sidebar-item title="单人特色套餐" />
                <van-sidebar-item title="特色粥品" />
                <van-sidebar-item title="精选热菜" />
                <van-sidebar-item title="爽口凉菜" />
                <van-sidebar-item title="半成品" />
                <van-sidebar-item title="饭类" />
                <van-sidebar-item title="面类" />
                <van-sidebar-item title="饮品" />
            </van-sidebar> -->
        </div>

    </div>
</template>
 
 

<script>
export default {
    data() {
        return {
            activeKey: 0,
            activeName: 'a',
            active: 0,
            items: [{ text: '分组 1' }, { text: '分组 2' }],
        };
    },
};
</script>



<style>
.all {
    padding-top: 0%;
}

.bg {
    filter: blur(10px);
    padding-top: 0px;
    margin-top: 0px;
    top: 0px;
    margin-bottom: 5px;
    width: 435px;
    height: 230px;
    position: absolute;
    display: flex;
}

.bt {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 225px;
}

.top {
    color: #ffffff;
    text-align: center;
    position: relative;
    z-index: 1;
}

.top img {
    position: absolute;
    top: 0px;
    left: 50px;
    margin-top: 0px;
    z-index: 2;
}

.name {
    position: absolute;
    top: 0px;
    left: 210px;
    font-size: larger;
    font-weight: bolder;
}

.top .brand {
    width: 30px;
    height: 18px;
    background-image: url(../img/d7e796399284ef4996db0585237164c.png);
    background-size: 30px 18px;
    background-repeat: no-repeat;
    display: flex;
    left: 170px;
    top: 5px;
    position: absolute;
}

.elm {
    position: absolute;
    left: 170px;
    top: 28px;
    font-size: medium;
}

.e2 {
    position: absolute;
    left: 170px;
    top: 52px;
    font-size: medium;
}

.gonggao {
    position: absolute;
    top: 90px;
}

.left {
    margin-top: 150px;
    float: left;
}

.title {
    left: -30px;
}</style>
  