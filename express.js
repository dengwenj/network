const express = require('express')
const fs = require('fs')

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

// SSE
app.get('/api/sse', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.writeHead(200, {
    // 开启 sse，核心代码设置对应的请求头
    'Content-Type': 'text/event-stream'
  })

  const txt = fs.readFileSync('./demo.txt', 'utf8')
  const arr = txt.split('')
  let current = 0

  let timer = setInterval(() => {
    if (current < arr.length) {
      // res.write(`event: pu\n`) // 要加 \n
      res.write(`data: ${arr[current]}\n\n`) // 要加 \n\n
      current++ 
    } else {
      clearInterval(timer)
    }
  }, 300)
})


// navigator.sendBeacon
app.post('/api/sendBeacon', (req, res) => {
  console.log(req.body);
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send('ok')
})

app.listen(3000, () => {
  console.log('服务器启动成功')
})
