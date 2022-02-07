## 1，如何解决父元素塌陷6种方法

1，给父元素添加伪元素（：before/:after)

2，在父元素内部最后添加一个空的div，两边清除浮动

3，设置父元素的属性overflow为hidden

4,   设置父元素的属性display为inline-block/inline-flex/inline-table

5,让父元素也浮动起来

6，给父元素设置固定宽高（知道子元素的高）

代码

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>父元素塌陷六种解决办法</title>
    <style>
        div.wrapper{
            margin:auto;
            width:50%;
            border:5px solid red;

        }

        div.first:after{
            content:'';
            height:0;
            display:block;
            visibility: hidden;
            clear: both;
        }

        div.second{
            clear:both;
        }

        div.thred{
            float:left;
        }

        div.fouth{
            /* 属性还可以为 auto*/
            overflow:hidden;
        }

        div.fifth{
            /* 属性还可以为display:inline-table/inline-flex */
            display: inline-block;
        }

        div.sixth{
            height:200px
        }
        div.inner{
            width: 100px;
            height:200px;
            border:1px solid blue;
            float:left;
        }
    </style>
</head>
<body>
    <!-- 父元素添加伪类：before/:after
        相当于添加一个空元素，不会影响页面布局
    -->
    
    <div class="wrapper first">
        <div class="inner"></div>
        <div class="inner"></div>
        <div class="inner"></div>
    </div>
   
    <hr color="blue">
     <!--  
        在父元素内部最后面添加一个空的div，清除浮动
    -->
    <div class="wrapper ">
        <div class="inner"></div>
        <div class="inner"></div>
        <div class="inner"></div>
        <div class="second"></div>
    </div>
    <hr color="blue">
    <!-- 让父元素浮动 -->
    <div class="wrapper thred">
        <div class="inner"></div>
        <div class="inner"></div>
        <div class="inner"></div>
    </div>
    <hr color="blue">
    <!-- 给父元素设置overflew属性为hidden -->
    <div class="wrapper fouth">
        <div class="inner"></div>
        <div class="inner"></div>
        <div class="inner"></div>
    </div>
    <hr color="blue">
<!-- 设置父元素dispaly为inline-block -->
    <div class="wrapper fifth">
        <div class="inner"></div>
        <div class="inner"></div>
        <div class="inner"></div>
    </div>
    <hr color="blue">
    <div class="wrapper sixth ">
        <div class="inner"></div>
        <div class="inner"></div>
        <div class="inner"></div>
    </div>
    <hr color="blue">

</body>
</html>
~~~

实现的效果

![](D:\front-html-css2021\front-html-css-allfile\Typora-file\myfile\20210609002802.png)

## 2,在浏览器输入URL到页面呈现经历的过程

1，DNS解析

(1)浏览器检查自身缓存中有没有该域名解析后的IP地址，如果有的话解析结束

(2)没有命中的话，浏览器会检查操作系统有没有对应解析过的结果。（一般是c盘中hosts文件，文件权限只读不能进行更改）

(3)如果还是没有命中的话才会请求域名服务器，首先请求本地域名服务器LDNS来解析这个域名，本地域名服务器一般都会缓存对应域名的解析结果

(4)如果还没有命中，就会请求根域名服务器（root server）进行解析

(5)根域名服务器返回给本地域名一个所查询域的主域名服务器地址(gTLD server)

(6)然后本地域名服务器再请求主域名服务器

(7)接受到请求的主域名服务器返回网站注册域名服务器(name server)地址

(8)注册域名服务器根据域名的映射找到对应的IP，返回给本地域名服务器

(9)本地域名服务器缓存这个域名和对应的IP

(10)本地域名服务器把IP返回给用户，用户然后根据LTT的值缓存到系统缓存中，域名解析过程就到此结束了

2，TCP 连接

tcp三次握手

第一次握手：客户端应用进程主动打开，给服务器发送请求报文端（SYN=1；req=1;)

第二次握手：服务器应用进程被动打开，如果接受请求，则会返回确认报文(SYN=1 ;ACK=1;ack=x+1;req=y)

第三次握手：客户端收到确认报文后，通知上层应用进程连接建立，发送确认报文给服务器(ACK=1;ack=y+1)，服务器收到确认报文后，也会通知上层应用进程连接建立

tcp四次挥手

第一次：客户端发送FIN，关闭与服务器端的数据传送

第二次：服务器收到FIN后，发送确认报文

