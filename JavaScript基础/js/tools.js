// 显示和隐藏
function show(ele) {
    ele.style.disply = "block";
}

function hide(ele) {
    ele.style.disply = "none"
}

function scroll() {
    //开始封装自己的 scrollTop
    if (window.pageXOffset != null) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    } else if (document.compatMode) {

    }

}