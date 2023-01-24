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
            <p id="upload-text">
                Uploading your data to the dark web...
            </p>
        </div>
    `

    setTimeout(function() {
        document.getElementById('upload-text').textContent = `Making the sale...`
    }, 1500)

    setTimeout(function() {
        document.getElementById('modal-inner').innerHTML =    `
            <h2>Thanks you sucker!</h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif">
            </div>
        `
    }, 3000)
})