第三次：服务器发送FIN，关闭客户端的连接

第四次：客户端发回ACK报文确认，并且确认号为收到序号加一

3，发送http请求

 请求报文

~~~
GET http://www.example.com/ HTTP/1.1-->这一行为请求行

Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
Cache-Control: max-age=0
Host: www.example.com
If-Modified-Since: Thu, 17 Oct 2019 07:18:26 GMT
If-None-Match: "3147526947+gzip"
Proxy-Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 xxx

param1=1&param2=2

~~~

请求行：请求方法，URL，http协议

请求方法：get,post,head,put,delete,option,connect,track

![](D:\front-html-css2021\front-html-css-allfile\Typora-file\myfile\2103906128.png)

url:

部分组成：协议、主机、端口、路径。

http1和http2 的区别

http1:缺点是线程阻塞，并且请求数有一定的限制

http1.0：短连接（解决方案：connection:keep-alive）

http1.1：持久连接，新增了5个请求方式，采用管道机制

缺陷：可以复用tcp 连接，但是通信有序进行的，这样会导致线程阻塞

http2:

完全采用二进制编码非文本格式，完全多路复用，解决了线程阻塞问题，使用报头压缩，采用服务器推送

HTTP协议通常承载于TCP协议之上，在HTTP和TCP之间添加一个安全协议层（SSL或TSL），这个时候，就成了我们常说的HTTPS

请求头：

Accept：浏览器能够处理的内容类型
Accept-Charset：浏览器能够显示的字符集
Accept-Encoding：浏览器能够处理的压缩编码
Accept-Language：浏览器当前设置的语言
Connection：浏览器与服务器之间连接的类型
Cookie：当前页面设置的任何Cookie
Host：发出请求的页面所在的域
Referer：发出请求的页面的URL
User-Agent：浏览器的用户代理字符串

空行

请求正文

4，服务器对请求作出处理并返回响应报文

响应报文

~~~
HTTP/1.1 200 OK
Age: 529651
Cache-Control: max-age=604800
Connection: keep-alive
Content-Encoding: gzip
Content-Length: 648
Content-Type: text/html; charset=UTF-8
Date: Mon, 02 Nov 2020 17:53:39 GMT
Etag: "3147526947+ident+gzip"
Expires: Mon, 09 Nov 2020 17:53:39 GMT
Keep-Alive: timeout=4
Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
Proxy-Connection: keep-alive
Server: ECS (sjc/16DF)
Vary: Accept-Encoding
X-Cache: HIT

<!doctype html>
<html>
......
~~~

响应行：http协议版本，响应状态码以及描述

响应状态码：

1**：

100：

101：

2**：

200：





响应头：

Age：推算资源创建经过时间
Cache-Control：控制HTTP缓存
Connection：浏览器与服务器之间连接的类型
Content-Encoding：适用的编码方式
Content-Type：表示后面的文档属于什么MIME类型
Date：表示消息发送的时间，时间的描述格式由rfc822定义
ETag：资源的匹配信息
Expires：提供一个日期和时间，响应在该日期和时间后被认为失效
Last-Modified：资源的最后修改日期时间
server：服务器名字

空行

响应正文



5，浏览器解析渲染页面

- 获取HTML文档，遍历文档节点生成DOM树

- 解析css文件，生成css规则树（cssOM)

  css解析和DOM的解析可以是同步的，但是js脚本的执行会阻塞css 的渲染（当然这里对css 渲染的影响只发生在JS脚本访问CSS才会）

- 浏览器通过DOM 树和CSS规则树生成渲染树（render three)

  display:none的元素不在渲染树里（不占位）（它会触发回流）

  visibility：hidden的元素是在渲染树里的（占位）（它会触发重绘）

- 布局渲染树

  float元素，absoulte元素，fixed元素会发生位置偏移。

  我们常说的脱离文档流，其实就是脱离Render Tree。

  

- 渲染树绘制

  回流(reflow):当浏览器发现某个局部的变化影响的布局，这时候就会倒回去重新渲染，这就叫回流

  重绘(repaint):当改变了如背景色，文字颜色，边框颜色等不会影响布局的属性时

6，结束



## 3，web前端性能优化

