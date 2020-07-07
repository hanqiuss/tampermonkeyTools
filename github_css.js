// ==UserScript==
// @name         github css
// @namespace    http://tampermonkey.net/
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/github_css
// @downloadURL  https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/github_css
// @description  try to take over the world!
// @author       You
// @match        https://github.com/*/*
// @grant        none
// ==/UserScript==

(function() {
let list1 = document.getElementsByClassName('container-xl clearfix new-discussion-timeline')
let list2 = document.getElementsByClassName('pagehead repohead readability-menu')
if(list1.length && list2.length){
  let src = list1[0]
  let dst = list2[0]
  let width = getComputedStyle(src)['max-width']
  dst.style['max-width'] = width
  dst.style['margin-inline']='auto'
}
})();
