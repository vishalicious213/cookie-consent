const modal = document.getElementById("modal")
const closeBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")

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
    modalText.innerHTML = `
        <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="uploadText">
                Uploading your data to the dark web...
            </p>
        </div>
    `
})