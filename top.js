
// img
var log_img = document.getElementsByClassName('head_left')[0].children[0]
// 首页
var shouye = document.getElementsByClassName('head_left')[0].children[1]
// 酷玩
var kw = document.getElementsByClassName('head_left')[0].children[2]
// 导购
var dg = document.getElementsByClassName('head_left')[0].children[3]
// 试用
var sy = document.getElementsByClassName('head_left')[0].children[4]
// 报告
var bg = document.getElementsByClassName('head_left')[0].children[5]


// img
log_img.onclick = function () {
    parent.location.href = './index.html'
}
// 首页
shouye.onclick = function () {
    parent.location.href = './index.html'
}
// 酷玩
kw.onclick = function () {
    parent.location.href = './Coldplay/category.html'
}
// 导购
dg.onclick = function () {
    parent.location.href = './shopping/newest.html'
}
// 试用
sy.onclick = function () {
    parent.location.href = './trial/DZtrial.html'
}
// 报告
bg.onclick = function () {
    parent.location.href = './report/newest.html'
}

// 获取注册
var top_zc = document.getElementById('top_zc')

// 注册
top_zc.onclick = function () {
    parent.location.href = './register.html'
}
// 获取 有户名
var top_user = document.getElementById('top_user')

//  记录登录成功的时候
var win = getCookie('win')
//  获取用户名
var user = getCookie('user')

if (win == 'true') {
    top_zc.style.display = 'none'
    top_user.style.display = 'block'
    top_user.innerHTML += user
} else {

}

// function www(that) {
//     that.style.color = 'red'
// }


// for (var i = 0; i < color_a.length; i++) {
//     color_a[i].setAttribute('index', i)
//     color_a[i].onclick = function () {
//         var index = this.getAttribute('index')
//         color_a[i].className = ''
//         color_a[index].className = 'color-a'
//     }
// }