<template>
  <div id="login">
    <div class="video">
      <video src="../assets/vedio/login.mp4" muted autoplay loop></video>
    </div>
    <div class="from">
      <h2>羽毛记账后台管理</h2>
      <div>
        <img src="../assets/img/login/yonghu.png" alt="">
        <label for="admin">
          <input type="text" id="admin" placeholder="管理员ID" v-model="admin.adminId">
        </label>
      </div>
      <div>
        <img src="../assets/img/login/mima.png" alt=""/>
        <label for="password">
          <input
              type="password"
              placeholder="密码"
              id="password"
              v-model="admin.password"
          />
        </label>
      </div>
      <button @click="submit">登录</button>
    </div>
  </div>

</template>
<script>
import {reactive} from 'vue'
import router from "@/router";
import {login} from "@/config/api";
import 'element-plus/es/components/message/style/css'
import {ElMessage} from 'element-plus'

export default {
  name: 'LoginView',
  setup() {
    let admin = reactive({
      adminId: '',
      password: ''
    })
    const submit = function () {
      let data = {
        adminId: admin.adminId,
        password: admin.password
      }
      if (data.adminId === '' || data.password === '') {
        ElMessage({
          message: "用户名和密码不能为空",
          type: 'warning'
        })
        return
      }
      login(data).then(value => {
        if (value.code === 200) {
          ElMessage({
            message: "登录成功",
            type: 'success'
          })
          localStorage.setItem('admin',JSON.stringify(value.data))
          router.push('/home')
        } else {
          ElMessage({
            message: value.msg,
            type: 'error'
          })
        }

      })

    }

    return {
      admin,
      submit
    }
  }
}
</script>
<style lang="less" scoped>
#login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: antiquewhite;
}

@media screen and (min-width: 1000px) {
  .video {
    width: 38%;
    height: 590px;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    overflow: hidden;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .from {
    width: 350px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
}

@media screen and (max-width: 1000px) {
  .video {
    display: none;
  }

  .from {
    width: 400px;
  }
}

h2 {
  margin: 80px 0;
  font-size: 35px;
  text-align: center;
  background: linear-gradient(to left top,
  #d16ba5,
  #c777b9,
  #ba83ca,
  #aa8fd8,
  #9a9ae1,
  #8aa7ec,
  #79b3f4,
  #69bff8,
  #52cffe,
  #41dfff,
  #46eefa,
  #5ffbf1);
  color: transparent;
  background-clip: text;
}

.from {
  display: flex;
  flex-direction: column;
  height: 590px;
  background-color: white;

  & > div {
    margin: 20px auto;
    border-bottom: 1px solid #70b4e3;
    width: 80%;

    text-align: center;

    img {
      width: 20px;
      height: 20px;
      vertical-align: middle;
    }

    input {
      padding-left: 10px;
      width: 100% - 20px;
      height: 40px;
      background-color: transparent;
      outline: none;
      border: none;

      &::placeholder {
        margin-left: 1.875rem;
        color: #70b4e3;
        font-size: 15px;
      }
    }
  }
}

button {
  width: 80%;
  height: 45px;
  margin: 50px auto 0;
  background: linear-gradient(to left top,
  #d16ba5,
  #c777b9,
  #ba83ca,
  #aa8fd8,
  #9a9ae1,
  #8aa7ec,
  #79b3f4,
  #69bff8,
  #52cffe,
  #41dfff,
  #46eefa,
  #5ffbf1);
  border: none;
  border-radius: 2.5rem;
  outline: none;
  color: white;
  font-size: 1.125rem;
}

//.isNull {
//  color: rgb(236, 102, 102) !important;
//  visibility: visible !important;
//}
//
//#login {
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  margin-top: 190px;
//
//  #form {
//    display: flex;
//    justify-content: left;
//    width: 55vw;
//    height: 550px;
//    background: linear-gradient(to right bottom,
//    rgba(255, 255, 255, 0.7),
//    rgba(255, 255, 255, 0.3));
//    border-radius: 0.7rem;
//    z-index: 2;
//    backdrop-filter: blur(2rem);
//    overflow: hidden;
//
//    .left {
//      width: 60%;
//      height: 100%;
//
//      video {
//        width: 100%;
//        height: 100%;
//        object-fit: cover;
//      }
//    }
//
//    .right {
//      width: 40%;
//      height: 100%;
//      background-color: white;
//      text-align: center;
//
//      h2 {
//        margin: 5rem 0;
//        font-size: 2.3125rem;
//        background: linear-gradient(to left top,
//        #d16ba5,
//        #c777b9,
//        #ba83ca,
//        #aa8fd8,
//        #9a9ae1,
//        #8aa7ec,
//        #79b3f4,
//        #69bff8,
//        #52cffe,
//        #41dfff,
//        #46eefa,
//        #5ffbf1);
//        color: transparent;
//        background-clip: text;
//      }
//
//      #warn {
//        visibility: hidden;
//        min-height: 1.7rem;
//        background-color: rgba(255, 187, 187, 0.7);
//        border: 1px solid rgba(233, 149, 149, 0.3);
//        border-radius: 0.1875rem;
//        line-height: 1.7rem;
//      }
//
//      div {
//        width: 74%;
//        border-bottom: 1px solid #70b4e3;
//        margin: 0 auto 1.475rem;
//
//        img {
//          vertical-align: middle;
//          margin-right: 0.425rem;
//          width: 23px;
//          height: 23px;
//        }
//      }
//
//      input {
//        width: 90%;
//        height: 40px;
//        background-color: transparent;
//        border: none;
//        outline: none;
//      }
//
//      input::placeholder {
//        margin-left: 1.875rem;
//        color: #70b4e3;
//        font-size: 17px;
//      }
//
//      button {
//        width: 74%;
//        height: 2.5rem;
//        margin-top: 1.75rem;
//        background: linear-gradient(to left top,
//        #d16ba5,
//        #c777b9,
//        #ba83ca,
//        #aa8fd8,
//        #9a9ae1,
//        #8aa7ec,
//        #79b3f4,
//        #69bff8,
//        #52cffe,
//        #41dfff,
//        #46eefa,
//        #5ffbf1);
//        border: none;
//        border-radius: 2.5rem;
//        outline: none;
//        color: white;
//        font-size: 1.125rem;
//      }
//    }
//  }
//}

</style>

