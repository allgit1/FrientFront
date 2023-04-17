import myAxios from "../plugins/myAxios";


export const getCurrentUser=async ()=>{
    // const user=getCurrentUserState();
    // if (user){
    //     return user;
    // }
    //从远程获取用户信息
    const res=  await myAxios.get('/user/current');
    if (res.code===0){
        return res.data;
    }
    return null;
}
