<template>
  <div class="entry-form" :style="{height:clientHeight}" ref="entryform">
    <div class="desk">
      <!-- <img src="../assets/报名表.jpg" alt="" class="background"> -->
      <img src="http://cs.zqyy.site/book.png" alt class="book">
      <!-- <img src="../assets/杯子.png" alt="" class="cup"> -->
      <transition name="entryForm">
        <div class="paper" v-if="IsShowPaper">
          <div class="title">報名表</div>
          <div class="line"></div>
          <form class="form">
            <div class="form-box">
              <label for="name">姓名</label>
              <input type="text" maxlength="7" id="name" placeholder="" v-model="name">
            </div>
            <div class="form-box">
              <label for="sex">性别</label>
              <input
                type="text"
                id="sex"
                placeholder=""
                v-model="sex"
                @click="showTip2 = true"
                readonly
              >
            </div>
            <div class="form-box">
              <label for="like">意向</label>
              <input
                type="text"
                id="like"
                placeholder=""
                v-model="like"
                @click="showTip3 = true"
                readonly
              >
            </div>
            <div class="form-box" @click="inf">
              <label for="major">个人信息</label>
              <input type="text" id="major" placeholder="" readonly v-model="major">
            </div>
            <section class="inf" v-show ="IsShowInf">
              <div class="close2" @click="IsShowInf = false">&times;</div>
              <div class="form-box3">
                <label for="stuID" class="mgl50">學號</label>
                <input type="number" oninput="if(value.length>10)value=value.slice(0,10)" id="stuID" placeholder="点击编辑" v-model="stuID" @blur="this.toTop">
              </div>
              <div class="form-box3">
                <label for="subject">專業班級</label>
                <input type="text" maxlength="10" id="subject" placeholder="点击编辑" v-model="subject" @blur="this.toTop">
              </div>
              <div class="form-box3">
                <label for="call" class="mgl50">電話</label>
                <input type="tel" maxlength="11" id="call" placeholder="点击编辑" v-model="call" @blur="checkPhone()" >
              </div>
              <span @click="this.disInf">確認</span>
              <span @click="this.disInf">取消</span>
            </section>
            <div class="form-box2">
              <label for="intro">自我介绍</label>
              <textarea maxlength="200" name="intro" id="intro" placeholder="" v-model="intro" @blur="this.toTop"></textarea>
            </div>
            <!-- <input type="textarea" id="intro" placeholder="点击编辑" v-model="intro"  cols="3" rows="3"> -->
          </form>
          <img src="http://cs.zqyy.site/commit.png" alt class="submit" @click="showTip1 = true">
          <div class="NW">Night's Watch</div>
        </div>
      </transition>
      <div class="tips" v-show="showTip1">
        <div class="close" @click="showTip1 = false">&times;</div>
        <p>是否確認提交?</p>
        <span @click="submit">確認</span>
        <span @click="showTip1 = false">取消</span>
      </div>

      <div class="tips" v-show="showTip2">
        <div class="close" @click="showTip2 = false">&times;</div>
        <p>選擇性別</p>
        <span @click="handleSex('boy')">男生</span>
        <span @click="handleSex('girl')">女生</span>
      </div>

      <div class="tips" v-show="showTip3">
        <div class="close" @click="showTip3 = false">&times;</div>
        <p>選擇意向</p>
        <span @click="handleLike('1')">全棧</span>
        <span @click="handleLike('2')">設計</span>
      </div>

      <div class="tips" v-show="showTip4">
        <div class="close" @click="showTip4 = false">&times;</div>
        <p>請確認信息填寫是否完整</p>
        <span @click="showTip4 = false">好滴</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name:"EntryForm",
  data() {
    return {
      //要发送的信息
      name: "",
      sex: "",
      like: "",
      major: "",
      intro: "",
      stuID: "",//学号
      subject: "",//专业班级
      call: "",//电话
      //提示框
      showTip1: false, //提交
      showTip2: false, //选择性别
      showTip3: false, //选择意向
      showTip4: false,//判空提示框
      clientHeight: "",
      IsShowPaper: false,
      IsShowInf: false
    };
  },
  mounted() {
    let imgs = [
        "http://cs.zqyy.site//book.png",
        "http://cs.zqyy.site/rnw.png"
    ];
    for (let img of imgs) {
        let image = new Image();
        image.src = img;
        image.onload = () => {
        };
      }
    this.clientHeight =
      (window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight) + "px";
    setTimeout(() => {
      this.IsShowPaper = true;
    }, 1000);
    setTimeout(() => {
      this.slideInput();
    }, 1500);

  },
  methods: {
    checkPhone(){
      this.toTop();
      // var phone = document.getElementById('call').value;
      // if(!(/^1[34578]\d{9}$/.test(this.call))){
      //     alert("手机号码格式有误，请重填");
      //     this.call = '';
      //     return false;
      // }
    },
    slideInput(){
      var input = document.getElementsByClassName("form-box");
      var input2 = document.getElementsByClassName("form-box2");
      for(let i = 0;i < input.length;i++){
        setTimeout(() =>{
          input[i].style.marginLeft = "10vw";
          input[i].style.opacity = 1;
        },50*(i+1))
      }
      setTimeout(() =>{
          input2[0].style.marginLeft = "10vw";
          input2[0].style.opacity = 1;
        },50*(input.length + 1));
      setTimeout(() =>{
          for(let i = 0;i < input.length;i++){
            let label = input[i].getElementsByTagName("label")[0];
            let placeholder = input[i].getElementsByTagName("input")[0];
            placeholder.setAttribute("placeholder","点击编辑");
            label.style.opacity = 1;
          }
          let placeholder2 = input2[0].getElementsByTagName("textarea")[0];
          let label2 = input2[0].getElementsByTagName("label")[0];
          placeholder2.setAttribute("placeholder","点击编辑");
          label2.style.opacity = 1;
      },500)
      // setTimeout(() =>{
      //   for(let i =0;i < input.length;i++){

      //   }
      // },500)
    },
    submit() {
      let obj = {
          name: this.name,
          sex: this.sex,
          like: this.like,
          intro: this.intro,
          stuID: this.stuID,//学号
          subject: this.subject,//专业班级
          call: this.call,//电话
      }
      let arr = Object.values(obj)
      console.log(arr);
      for(let j=0,len = arr.length;j < len ;j++){
        if(arr[j] == ''){
          this.showTip4 = true;
          this.showTip1 = false;
          return;
        }
      }

      this.showTip1 = false;
      this.$axios.post('/api/submit',obj)
      .then((res) => {
         this.$store.commit('setName',this.name)
        if(res.data.code == 200){
          this.$router.replace('FormShow')
        }else{
          console.log('报错了');
        }
      })
      .catch((err) => {
        console.log(err);
      })

    },
    handleSex(sex) {
      if (sex == "boy") this.sex = "男生";
      else this.sex = "女生";
      this.showTip2 = false;
    },
    handleLike(like) {
      if (like == "1") this.like = "全栈";
      else this.like = "设计";
      this.showTip3 = false;
    },
    inf() {
      this.IsShowInf = true;
      this.toTop();
    },
    toTop(){
      // 填完往上滑
      this.$refs.entryform.scrollIntoView(false);
    },
    disInf(){
      this.IsShowInf = false;
      this.toTop();
    }
  }
};
</script>


