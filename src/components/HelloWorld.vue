<template>
    <div class="all">
        <div class="bg"> <img width="100%" height="100%" src="../assets/42047c77ab6e9d10e0e8634f1e4200f4.jpeg" alt=""> </div>
        <div class="top">
            <img width="105px" height="105px" src="../assets/843a32713b77fac3bcc60d35246bec31.jpeg" alt="">
            <span class="brand"></span>
            <span class="name">粥品香坊(大运村)</span>
            <br>
            <span class="elm">饿了么专送/38分钟送达</span>
            <br>
            <span class="e2">在线支付满99减1</span>
            <van-notice-bar class="gonggao" color="#1989fa" background="#ecf9ff"
                left-icon="info-o">粥品香坊的成功部分归功于其独特的菜单。餐厅提供了多种口味的粥，包括传统的瘦肉粥、鸡肉粥、海鲜粥等，
                每一碗都经过精心烹制，汤汁醇厚，米粒饱满。此外，粥品香坊还提供了各种美味的配菜和小吃，如炸香蕉、豆腐花等，丰富了整个餐
                单，满足了不同食客的需求。</van-notice-bar>
        </div>
        <div class="bt">
            <van-tabs v-model="activeName">
                <van-tab title="商品" name="a">
                    <div class="left">
                        <van-tree-select height="100vw" :items="items" :main-active-index.sync="active">
                            <template #content>

                                <div v-if="active === 0" class="rexiaobang">
                                    <van-cell v-for="item in cartItems" :key="item.id">
                                        <template #icon>
                                            <img width="100px" height="80px" src="../assets/pidan.jpeg" alt="">
                                            <!-- <van-image width="100px" height="100px" fit="contain" :src="item.img"/> -->
                                        </template>
                                        <template #title>
                                            <span class="cart-item-title">{{ item.name }}</span>
                                        </template>
                                        <template #label>
                                            <van-stepper v-model="item.quantity" :min="0" theme="round" :max="item.stock" />
                                        </template>
                                    </van-cell>
                                </div>

                                <div v-if="active === 1">
                                    <van-cell v-for="item1 in cartItems1" :key="item1.id">
                                        <template #icon>
                                            <img width="100px" height="80px" src="../assets/pidan.jpeg" alt="">
                                            <!-- <van-image width="100px" height="100px" fit="contain" :src="item.img"/> -->
                                        </template>
                                        <template #title>
                                            <span class="cart-item-title">{{ item1.name }}</span>
                                        </template>
                                        <template #label>
                                            <van-stepper v-model="item1.quantity" :min="0" theme="round" :max="item1.stock" />
                                        </template>
                                    </van-cell>
                                </div>

                                <div v-if="active === 2">
                                    <van-cell v-for="item2 in cartItems2" :key="item2.id">
                                        <template #icon>
                                           <img :src="item2.img" width="100px" height="80px"  />
                                        </template>
                                        <template #title>
                                            <span class="cart-item-title">{{ item2.name }}</span>
                                        </template>
                                        <template #label>
                                            <van-stepper v-model="item2.quantity" :min="0" theme="round" :max="item2.stock" />
                                        </template>
                                    </van-cell>
                                </div>

                                <div v-if="active === 3">
                                    <van-cell v-for="item3 in cartItems3" :key="item3.id">
                                        <template #icon>
                                           <img :src="item3.img" width="100px" height="80px"  />
                                        </template>
                                        <template #title>
                                            <span class="cart-item-title">{{ item3.name }}</span>
                                        </template>
                                        <template #label>
                                            <van-stepper v-model="item3.quantity" :min="0" theme="round" :max="item3.stock" />
                                        </template>
                                    </van-cell>
                                </div>

                                <div v-if="active === 4">
                                    <van-cell v-for="item4 in cartItems4" :key="item4.id">
                                        <template #icon>
                                           <img :src="item4.img" width="100px" height="80px"  />
                                        </template>
                                        <template #title>
                                            <span class="cart-item-title">{{ item4.name }}</span>
                                        </template>
                                        <template #label>
                                            <van-stepper v-model="item4.quantity" :min="0" theme="round" :max="item4.stock" />
                                        </template>
                                    </van-cell>
                                </div>

                                <div v-if="active === 5">
                                    <van-cell v-for="item5 in cartItems5" :key="item5.id">
                                        <template #icon>
                                           <img :src="item5.img" width="100px" height="80px"  />
                                        </template>
                                        <template #title>
                                            <span class="cart-item-title">{{ item5.name }}</span>
                                        </template>
                                        <template #label>
                                            <van-stepper v-model="item5.quantity" :min="0" theme="round" :max="item5.stock" />
                                        </template>
                                    </van-cell>
                                </div>

                                <div v-if="active === 6">
                                    <van-cell v-for="item6 in cartItems6" :key="item6.id">
                                        <template #icon>
                                           <img :src="item6.img" width="100px" height="80px"  />
                                        </template>
                                        <template #title>
                                            <span class="cart-item-title">{{ item6.name }}</span>
                                        </template>
                                        <template #label>
                                            <van-stepper v-model="item6.quantity" :min="0" theme="round" :max="item6.stock" />
                                        </template>
                                    </van-cell>
                                </div>

                                <div v-if="active === 7">
                                    <van-cell v-for="item7 in cartItems7" :key="item7.id">
                                        <template #icon>
                                           <img :src="item7.img" width="100px" height="80px"  />
                                        </template>
                                        <template #title>
                                            <span class="cart-item-title">{{ item7.name }}</span>
                                        </template>
                                        <template #label>
                                            <van-stepper v-model="item7.quantity" :min="0" theme="round" :max="item7.stock" />
                                        </template>
                                    </van-cell>
                                </div>

                                <div v-if="active === 8">
                                <van-cell v-for="item8 in cartItems8" :key="item8.id">
                                        <template #icon>
                                           <img :src="pic" width="100px" height="80px">
                                           
                                        </template>
                                        <template #title>
                                            <span class="cart-item-title">{{ item8.name }}</span>
                                        </template>
                                        <template #label>
                                            <van-stepper v-model="item8.quantity" :min="0" theme="round" :max="item8.stock" />
                                        </template>
                                    </van-cell>
                                </div>
                            </template>
                        </van-tree-select>
                    </div>
                </van-tab>

                <van-tab title="评论" name="b"></van-tab>

                <van-tab title="商家" name="c"></van-tab>
            </van-tabs>
        </div>

        <div class="show"><!-- 
            <van-overlay :show="show" @click="show = false">
                <div class="wrapper" @click.stop>
                    <div class="block" />
                </div>
             </van-overlay> -->

                <van-submit-bar :price="calculateTotalPrice()" currency="￥" button-text="提交订单" @click="show = true">
                    <van-overlay :show="show" @click="show = false">
                <div class="wrapper" @click.stop>
                    <van-form>
