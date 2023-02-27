// ==UserScript==
// @name         rfc翻译
// @description  主要用来编辑rfc翻译档
// @namespace    http://qiuhan.ren/tampermonkey/
// @icon         https://www.rfc-editor.org/wp-content/uploads/favicon-1.ico
// @updateURL    https://ghproxy.com/https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/rfc_translate.js
// @downloadURL  https://ghproxy.com/https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/rfc_translate.js
// @version      0.05
// @author       ...
// @match        https://tools.ietf.org/html/*
// @match        https://www.rfc-editor.org/rfc/*
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    var d1 = document.createElement('div')
    d1.className = 'content'

    d1.innerHTML = document.body.innerHTML
    var d2 = d1.cloneNode(true)
    document.body.innerHTML = ''
    document.body.append(d1)
    document.body.append(d2)
    var style = document.createElement('style')
    style.textContent = `textarea {font-size:14px;font-family:宋体;margin:0}`;
    style.setAttribute('type','text/css')
    document.head.append(style)

    $('.content').css('float','left').css('margin','0 2em').css('width','97ex')
    $('.content:last pre .grey').text(' ')
    //$('.content:last pre:first').css('height','780px')
    //$('.content:last .newpage').css('height','840px')
    $('.content:last pre').css('white-space','pre-wrap')
    preToTextarea()

    document.body.append($(`<div style="position: fixed;left: 220ex;top: 10px;">
<input type="file" id="fileElem" multiple accept="*/*" style="display:none">
<button id="load" onclick="document.getElementById('fileElem').click()">本地加载</button>
<button id="load2" style="margin-left: 5px;">线上加载</button>
<button id="save" style="margin-left: 5px;">保存</button>
</div>`)[0])
    $('#fileElem').on('change',function(e){
        var f = e.target.files[0]
        var reader = new FileReader();
        reader.onload = x=>{
            if(x.target.result){
                loadString(x.target.result)
            }
        }
        reader.readAsText(f)
    })
    $('#load2').on('click',function(){
        $.ajax('https://ghproxy.com/https://raw.githubusercontent.com/hanqiuss/rfc-translate/master' + window.location.pathname,
               {
            success:function(ret){
                loadString(ret)
            }})
    })
    $('#save').on('click',function(){
        var a = document.getElementsByClassName('content')[1].cloneNode(true)
        a.style.width = '579px'
        a.style['font-size'] = '14px'
        a.style.margin = '0 30%'
        Array.from(a.children).map(x=>{
            if(x.tagName == 'TEXTAREA'){
                var r = document.createElement('pre')
                r.innerHTML = x.value
                r.style.height = (Number(x.style.height.slice(0,-2))+8) + 'px'
                r.style['white-space'] = 'pre-wrap'
                r.style['font-size'] = '14px'
                r.style['font-family'] = "宋体"
                //console.log(r.style)
                a.replaceChild(r,x)
            }
        })

        var dataStr = "data:text/html;charset=utf-8," + encodeURIComponent(a.outerHTML);
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("target", 'tab');
        downloadAnchorNode.setAttribute("download", document.location.pathname.replace(/(\/html\/)|(\/rfc\/)|(\.html)|(\.txt)/g,'') + ".html");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    })
    function loadString(s){
        var  a = document.getElementsByClassName('content')[1]
        a.outerHTML = s
        a = document.getElementsByClassName('content')[1]
        a.style.width = document.getElementsByClassName('content')[0].style.width

        Array.from(a.children).map(x=>{
            if(x.tagName == 'PRE'){
                var r = document.createElement('TEXTAREA')
                r.value = x.innerHTML
                r.style.height = (Number(x.style.height.slice(0,-2))-8)+'px'
                r.style.width = '567px'
                x.parentNode.replaceChild(r,x)
            }
        })
        a.style = document.getElementsByClassName('content')[0].style.cssText
    }
    function preToTextarea(){
        $.each($('.content:last pre'),(i,v)=>{
        var s = v.innerText.split("\n\n");
        s = s.map(function(x){
            if(x.includes('. . . . . . . . '))return x
            if(x.includes('------+--------'))return x
            if(x.includes('-+-+-+-+-+-+-+-+'))return x

            if(x[0]==' '){
                x = x.split('\n').map(x=>x.replace(/ /g,'').length>=45 ? x : x+'\n').join('')
                //console.log(x)
            }
            return x.trimRight()
        })
        //v.textContent = s.join('\n \n')
        var a = $('<textarea>'+s.join('\n \n').trimRight()+'</textarea>')
        a.css('height',(v.getBoundingClientRect().height - 8 ).toString() + 'px')
        a.css('width', '567px')
        //console.log(v.offsetHeight)
        v.parentNode.replaceChild(a[0],v)
    })
    }
})();
