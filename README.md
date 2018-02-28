## svg动画当中需要实现 线条有间隔 
<br/>设置           <em style="color:red">stroke-dasharray</em> 来进行隔断操作<br/>
## 当需要动画操作的时候
 如描边循环操作 使用
```javascript
<animate attributeName="stroke-dashoffset" begin="0s" from="100%" to="0%" dur="3s"  repeatCount="indefinite"/>
```
<em>from to 来表示内容的进度 dur 为实现动画的时间 repeatCount=indefinite来设置动画可以无限循环</em>
<br>
## 如果需要实现单向动画制作的话
 需要在 需要实现动画的线条中添加<em>stroke-dasharra</em>这个属性 并且需要设置最大值
然后再添加动画如<br/>
```javascript
<animate attributeName="stroke-dashoffset" begin="0s" from="100" to="0" dur="5s"/>
```