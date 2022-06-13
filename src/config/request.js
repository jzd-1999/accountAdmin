import axios from "axios";
import router from "@/router";

const request = axios.create({
    baseURL: 'http://120.78.164.33:8989',
    timeout: 10000
})
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    let admin = localStorage.getItem('admin') ? JSON.parse(localStorage.getItem('admin')) : null
    if (admin) {
        config.headers['token'] = admin.token
    }
    return config
})
request.interceptors.response.use(response => {
    let res = response.data;
    // 兼容服务端返回的字符串数据
    if (typeof res === 'string') {
        res = res ? JSON.parse(res) : res
    }
    // 当权限验证不通过的时候给出提示
    if (res.code === 401) {
        //这里需要清空本地缓存 主要是为了防止服务器崩了，然后死循环
        localStorage.clear()
        router.replace("/login").then();
    }
    return res;
})
export default request