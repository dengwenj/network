const express = require('express')

const app = express()

app.get('/api/jsonp', (req, res) => {
  const { callback } = req.query

  res.setHeader('Access-Control-Allow-Origin', '*') // 可以是 *，也可以指定 ip
  res.send(`${callback}('你好，世界')`)
})

app.get('/api/gettest', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send({
    name: '你好世界'
  })
})

app.post('/api/posttest', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send({
    code: 200
  })
})

app.listen(3000, () => {
  console.log('服务器启动成功')
})