- ### 减少http请求，使用http缓存

  http缓存（属于浏览器缓存的一种）

  http 缓存是什么：它是一种通过http相关报文段（cache-control,expires,last-modify,Etag)来控制浏览器如何获取资源的一种机制

  

  1. 浏览器先根据这个资源的http头信息来判断是否命中强缓存。如果命中则直接加在缓存中的资源，并不会将请求发送到服务器。
  2. 如果未命中强缓存，则浏览器会将资源加载请求发送到服务器。服务器来判断浏览器本地缓存是否失效。若可以使用，则服务器并不会返回资源信息，浏览器继续从缓存加载资源。
  3. 如果未命中协商缓存，则服务器会将完整的资源返回给浏览器，浏览器加载新资源，并更新缓存。

  

  浏览器缓存分类（强缓存/协商缓存）

  

  强缓存:强缓存就是服务器在响应头中加入对请求文件的缓存配置（cache-control报文段）

  cache-control字段的设置：max-age=xxx(该文件缓存时间)

  public:客户端可以缓存请求的资源，代理服务器也可以缓存请求的资源，

  private:代理服务器不能缓存该资源资源客户端才可以缓存该资源

  immutable:在文件没有失效前只会使用强缓存，即使刷新也不会发起http请求

  no-cache:跳过设置强缓存，但是不妨碍设置协商缓存

  no-store:不缓存，这个不会让客户端，服务器进行缓存

  

​       协商缓存：协商缓存就是服务器在响应头加入etag,last-modified字段

​        etag:就是文件的唯一标识，改动了文件etag 就会变

​        last-modified:文件的修改时间，精确到秒

​        第二次请求该资源时会带上他们两个，但是last-modified 字段变成了if-modified-since但是值是相同的



浏览器第一次向服务器请求某资源时，服务器同意该请求，并会在响应头中加入cache-control,etag,last-modified这些对缓存的配置字段。当客户端缓存文件没有过期，就会返回200状态，直接读取缓存，当客户端存储的资源过期了，就会使用协商缓存，先发送请求，服务器会比较请求头里面etag,if-modified-since 的值来判断资源是否真的过期（这里的过期是指文件是否被修改）如果没过期就会返回304 状态码客户端就会用缓存的老资源。（如果判断资源过期，就会返回200状态码，客户端如第一次接收该资源一样）

- ### 使用浏览器缓存

  Cookie

  名称：

  值：

  域：

  路径：

  失效时间：

  安全标准：

  Localstorage

  ~~~
  下面的代码片段访问了当前域名下的本地 Storage 对象，并通过 Storage.setItem() 增加了一个数据项目。
  
  localStorage.setItem('myCat', 'Tom');
  Copy to Clipboard
  该语法用于读取 localStorage 项，如下:
  
  let cat = localStorage.getItem('myCat');
  Copy to Clipboard
  该语法用于移除 localStorage 项，如下:
  
  localStorage.removeItem('myCat');
  Copy to Clipboard
  该语法用于移除所有的 localStorage 项，如下:
  
  // 移除所有
  localStorage.clear();
  ~~~

  

  Sessionstorage

  ~~~
  // 保存数据到 sessionStorage
  sessionStorage.setItem('key', 'value');
  
  // 从 sessionStorage 获取数据
  let data = sessionStorage.getItem('key');
  
  // 从 sessionStorage 删除保存的数据
  sessionStorage.removeItem('key');
  
  // 从 sessionStorage 删除所有保存的数据
  sessionStorage.clear();
  ~~~

  

  #### 1， cookie,localstorage,sessionstorage三者之间的区别

  共同点：都保存在服务端，且同源的

  不同点：

  - 传递方式

    cookie会随着http报文在客户端和服务端来回传递

    localstorage和sessionstorage他们不会主动发送给服务器，仅本地保存

  - 储存大小

    localstorage,sessionStorage两者的存储大小大约为5MB

    cookie的存储大小仅有4KB

  - 共享机制

    localStorage和cookie在同源窗口下都是共享的

    sessionStorage，在同一窗口刷新页面或者进入同源的另一个页面，数据仍然存在。

    同时打开同一页面的不同窗口，它的对象也是不同的。

  - 有效性

    localStorage始终有效，关闭窗口或浏览器都一直保存（如果要删除需要手动删除）

    sessionStorage仅在当前浏览器窗口关闭前保存，不能持久保存

    cookie在设置的有效期内一直保存，即窗口关闭和浏览器关闭数据也依旧存在

  - 浏览器支持

    sessionStorage的浏览器最小版本：IE8、Chrome 5。

  - 使用场景

    cookie 是保存会话信息

    localstorage:保存持久数据

    sessionStorsge:保存具有独立特性的数据

