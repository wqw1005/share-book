
<script>
/**
 * Created by Administrator on 2016/7/27.
 */
/**
 * Created by Administrator on 2016/7/21.
 *
 */

/*
 * 该函数是返回的是指定格式的日期,是字符串类型
 * 参数:date ----日期
 * 返回值: 字符串类型的日期
 * */
function getDatetoString(date) {
    var strDate;//存储日期的字符串
    //获取年
    var year=date.getFullYear();
    //获取月
    var month=date.getMonth()+1;
    //获取日
    var day=date.getDate();
    //获取小时
    var hour=date.getHours();
    //获取分钟
    var minute=date.getMinutes();
    //获取秒
    var second=date.getSeconds();
    hour=hour<10?"0"+hour:hour;
    minute=minute<10?"0"+minute:minute;
    second=second<10?"0"+second:second;
    //拼接
    strDate=year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;//隐藏问题,关于变量声明的位置
    return strDate;
}

//根据id获取元素对象
function my$(id) {
    return document.getElementById(id);
}


/*
 *
 * innerText属性IE中支持
 * textContent火狐中支持
 * dvObj.innerText="您好";设置innerText的值
 * console.log(dvObj.innerText);获取innerText的值
 * 因为上述原因,inerText有时候需要设置值，有时候需要获取值
 * 所以,需要写一个兼容的代码能在火狐中使用,也可以在IE中使用
 *
 *
 * */

/*
 *设置innerText属性的值
 * element-----为某个元素设置属性值
 * content-----设置的值
 * */
function setInnerText(element,content) {
    if(typeof element.textContent==="undefined"){
        //IE浏览器
        element.innerText=content;
    }else{
        element.textContent=content;
    }
}
/*
 * 获取innerText属性的值
 * element 要获取的元素
 * 返回的是该元素的innerText值
 * */
function getInnerText(element) {
    if(typeof element.textContent==="undefined"){
        //IE浏览器
        return element.innerText;
    }else{
        return element.textContent;
    }
}


//获取当前元素前一个元素
function getPreviousElement(element) {
    if(element.previousElementSibling){
        return element.previousElementSibling;
    }else{
        var ele=element.previousSibling;
        while (ele&&ele.nodeType!==1){
            ele=ele.previousSibling;
        }
        return ele;
    }
}
//获取当前元素的后一个元素
function getNextElement(element) {
    if(element.nextElementSibling){
        return element.nextElementSibling;
    }else{
        var ele=element.nextSibling;
        while(ele&&ele.nodeType!==1){
            ele=ele.nextSibling;
        }
        return ele;
    }
}

//获取父元素中的第一个元素
function getFirstElementByParent(parent) {
    if(parent.firstElementChild){
        return parent.firstElementChild;
    }else{
        var ele=parent.firstChild;
        while (ele&&ele.nodeType!==1){
            ele=ele.nextSibling;
        }
        return ele;
    }
}
//获取父元素中的最后一个元素
function getLastElementByParent(parent) {
    if(parent.lastElementChild){
        return parent.lastElementChild;
    }else{
        var ele=parent.lastChild;
        while(ele&&ele.nodeType!==1){
            ele=ele.previousSibling;
        }
        return ele;
    }
}

//获取兄弟元素
function getsiblings(ele) {
    if(!ele)return;//判断当前的ele这个元素是否存在
    var elements=[];//定义数组的目的就是存储当前这个元素的所有的兄弟元素
    var el=ele.previousSibling;//当前元素的前一个节点
    while (el){
        if (el.nodeType===1){//元素
            elements.push(el);//加到数组中
        }
        el=el.previousSibling;
    }
    el=ele.nextSibling;
    while(el){
        if(el.nodeType===1){
            elements.push(el);
        }
        el=el.nextSibling;
    }
    return elements;
}
//    //能力检测多个浏览器为同一个对象注册多个事件
var EventTools= {
    //为对象添加注册事件
    addEventListener: function (element, eventName, listener) {
        if (element.addEventListener) {
            element.addEventListener(eventName, listener, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + eventName, listener)
        } else {
            element["on" + eventName] = listener;
        }
    },
    //为对象移除事件
    removeEventListener: function (element, eventName, listener) {
        if (element.removeEventListener) {
            element.removeEventListener(eventName, listener, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + eventName, listener);
        } else {
            element["on" + eventName] = null;
        }
    },
    //获取参数e
    getEvent: function (e) {
        return e || window.event;
    },
    getPageX: function (e) {
        if (e.pageX) {
            return e.pageX;
        } else {
            //有的浏览器把高度设计在了文档的第一个元素中了
            //有的浏览器把高度设计在了body中了
            //document.documentElement.scrollTop;//文档的第一个元素
            //document.body.scrollTop;
            var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            return e.clientX + scrollLeft;
        }
    },
    getPageY: function (e) {
        if (e.pageY) {
            return e.pageY;
        } else {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            return e.clientY + scrollTop;
        }
    }

};

