import request from './request'
export function login(data){
   return request({
        url:'admin/login',
        data:data,
        method:'post'
    })
}