- ### 启用压缩

  

  

- ### CSS Sprites（图片精灵）

  多个图片通过设置CSS样式来放在一个一个图片中

  好处：减小了图片的总大小，下载全部资源只需要一次请求，减轻了连接的消耗

  

- ### LazyLoad Images（图片懒加载）

  ~~~
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>图片懒加载</title>
      <style>
          img{
              height: 900px;
              width: 900px;
          }
      </style>
  </head>
  <body>
  <div class="wrapper">
      <img src="loading.jpg" tex-src="sinaimg.jpg" alt="">
      <img src="loading.jpg" tex-src="sinaimg.jpg" alt="">
      <img src="loading.jpg" tex-src="sinaimg.jpg" alt="">
      <img src="loading.jpg" tex-src="sinaimg.jpg" alt="">
      <img src="loading.jpg" tex-src="sinaimg.jpg" alt="">
      <img src="loading.jpg" tex-src="sinaimg.jpg" alt="">
  </div>
  <script>
  //     // onload是等所有的资源文件加载完毕以后再绑定事件
  // window.onload = function(){
  // 	// 获取图片列表，即img标签列表
  // 	var imgs = document.querySelectorAll('img');
  
  // 	// 获取到浏览器顶部的距离
  // 	function getTop(e){
  // 		return e.offsetTop;
  // 	}
  
  // 	// 懒加载实现
  // 	function lazyload(imgs){
  // 		// 可视区域高度
  // 		var h = window.innerHeight;
  // 		//滚动区域高度
  // 		var s = document.documentElement.scrollTop || document.body.scrollTop;
  // 		for(var i=0;i<imgs.length;i++){
  // 			//图片距离顶部的距离小于可视区域和滚动区域之和时懒加载
  // 			if ((h+s)>getTop(imgs[i])) {
  // 				// 真实情况是页面开始有2秒空白，所以使用setTimeout定时2s
  // 				(function(i){
  // 					setTimeout(function(){
  // 						// 不加立即执行函数i会等于9
  // 						// 隐形加载图片或其他资源，
  // 						//创建一个临时图片，这个图片在内存中不会到页面上去。实现隐形加载
  // 						var temp = new Image();
  // 						temp.src = imgs[i].getAttribute('tex-src');//只会请求一次
  // 						// onload判断图片加载完毕，真是图片加载完毕，再赋值给dom节点
  // 						temp.onload = function(){
  // 							// 获取自定义属性data-src，用真图片替换假图片
  // 							imgs[i].src = imgs[i].getAttribute('tex-src')
  // 						}
  // 					},1000)
  // 				})(i)
  // 			}
  // 		}
  // 	}
  // 	lazyload(imgs);
  
  // 	// 滚屏函数
  // 	window.onscroll =function(){
  // 		lazyload(imgs);
  // 	}
  // }
  
  window.onload=function(){
      var imgs=document.querySelectorAll('img');
      function getTop(e){
          return e.offsetTop;
      }
  
      function lazyload(imgs){
          var h=window.innerHeight;
          var s=document.documentElement.scrollTop || document.body.scrollTop;
          for(var i=0 ;i<imgs.length;i++){
              if((h+s)>getTop(imgs[i])){
                  (function(i){
                      setTimeout(function(){
                          var tem=new Image();
                          tem.src=imgs[i].getAttribute('tex-src');
                          tem.onload=function(){
                              imgs[i].src=imgs[i].getAttribute('tex-src');
                          }
                      },2000)
                  })(i)
              }
          }
  
      }
  
      lazyload(imgs);
      window.onscroll=function(){
          lazyload(imgs)
      }
  }
  
  </script>
  </body>
  </html>
  ~~~

  

- ### CSS放在页面最上部，javascript放在页面最下面或者Lazy Load Javascript

- ### 异步请求Callback（就是将一些行为样式提取出来，慢慢的加载信息的内容）

- ### 减少cookie传输

- #### Javascript代码优化（减少dom的操作，减少作用域链查找）

- ### CDN加速（内容分发网络）

  CDN是将源站内容分发到最近的用户节点，使用户可以就近取得数据，提高用户访问的响应速度和成功率

  解决了因分布，宽带，服务器性能带来访问延迟的问题，适合站点加速，点播和直播等场景

  

  经过本地DNS解析后，会将域名最终解析权交给CDN专用的DNS服务器

  DNS 服务器返回一个全局负载均衡设备的IP ，然后客户在发送URL请求，然后全局负载均衡设备就会根据URL找到客户所在地区最近且最不繁忙的缓存服务器，然后该缓存服务器就会将IP地址返回给全局负载均衡设备，最后全局负载均衡设备将缓存服务器的IP地址返回给用户，用户再发起请求

  