<style scoped>
@font-face {
  font-family: HarryP;
  src: url("../font/harrypotter.ttf");
}
@font-face {
  font-family: Genkaimincho;
  src: url("../font/genkai-mincho.ttf");
}
@font-face {
  font-family: Papyrus-Regular;
  src: url("../font/Papyrus-Regular.ttf");
}
.entry-form {
  width: 100vw;
  height: 1334px;
  /* height: 100vh; */
  position: relative;
  background-color: #000000;
}
.desk {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background: url("http://cs.zqyy.site/desk.jpg");
  /* background: url("http://pnqc4vaxj.bkt.clouddn.com/baomingbiao.jpg"); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.desk .background {
  width: 100vw;
  height: 100%;
}
/***paper***/
.entryForm-enter-active,
.entryForm-leave-active {
  transition: opacity 2.5s;
}
.entryForm-enter,
.entryForm-leave-to {
  opacity: 0;
}
.paper {
  width: 569px;
  height: 998px;
  background: url("http://cs.zqyy.site/paper.png");
  background-size: 100% 100%;
  position: absolute;
  top: 100px;
  left: 87px;
  /* font-weight: 100; */
}
.book {
  width: 479px;
  height: 230px;
  position: absolute;
  top: -50px;
  left: 0;
  z-index: 10;
}
.cup {
  width: 250px;
  height: 260px;
  position: absolute;
  top: 44vw;
  right: 0;
  z-index: 2;
}
.person {
  width: 210px;
  height: 532px;
  opacity: 0.3;
  position: absolute;
  left: 50%;
  margin-top: 10px;
  margin-left: -105px;
}
.title {
  margin-top: 73px;
  width: 500px;
  font-family: Genkaimincho;
  font-size: 78px;
  line-height: 75px;
  letter-spacing: 0px;
  color: #000000;
  z-index: 1;
  text-align: right;
}
.line {
  margin: 18px auto;
  width: 458px;
  height: 6px;
  background-color: #0d0d0d;
}

.submit {
  width: 109px;
  height: 108px;
  position: absolute;
  bottom: 50px;
  right: 50px;
}
.NW {
  font-family: Papyrus-Regular;
  font-size: 23px;
  position: absolute;
  bottom: 20px;
  right: 208px;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: hidden;
  /* margin-left: 74px; */
  /* font-family: ShouShuti; */
  font-size: 36px;
}
.form div input {
  width: 420px;
  height: 65px;
  position: relative;
  box-sizing: border-box;
  /* margin: 0 auto; */
  line-height: 24px;
  border: solid 1px #757575;
  /* background-color: transparent; */
  background-color: rgba(204, 204, 204, 0.67);
  color: #757575;
  border-radius: 0;
  font-family: "YouYuan";
  text-align: right;
  padding-right: 15px;
  font-size: 36px;
}
.form-box {
  width: 420px;
  height: 65px;
  line-height: 65px;
  position: relative;
  opacity: 0;
  /* margin-left: -56vw; */
  margin: 30px auto 0 -56vw;
  transition: margin-left 0.5s ease-in,opacity 1.5s;
}
.form-box2 {
  width: 420px;
  height: 270px;
  line-height: 50px;
  position: relative;
  margin: 20px auto 0 -420px;
  opacity: 0;
  transition: margin-left 0.5s ease-in,opacity 1.5s;

}
.form .form-box:first-child {
  margin-top: 0 ;
}
.form-box2 textarea {
  background-color: rgba(204, 204, 204, 0.67);
  color: #757575;
  padding-right: 15px;
  position: absolute;
  top:48px;
  width: 420px;
  left:0;
  text-align: left;
}
.form-box2 label {
  display: inline-block;
  position: relative;
  left: 10px;
  height: 50px;
  width: 420px;
  text-align: left;
  line-height: 50px;
  color: #000;
  z-index: 21;
  opacity:0;
  transition: opacity 1.5s;
}
.form-box label {
  display: inline-block;
  position: absolute;
  background-origin: content-box;
  left: 10px;
  height: 65px;
  color: #000;
  z-index: 21;
  opacity:0;
  transition: opacity 1.5s;
}
.form div input::placeholder {
  font-size: 30px;
  line-height: 40px;
  color: #757575;
  font-family: "YouYuan";
  text-align: right;
  padding-right: 15px;
  position: absolute;
  /* opacity: 0; */
  z-index: 21;
}
#intro {
  width: 400px;
  height: 200px;
  border: solid 1px #757575;
  border-radius: 0;
  font-family: "YouYuan";
  font-size: 30px;
  /* box-sizing: border-box; */
}
#intro::placeholder {
  line-height: 200px;
  width: 420px;
  height: 50px;
  text-align: center;
}
.tips {
  width: 78.333vw;
  height: 46.333vw;
  position: absolute;
  z-index: 22;
  top: 31%;
  left: 50%;
  transform: translate(-50%);
  background: url("http://cs.zqyy.site/tishikuang.png");
  background-size: cover;
  background-repeat: no-repeat;
  font-family: Genkaimincho;
  font-size: 44px;
}
.tips .close {
  position: absolute;
  top: 30px;
  right: 40px;
  transform: scale(1.3);
}
.tips p {
  margin-top: 80px;
}
.tips span {
  margin: 30px 40px 0 40px;
}
.inf {
  width: 660px;
  height: 830px;
  position: absolute;
  left: 50%;
  top: 140px;
  margin-left: -330px;
  z-index: 25;
  font-family: Genkaimincho;
  background-image: url("http://cs.zqyy.site/inf.png");
  background-size: 100% 100%;
  font-size: 40px;
}
.form-box3 {
  width: 520px;
  height: 65px;
  line-height: 65px;
  position: relative;
  margin: 100px auto 0 auto;
}
.form-box3 label {
  display: inline-block;
  position: absolute;
  background-origin: content-box;
  left: 10px;
  height: 65px;
  line-height: 65px;
  color: #000;
  z-index: 21;
  font-size: 46px;
}
#stuID,
#subject,
#call {
  position: absolute;
  width: 300px;
  right: 0;
  font-size: 40px;
  height: 65px;
  line-height: 65px;
  border: none;
  box-sizing: border-box;
  text-align: left;
  background-color: transparent;
}
#stuID::placeholder,
#subject::placeholder,
#call::placeholder {
  font-size: 40px;
  height: 65px;
  line-height: 65px;
  margin-bottom: 2px;
  text-align: center;
}
.close2 {
  position: absolute;
  right: 80px;
  top: 30px;
  font-size: 48px;
}
.inf span {
  position: relative;
  display: inline-block;
  margin: 150px 50px 0px 50px;
  color: #000;
  font-size: 46px;
}
.mgl50{
  margin-left: 50px;
}
</style>

