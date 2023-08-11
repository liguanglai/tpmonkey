// ==UserScript==
// @name         移除禁止粘贴属性
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  移除指定输入框的不允许粘贴属性
// @author       You
// @match        https://target-website.com/*  // 这里替换为你的目标网站
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 根据ID选择目标输入框
    var targetInput = document.getElementById('txt_kosuno_pd0');

    // 移除不允许粘贴的属性
    if(targetInput) {
        targetInput.removeAttribute('onpaste');
    }

})();
