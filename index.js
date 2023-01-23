const modal = document.getElementById("modal")
const closeBtn = document.getElementById("modal-close-btn")

// make modal appear after 1.5 seconds
setTimeout(function() {
    modal.style.display = "inline"
}, 1500)

closeBtn.addEventListener("click", function() {
    modal.style.display = "none"
})