window.onload = function (){
    var data = document.getElementById('data');
    var ul = document.getElementsByTagName('ul')[0];
    var btn = document.getElementsByClassName('btn');
    btn[0].onclick = function(){
        if(data.value.length <= 0){
            alert("输入为空");
            return false;
        }
        var li = document.createElement('li');
        li.innerHTML = data.value;
        ul.insertBefore(li, ul.firstChild);
        data.value = null;
    };
    btn[1].onclick = function(){
        if(data.value.length <= 0){
            alert("输入为空");
            return false;
        }
        var li = document.createElement('li');
        li.innerHTML = data.value;
        ul.appendChild(li);
        data.value = null;
    };
    btn[2].onclick = function(){
        if(ul.hasChildNodes()) {
            ul.removeChild(ul.firstChild);
        }
        else {
            alert('队列为空');
            return false;
        }
    };
    btn[3].onclick = function(){
        if(ul.hasChildNodes()) {
            ul.removeChild(ul.lastChild);
        }
        else {
            alert('队列为空');
            return false;
        }
    };
    ul.onmouseover = function(){
        var li = ul.getElementsByTagName('li');
        for (var i = 0;i<li.length;i++) {
            li[i].index = i;
            li[i].onclick = function () {
                ul.removeChild(ul.childNodes[this.index]);
            }
        }
    }
};/**
 * Created by fengjiale on 2017/2/28.
 */
