require("dotenv").config()
const axios = require('axios')

module.exports = {
  getCode: async(req,res,next)=>{
    const {url} = req.body
    const reg = /code=4/
    const test = reg.test(url)
    let end = url.indexOf('&scope')
    let authCode =[]
    const combine = ()=>{if(test){  
    for(let i = (url.indexOf("code="))+"code=".length;i<end;i++){
      authCode.push(url[i])
    }
    }}
    await combine()
    req.session.authCode = authCode.join("")
    next()
 },

 swapToken: async (req,res,next)=>{
  let {authCode} = req.session
  let authProps = {}
  req.session.tokens = await axios.post(`https://www.googleapis.com/oauth2/v4/token`,{
    code: authCode,
    client_id:process.env.G_CLIENT_ID,
    client_secret: process.env.G_CLIENT_SEC,
    redirect_uri: process.env.REDIRECT,
    grant_type: "authorization_code"
  }).then((rep=>{
    return Object.assign({},authProps,rep.data)
    }))
  res.send(req.session.tokens.access_token)
  next()
 },

 getPhotos: async(req,res)=>{
  let media = await axios.get("https://photoslibrary.googleapis.com/v1/mediaItems",{
    "headers":{"Authorization":`Bearer ${req.session.tokens.access_token}`},
  },{"pageSize":50}
  ).then(rep=>rep.data).catch(err=>console.log(err))
  
  res.status(200).send(media)
  
  },

  getMorePhotos: async(req,res,next)=>{
    let {pageToken} = req.params
    let media = await axios.get(`https://photoslibrary.googleapis.com/v1/mediaItems?pageToken=${pageToken}`,{
      "headers":{"Authorization":`Bearer ${req.session.tokens.access_token}`}
    }).then(rep=>rep.data).catch(err=>console.log(err))
    console.log(media)
    res.status(200).send(media)
    next()
  },

  getProfilePic: async(req,res)=>{
    let {picID} = req.params
    let pic = await axios.get(`https://photoslibrary.googleapis.com/v1/mediaItems/${picID}`,{
      "headers":{"Authorization": `Bearer ${req.session.tokens.access_token}`}
    }).then(rep=>rep.data).catch(err=>console.log(err))
    res.status(200).send(pic)
  },

  getPortfolio: async(req,res)=>{
    try{
      const token = req.session.tokens.access_token
      console.log(token)
      const db = req.app.get('db')
      const {id} = req.session.user
      const portfolio = await db.get_user_portfolio(id)
      let queryString= "mediaItemIds="
      await portfolio.map((record,i)=>{
        if(i<portfolio.length-1){
          return queryString += record.picture_id+"&mediaItemIds="
        }else{
          return queryString += record.picture_id
        }
      })
      const picUrls = await axios.get(`https://photoslibrary.googleapis.com/v1/mediaItems:batchGet?${queryString}`,{
        "headers":{"Authorization":`Bearer ${token}`}
      }).then(rep=> rep.data.mediaItemResults).catch(err=>console.log(err.Error))
      res.status(200).send(picUrls)
    }
    catch(err){
      console.log(err)
    }
   
  }
}
  
   
 