<van-field v-model="name" label="姓名" placeholder="请输入姓名" />
<van-field v-model="phone" label="电话" placeholder="请输入电话" />
<van-button type="primary" @click="submitOrder">确认提交</van-button>
</van-form>
                </div>
             </van-overlay>
                </van-submit-bar>
        </div>


    </div>
</template>
 
 

<script>
export default {
    data() {
        return {
              pic:require("../assets/xiaren.jpeg"),
              show: false,
            cartItems: [
                { id: 1, name: '皮蛋瘦肉粥', image: '../assets/pidan.jpeg', quantity: 0, stock: 10, price: 10 },
                { id: 2, name: '扁豆焖面', image: '../assets/pidan.jpeg', quantity: 0, stock: 10, price: 14 },
                { id: 3, name: '葱花饼', image: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 5 },
                { id: 4, name: '牛肉馅饼', image: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 8 },
                { id: 5, name: '招牌猪肉锅贴', image: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 8 },
                { id: 6, name: '白粥', image: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 5 },
            ],
            cartItems1: [
                { id: 1, name: '虾仁面', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 20 },
                { id: 2, name: '牛肉面', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 18 },
                { id: 3, name: '牛肉盖浇饭', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 18 },
            ],
            cartItems2: [
                { id: 1, name: '白粥', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 3 },
                { id: 2, name: '皮蛋瘦肉粥', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 10 },
            ],
            cartItems3: [
                { id: 1, name: '虾仁面', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 20 },
                { id: 2, name: '牛肉面', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 18 },
                { id: 3, name: '葱花饼', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 5 },
                { id: 4, name: '牛肉馅饼', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 8 },
                { id: 5, name: '招牌猪肉锅贴', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 8 },
            ],
            cartItems4: [
                { id: 1, name: '五香牛肉', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 30 },
                { id: 2, name: '凉拌黄瓜', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 10 },
            ],
            cartItems5: [
                { id: 1, name: '梅菜扣肉', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 18 },
            ],
            cartItems6: [
                { id: 1, name: '东北大米', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 2 },
                { id: 2, name: '牛肉盖浇饭', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 18 },
            ],
            cartItems7: [
                { id: 1, name: '虾仁面', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 20 },
                { id: 2, name: '牛肉面', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 18 },
                { id: 3, name: '扁豆焖面', img: 'src/assets/pidan.jpeg', quantity: 0, stock: 10, price: 14 },
            ],
            cartItems8: [
                { id: 1, name: '矿泉水', img: "pic", quantity: 0, stock: 10, price: 2 },
                { id: 2, name: '可乐', img: 'pic', quantity: 0, stock: 10, price: 3.5 },
            ],
            activeKey: 0,
            activeName: 'a',
            active: 0,
            items: [{ text: '热销榜' }, { text: '单人特色套餐' }, { text: '特色粥品' }, { text: '精选热菜' },
            { text: '爽口凉菜' }, { text: '半成品' }, { text: '饭类' }, { text: '面类' }, { text: '饮品' }]
        };
    },
    methods: {
        calculateTotalPrice() {
            let totalPrice = 0;
            for (const item of this.cartItems) {
                totalPrice += item.quantity * item.price;
            }
            for (const item1 of this.cartItems1) {
                totalPrice += item1.quantity * item1.price;
            }
            for (const item2 of this.cartItems2) {
                totalPrice += item2.quantity * item2.price;
            }
            for (const item3 of this.cartItems3) {
                totalPrice += item3.quantity * item3.price;
            }
            for (const item4 of this.cartItems4) {
                totalPrice += item4.quantity * item4.price;
            }
            for (const item5 of this.cartItems5) {
                totalPrice += item5.quantity * item5.price;
            }
            for (const item6 of this.cartItems6) {
                totalPrice += item6.quantity * item6.price;
            }
            for (const item7 of this.cartItems7) {
                totalPrice += item7.quantity * item7.price;
            }
            for (const item8 of this.cartItems8) {
                totalPrice += item8.quantity * item8.price;
            }
            return totalPrice*100;
        }
    }

};

</script>



<style>
.all {
    padding-top: 0%;
}
.wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
.show{
    z-index: 3;
    position: absolute;
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

.rexiaobang {
    width: 100%;
    height: 100%;

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
    background-image: url(../assets/d7e796399284ef4996db0585237164c.png);
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
    margin-top: 0px;
}

.title {
    left: -30px;
}
</style>
  