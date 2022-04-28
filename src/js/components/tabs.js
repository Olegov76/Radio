document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs-btn').forEach(function(tabBtn) {
        tabBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.content-none').forEach(function(tabsContent) {
                tabsContent.classList.remove('content-activ')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('content-activ')
        })
    })
})
