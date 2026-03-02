const form = document.getElementById("test-form")
const submitButton = form.querySelector("input[type = submit]")

submitButton.addEventListener("click", (event) => {
    let error = false;
    form.querySelectorAll("input[required],select [required], textarea[required]").forEach((input) => {
        if (input.value.trim().length == "") {
            error = true;
        }
    });

    if (error) {
        event.preventDefault();
        console.log("erreur détectée");
    }
});