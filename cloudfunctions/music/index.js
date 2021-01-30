// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'yxt-1gawsd7oe00b1037'
})
 const TcbRouter =require('tcb-router')
 const axios = require('axios')
 const BASE_URL = 'http://47.98.169.198:3000/'
// 云函数入口函数
// 云函数入口函数
exports.main = async (event, context) => {
  const app = new TcbRouter({
    event
  })

  app.router('playlist',async (ctx,next) => {
    ctx.body = await cloud.database().collection('playlist')
    .skip(event.start)
    .limit(event.count)
    .orderBy('createTime','desc')
    .get()
    .then((res) => {
      return res
    })
  })

  app.router('musiclist',async(ctx,next) => {
    console.log('######' + event.playlistId)
    const res = await axios.get(`${BASE_URL}/playlist/detail?id=${parseInt(event.playlistId)}`)
    console.log('######' + res)
    ctx.body = res.data
  })

  app.router('musicUrl', async(ctx, next)=>{
    const res = await axios.get(`${BASE_URL}/song/url?id=${event.musicId}`)
    ctx.body = res.data
  })
  return app.serve()
}