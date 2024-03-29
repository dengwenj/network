/**
 * 物理层
 * 在这一层通过（电、光、无限电波），会获取他们对应的传送信号，电压，
 * 转换成010101010101但是数据还未组织，它们的单位是 bit，所以在这一层主要就是传输比特流
 */
/**
 * 数据链路层
 * 建立逻辑连接，进行硬件地址寻址，差错校验等功能
 * MAC地址：每个网卡的唯一标识
 */ 
/**
 * 网络层
 * 网络层是最复杂的一层，在这一层就定义了我们的 IP
 * 该层控制数据链路层与传输层之间的信息转发，建立、维持和终止网络的连接。具体的说数据链路层的数据在这一层被转换为数据包，然后通过
 * 路径选择、分段组合、顺序、进/出路由等控制，将信息从一个网络设备传送到另一个网络设备
 * 1、寻址：对网络层而言使用 IP 地址来唯一标识互联网上的设备，网络层依靠 IP 地址进行相互通信（类似数据链路层的 MAC 地址）
 * 2、路由：在同一个网络中的内部通信并不需要网络层设备，仅仅靠数据链路层就可以完成相互通信，对于不同的网络之间相互通信则必须借助路由器等三层设备
 * 这一层经常被叫做数据包
 * 这一层中有一个规定网络地址的协议，叫做 IP 协议，它所定义的地址，就被称为 IP 地址 IPv4 Ipv6
 */
/**
 * 传输层
 * 传输层只要就是定义我们的端口号，以及控流和校验
 * 并且拥有两个熟知的协议 TCP 和 UDP
 * 1、TCP：是面向连接的协议并且 TCP 是可靠的，因为 TCP 会进行三次握手四次挥手所以是可靠的，但是这样会降低速度
 * 2、UDP：具有较好的实时性，效率比 TCP 高，UDP 是没有三次握手四次挥手的，因此不稳定，但是速度快，常用于直播，游戏
 * 这一层经常被叫做数据段
 */
/**
 * 会话层
 * 会话层是在发送方和接收方之间进行通信时创建、维持、之后终止或断开连接的地方，与电话通话有点相似
 * 会话层定义了一种机制，允许发送方和接收方启动或暂停请求会话，以及当双方发生拥塞时仍然能保持对话
 * 会话层包含了一种称为检查点的机制来维持可靠会话。检查点定义了一个最接近成功通信的点，
 * 并且定义了当发生内容丢失或损坏时需要回滚以便恢复丢失或损坏数据的点，即断点下载的原理
 * 这一层经常被叫做报文
 */
/**
 * 表示层
 * 表示层主要做了几件重要的事情 安全，压缩，也是程序在网络中的一个翻译官
 * 1、安全：在你的数据发生之前进行加密，在接收者的表示层进行解密
 * 2、表示层还会对图片文件等格式进行解码和编码例如：jpg、ASCII 图片是人类能读懂的计算机需要转换成计算机能读懂的编码
 * 这一层经常被叫做报文
 */
/**
 * 应用层
 * 应用层就是我们使用最多的一层
 * 例如 ajax 调用接口发送 http 请求、域名系统 DNS、邮件协议 SMTP、webSocket长链接、SSH协议
 * 这一层经常被叫做报文
 */
