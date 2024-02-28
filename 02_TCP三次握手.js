/**
 * TCP 是面向连接的，什么是面向连接，面向连接就是数据通讯的时候需要进行三次握手，断开通信的时候进行四次挥手
 * TCP 三次握手在 http 之前，握手完了才去 http 的
 */
/**
 * seq(sequence number), 序列号随机生成的
 * ack(acknowledgement number) 确认序列号 ack = seq + 1
 * ACK(acknowledgement) 确认序列号有效
 * SYN(synchronous) 发起新连接
 * 
 * 客户端-------SYN建立连接，seq序列号--------->服务端
 * 客户端<------SYN + ACK，seq服务端序列号，ack序列号 = 客户端的seq + 1----------服务端
 * 客户端-------ACK，seq序列号 = 客户端seq + 1，ack序列号 = 服务端seq + 1------->服务端
 */
