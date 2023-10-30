// ==UserScript==
// @name         Facebook Usage Reminder
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hiển thị thông báo sau 5 phút sử dụng trang Facebook.
// @author       NhatMinh
// @match        *://www.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Định nghĩa thời gian chờ trước khi hiển thị popup (5 phút)
    const countdownTimeInMinutes = 10;

    // Lấy thời gian bắt đầu khi bạn vào trang Facebook
    const startTime = Date.now();

    // Tạo một đối tượng đồng hồ đếm ngược
    let countdownInterval;

    function startCountdown() {
        countdownInterval = setInterval(function() {
            const currentTime = Date.now();
            const elapsedTimeInMinutes = (currentTime - startTime) / (1000 * 60);

            const remainingTimeInMinutes = countdownTimeInMinutes - elapsedTimeInMinutes;

            if (remainingTimeInMinutes <= 0) {
                clearInterval(countdownInterval); // Dừng đồng hồ đếm ngược
                // Hiển thị popup
                alert('Đã lướt quá nhiều rồi!');
            }
        }, 1000); // Cập nhật đồng hồ mỗi giây
    }

    // Bắt đầu đồng hồ đếm ngược khi trang Facebook được mở
    startCountdown();
})();