//获取元素的当前位置,移动,每次移动多少像素
// function animate(element,target) {
//     //每次调用这个函数的时候先清理之前的计时器
//     clearInterval(element.setId);
//     element.setId=setInterval(function () {
//         //获取元素当前的位置
//         var current=element.offsetLeft;
//         //每次移动的像素
//         var step=15;
//         //判断移动的步数应该是正数还是负数
//         step=current<target?step:-step;
//         //当前的位置=之前的当前位置+移动的步数
//         current=current+step;
//         if(Math.abs(target-current)<Math.abs(step)){
//             //把计时器清理
//             clearInterval(element.setId);
//             element.style.left=target+"px";
//         }else{
//             //赋值给要移动的元素
//             element.style.left=current+"px";
//         }
//     },20);
// }
//

</script>
<script>
//获取最外面的div
var box = my$("box");
//获取相框
var screen = box.children[0];
//获取相框的宽度
var imgWidth = screen.offsetWidth;
//获取ul
var ulObj = screen.children[0];
//获取ul中的所有的li
var list = ulObj.children;
//获取ol
var olObj = screen.children[1];
//焦点的div
var arr = my$("arr");

var pic = 0;//全局变量
//创建小按钮----根据ul中的li个数
for (var i = 0; i < list.length; i++) {
    //创建li标签,加入到ol中
    var liObj = document.createElement("li");
    olObj.appendChild(liObj);
    liObj.innerHTML = (i + 1);
    //在每个ol中的li标签上添加一个自定义属性,存储索引值
    liObj.setAttribute("index", i);
    //注册鼠标进入事件
    liObj.onmouseover = function () {
        //先干掉所有的ol中的li的背景颜色
        for (var j = 0; j < olObj.children.length; j++) {
            olObj.children[j].removeAttribute("class");
        }
        //设置当前鼠标进来的li的背景颜色
        this.className = "current";
        //获取鼠标进入的li的当前索引值
        pic = this.getAttribute("index");
        //移动ul
        animate(ulObj, -pic * imgWidth);
    };
}
//设置ol中第一个li有背景颜色
olObj.children[0].className = "current";


//克隆一个ul中第一个li,加入到ul中的最后=====克隆
ulObj.appendChild(ulObj.children[0].cloneNode(true));

//自动播放
var timeId= setInterval(clickHandle,1000);

//鼠标进入到box的div显示左右焦点的div
box.onmouseover = function () {
    arr.style.display = "block";
    //鼠标进入废掉之前的定时器
    clearInterval(timeId);
};
//鼠标离开到box的div隐藏左右焦点的div
box.onmouseout = function () {
    arr.style.display = "none";
    //鼠标离开自动播放
    timeId= setInterval(clickHandle,1000);
};
//右边按钮
my$("right").onclick =clickHandle;
function clickHandle() {
    //如果pic的值是5,恰巧是ul中li的个数-1的值,此时页面显示第六个图片,而用户会认为这是第一个图,
    //所以,如果用户再次点击按钮,用户应该看到第二个图片
    if (pic == list.length - 1) {
        //如何从第6个图,跳转到第一个图
        pic = 0;//先设置pic=0
        ulObj.style.left = 0 + "px";//把ul的位置还原成开始的默认位置
    }
    pic++;//立刻设置pic加1,那么此时用户就会看到第二个图片了
    animate(ulObj, -pic * imgWidth);//pic从0的值加1之后,pic的值是1,然后ul移动出去一个图片
    //如果pic==5说明,此时显示第6个图(内容是第一张图片),第一个小按钮有颜色,
    if (pic == list.length - 1) {
        //第五个按钮颜色干掉
        olObj.children[olObj.children.length - 1].className = "";
        //第一个按钮颜色设置上
        olObj.children[0].className = "current";
    } else {
        //干掉所有的小按钮的背景颜色
        for (var i = 0; i < olObj.children.length; i++) {
            olObj.children[i].removeAttribute("class");
        }
        olObj.children[pic].className = "current";
    }

};
//左边按钮
my$("left").onclick = function () {
    if (pic == 0) {
        pic = 5;
        ulObj.style.left = -pic * imgWidth + "px";
    }
    pic--;
    animate(ulObj, -pic * imgWidth);
    //设置小按钮的颜色---所有的小按钮干掉颜色
    for (var i = 0; i < olObj.children.length; i++) {
        olObj.children[i].removeAttribute("class");
    }
    //当前的pic索引对应的按钮设置颜色
    olObj.children[pic].className = "current";

};

//设置任意的一个元素,移动到指定的目标位置
function animate(element, target) {
    clearInterval(element.timeId);
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
        //获取元素的当前的位置,数字类型
        var current = element.offsetLeft;
        //每次移动的距离
        var step = 10;
        step = current < target ? step : -step;
        //当前移动到位置
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            //清理定时器
            clearInterval(element.timeId);
            //直接到达目标
            element.style.left = target + "px";
        }
    }, 10);
}
</script>


<script>


//  var num=0;
//  function f1(){
//
//    num=1000;
//  }
//  f1();
//  console.log(num);
</script>

