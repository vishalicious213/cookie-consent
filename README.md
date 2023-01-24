# Cookie Consent

This was a Scrimba Project. It made use of JavaScript and CSS to create a modal/pop-up that stays in position in the visitor's screen and can't be dismissed until the visitor has entered his or her name and password and submitted it.

Key JavaScript features used were:

- setTimeout() to time when the modal pops-up, and to cause other information to be displayed in sequence after user input was taken
- element.style to cause the modal to appear and cause it to exit once its work is complete
- FormData & FormData.get() to retrieve information from form fields and use them dynamically in other parts of the application
- element.classList.toggle to apply and remove classes from HTML elements, for various onscreen applications

Key HTML & CSS features included:

- flex-direction: row-reverse, to keep the `Decline` button safely out of reach
- 'disabled' attribute, to nullify the ability to close the modal until its nefarious purpose is served

## JavaScript concepts

- variables
- functions
- setTimeout()
- document.getElementById()
- element.style.display
- element.innerHTML
- element.textContent
- element.disabled
- element.classList.toggle()
- addEventListener()
    - "click"
    - "submit"
    - "mouseenter"
- event.preventDefault()
- FormData()
    - FormData.get()
- string / template literals

## HTML concepts

- \<main>
- \<section>
- \<button>
    - disabled
    - type="submit"
    - type="button"
- classes
- ID's
- forms
    - \<input>
        - aria-labels
        - required

Deployed at: https://vish213-cookie-popup.netlify.app/