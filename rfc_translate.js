// ==UserScript==
// @name         rfc翻译
// @description  主要用来编辑rfc翻译档
// @namespace    http://qiuhan.ren/tampermonkey/
// @icon         https://tools.ietf.org//images/rfc.png
// @updateURL    https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/rfc_translate.js
// @downloadURL  https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/rfc_translate.js
// @version      0.02
// @author       ...
// @match        https://tools.ietf.org/html/*
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    document.body.append(document.getElementsByClassName('content')[0].cloneNode(true))
    $('.content').css('float','left').css('margin','0 2em').css('width','97ex')
    $('.content:last pre .grey').remove()
    $('.content:last pre:first').css('height','780px')
    $('.content:last .newpage').css('height','840px')
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
                //document.getElementsByClassName('content')[1].outerHTML = x.target.result
                var  a = document.getElementsByClassName('content')[1]
                a.outerHTML = x.target.result
                a = document.getElementsByClassName('content')[1]
                a.style.width = document.getElementsByClassName('content')[0].style.width

                Array.from(a.children).map(x=>{
                    if(x.tagName == 'PRE'){
                        var r = document.createElement('TEXTAREA')
                        r.value = x.innerHTML
                        r.style.height = (parseInt(x.style.height)-8)+'px'
                        r.style.width = '580px'
                        x.parentNode.replaceChild(r,x)
                    }
                })
                a.style = document.getElementsByClassName('content')[0].style.cssText
            }
        }
        reader.readAsText(f)
    })
    $('#save').on('click',function(){
        var a = document.getElementsByClassName('content')[1].cloneNode(true)
        a.style.width = '579px'
        a.style['font-size'] = '10pt'
        a.style.margin = '0 30%'
        Array.from(a.children).map(x=>{
            if(x.tagName == 'TEXTAREA'){
                var r = document.createElement('pre')
                r.innerHTML = x.value
                r.style.height = (parseInt(x.style.height)+8) + 'px'
                r.style['white-space'] = 'pre-wrap'
                a.replaceChild(r,x)
            }
        })
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(a.outerHTML);
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("target", 'tab');
        downloadAnchorNode.setAttribute("download", document.location.pathname.replace('/html/','') + ".html");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    })

    function preToTextarea(){
        $.each($('.content:last pre'),(i,v)=>{
        var s = v.innerText.split("\n\n");
        s = s.map(function(x){
            if(x.includes('. . . . . . . . '))return x
            if(x.includes('------+--------'))return x
            if(x.includes('-+-+-+-+-+-+-+-+'))return x

            if(x[0]==' '){
                x = x.split('\n').map(x=>x.replace(/ /g,'').length>=45 ? x : x+'\n').join('')
                console.log(x)
            }
            return x.trimRight()
        })
        //v.textContent = s.join('\n \n')
        var a = $('<textarea>'+s.join('\n \n').trimRight()+'</textarea>')
        a.css('height',(parseInt(v.style.height)-8).toString() + 'px')
        a.css('width', '580px')
        console.log()
        v.parentNode.replaceChild(a[0],v)
    })
    }
})();
