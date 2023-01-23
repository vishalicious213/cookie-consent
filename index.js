const modal = document.getElementById("modal")
const closeBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")

// make modal appear after 1.5 seconds
setTimeout(function() {
    modal.style.display = "inline"
}, 1500)

// make modal disappear after "X" is clicked
closeBtn.addEventListener("click", function() {
    modal.style.display = "none"
})

// prevent default submit/refresh behavior on form
consentForm.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log("Form submitted")
})