<template>
  <div id="youzhifang">
    <div class="zf">
      <div>优职坊</div>
      <div>专注优质Axure原型设计、用户体验</div>
      <div class="zf1">
        <div class="zf2">
          <div><div><img src="../assets/img/22.png"/></div><div>微博:优职者</div></div>
          <div><img src="../assets/img/25.png"/></div>
          <div>微博扫一扫关注</div>
          <div>或搜索微博号：<span>优职者</span></div>
        </div>
        <div class="zf2">
          <div><img src="../assets/img/23.png"/><span>微博:优职者</span></div>
          <div><img src="../assets/img/2.jpg"/></div>
          <div>微信扫一扫关注</div>
          <div>或搜索微信号：<span>youzhifang17</span></div>
        </div>
        <div class="zf2">
          <div><img src="../assets/img/24.png"/><span>微博:优职坊</span></div>
          <div><img src="../assets/img/3.jpg"/></div>
          <div>淘宝扫一扫关注</div>
          <div>或搜索：<span>优职坊</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#youzhifang{
  width: 100%;
  background: rgba(242, 242, 242, 1);
  padding: 20px 0 0 0 ;
}
.zf{
  background: #fff;
  border:1px solid #ccc;
  width: 1000px;
  margin: 0 auto;
  text-align: center;
  color: #393D49;
  padding-bottom: 50px;
  border-radius: 10px;
}
.zf>div:nth-child(1){
  font-size: 60px;
  font-weight: bold;
  margin-top: 100px;
}
.zf>div:nth-child(2){
  font-size: 30px;
  font-weight: bold;
  margin-top: 30px;
}
.zf1{
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
}
.zf2>div:nth-child(1){
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
}
.zf2>img{
  width: 35px;
}
.zf2>div:nth-child(2){
  width: 240px;
  border: 5px solid rgba(255, 87, 34, 1);
}
.zf2>div:nth-child(2) img{
  width: 100%;
}
.zf2>div:nth-child(3){
  font-size: 13px;
  margin-top: 10px;
}
.zf2>div:nth-child(4){
  font-size: 13px;
  margin-top: 10px;
}
.zf2>div:nth-child(4)>span{
  color: rgba(255, 87, 34, 1);
  font-size: 15px;
}
</style>