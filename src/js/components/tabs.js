document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".tabs-btn").forEach(function (tabBtn) {
        tabBtn.addEventListener("click", function (event) {
            const path = event.currentTarget.dataset.path;
            document
                .querySelectorAll(".content-none")
                .forEach(function (tabsContent) {
                    tabsContent.classList.remove("content-activ");
                });
            document
                .querySelector(`[data-target="${path}"]`)
                .classList.add("content-activ");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".tabs-btn2").forEach(function (tabBtn) {
        tabBtn.addEventListener("click", function (event) {
            const path = event.currentTarget.dataset.path;
            document
                .querySelectorAll(".content-none2")
                .forEach(function (tabsContent) {
                    tabsContent.classList.remove("content-activ2");
                });
            document
                .querySelector(`[data-target="${path}"]`)
                .classList.add("content-activ2");
        });
    });
});
// let tabBtn = document.querySelectorAll(".tabs-btn2");
// console.log(tabBtn);
// tabBtn.forEach(function (btn) {
//     btn.classList.remove("playlists__tabs-btn--activ");
// });
// e.currentTarget.classList.edd("playlists__tabs-btn--activ");