## 4,SVG和canvas的区别和优缺点

SVG是一种用XML来描述2D图形的语言

canvas是用JS脚本来绘制的图形

SVG是矢量图形，所以不依赖分辨率

canvas绘制的图形是标量的，依赖分辨率

SVG支持事件处理器

canvas不支持事件处理器

SVG适合带有大型渲染区域的应用程序（比如谷歌地图）

canvas 适合图像密集型的游戏，会出现频繁的重绘操作

## 5，foreach和map的区别

1，foreach没有返回结果，且为undefine

2，map有返回结果，返回的结果作为一个新数组的元素，不会对原数组进行修改

map的性能比foreach差,使用map时系统还需要为返回结果生成一个新的存储空间，并把结果值一个一个存储到数组中去



## 6，数组原型方法

属性查询

**删除**

shift(删除数组第一个元素，并返回该元素值，改变原数组长度)

splice(可以设置三个参数，第一个参数为数组索引，第二个参数为删除个数，第三个为从第一个参数索引插入的元素)

pop(删除数组最后一个元素，并返回该元素的值，改变数组长度)

**增加**

push(在数组后面增加一个或多个元素，返回该数组的长度)

fill(将固定值填充一个数组，从开始索引带结束索引的全部元素，不包含结束索引)

unshift（在数组开头添加一个或多个元素，并返回新数组的长度）

**修改**

copyWithin(三个参数，第一个是浅复制数组的一部分后替换原数组开始的所以，第二个参数是浅复制开始的索引，第三参数是浅复制结束的索引 ,返回改变后的数组，数组的长度不会改变)

reverse(翻转数组，并返回翻转后的数组 )

sort(默认对数组进行升序排序)

**查询**

find(返回满足提供测试函数第一个元素的值，没有找到返回-1)

findIndex(返回满足提供测试函数第一个元素的索引,没找到返回-1)

indexOf(返回给定元素的第一个索引，没有返回-1)

lastindexOf(返回给定元素最后一个索引,没有返回-1)

**检测数组**

every(测试一个数组全部元素是否通过给定测试函数，返回一个布尔值)

some(测试一个数组中至少有一个元素通过给定测试函数，返回一个布尔值，数组为空的话返回false)

includes(检测一个函数是否包含给定元素，如果包含则返回true,不包含返回false)

Array.isArray(判断传递的值是否是一个数组，返回布尔值)

**生成新数组**



entries(生成一个可迭代对象，其中包含该数组元素的键值对)

keys(返回一个该数组每一个元素索引键的可迭代对象)

values(返回一个可迭代对象，其中包含了每个索引的值)







filter(创建一个新的数组，其中包含通过测试函数的所有元素)

flat(按照一个深度递归遍历数组，生成一个新的数组)

flatmap(深度为1，与map类似)

map(创建一个新数组，该数组结果是每个元素调用一次提供函数的返回结果)

slice(浅拷贝，生成一个新数组，第一个参数开始复制的索引，第二参数为结束的索引)

**执行数组元素**

foreach(每个元素执行一次给定的函数)

**转换数组对象**

Array.from

**转换成字符串**

join(将一个数组全部元素连接成字符串，然后返回该字符串)

toLocalString

tostring(返回一个字符串)

7，数据类型，及其 判断数据类型的方法

typeof

typeof 可以判断基本类型和function类型但是无法判断null和object

instanceof

instanceof适用于自定义对象

constructor

constructor适用于全部类型，除了null和undefine

Object.prototype.toString.call

可以判断所以的数据类型

## 7，onclick和addEventListener的区别

1.onclick事件在同一时间只能指向唯一对象

2.addEventListener给一个事件注册多个listener

3.addEventListener对任何DOM都是有效的，而onclick仅限于HTML

4.addEventListener可以控制listener的触发阶段，（捕获/冒泡）。对于多个相同的事件处理器，不会重复触发，不需要手动使用removeEventListener清除

5.IE9使用attachEvent和detachEvent

## 8，flex布局

父容器display属性要设置为display:flex

设置在容器上的属性

​	flex-direction





