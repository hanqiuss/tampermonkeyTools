// ==UserScript==
// @name         github css
// @namespace    http://tampermonkey.net/
// @version      0.2
// @updateURL    https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/github_css.js
// @downloadURL  https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/github_css.js
// @description  try to take over the world!
// @author       You
// @run-at       document-idle
// @match        https://github.com/*/*
// @grant        none
// ==/UserScript==

(function() {
    function run(){
        let el = document.getElementsByTagName('main')
        if(!el.length){
            console.log('can\'t find main tag')
            return
        }
        let main = el[0]
        let src = main.children[1]
        let dst = main.children[0]
        let width = getComputedStyle(src)['max-width']
        dst.style['max-width'] = width
        dst.style['margin-inline']='auto'
    }
    setInterval(run,200);
})();
