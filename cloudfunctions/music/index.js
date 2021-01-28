// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'yxt-1gawsd7oe00b1037'
})
 const TcbRouter =require('tcb-router')
 const axios = require('axios')
 const BASE_URL = 'https://shinonon.cn1.utools.club'
// 云函数入口函数
exports.main = async (event, context) => {
  const app = new TcbRouter({
    event
  })

  app.router('playlist', async(ctx, next) =>{
   ctx.body = await cloud.database().collection('playlist')
   .skip(event.start)
   .limit(event.count)
   .orderBy('createTime','desc')
   .get()
   .then((res) =>{
     return res
   })
  })
  return app.serve()
}