const ws = require('ws')

const wss = new ws.Server({ port: 8000 }, () => {
  console.log("WebSocket 服务器启动成功")
})

// 创建客户端连接
wss.addListener('connection', (socket) => {
  // 客户端连接成功
  // 发送消息给前端
  socket.addEventListener('message', (e) => {
    // 只有自己看见自己的
    // socket.send(e.data)
    // 广播的形式看见，都可以看见
    wss.clients.forEach((s) => {
      s.send(JSON.stringify({
        type: 2,
        message: e.data
      }))
    })
  })

  let timer 
  // socket 长时间不使用 网络波动 弱网模式 它是有可能会断开的
  // 心跳检测，进行保活，保持连接
  timer = setInterval(() => {
    if (socket.readyState === ws.OPEN) {
      // 说明是打开的
      socket.send(JSON.stringify({
        type: 1,
        message: "心跳检测"
      }))
    } else {
      // 说明断开了
      clearInterval(timer)
    }
  }, 5000)
})
