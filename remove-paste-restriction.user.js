// ==UserScript==
// @name         移除禁止粘贴属性
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  移除指定输入框的不允许粘贴属性
// @author       You
// @match        https://brain.hankyu-travel.com/*  // 这里替换为你的目标网站
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 选择目标输入框，可以根据需要调整选择器
    var targetInput = document.querySelector('form input[disabled]');  // 这只是一个例子，你应该替换为精确的选择器

    // 移除不允许粘贴的属性
    if(targetInput) {
        targetInput.removeAttribute('onpaste');
    }

})();
