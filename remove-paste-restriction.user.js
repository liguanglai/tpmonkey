// ==UserScript==
// @name         移除禁止粘贴属性
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  在页面加载完成后移除指定输入框的不允许粘贴属性
// @author       You
// @match        https://brain.hankyu-travel.com/*  // 这里替换为你的目标网站
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removePasteRestriction() {
        for (let i = 0; i < 100; i++) { // 尝试获取前100个输入框，可以根据需要调整
            let id = 'txt_kosuno_pd' + i;
            let targetInput = document.getElementById(id);

            if (targetInput) {
                targetInput.removeAttribute('onpaste');
            } else {
                // 如果某个id不存在，可以选择退出循环，因为可能后面的id都不存在
                break;
            }
        }
    }

    // 使用 'window.onload' 事件确保所有页面资源加载完成后再执行
    window.onload = function() {
        // 设置延时10秒后执行移除操作
        setTimeout(removePasteRestriction, 10000);  // 10000毫秒等于10秒
    };

})();
