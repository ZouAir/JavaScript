<<<<<<< HEAD
document.querySelector("#form input[type=submit]").addEventListener("click", (event) => {
    document.querySelectorAll("#form div.error").forEach((div) => {
        div.classList.remove("error");
        div.querySelector(".error-message").remove();
    });
    let submit = true;
    document.querySelectorAll("#form input[required], #form select[required], #form textarea[required]").forEach((input) => {
    //document.querySelectorAll("#form [required]") : façon plus synthétique
        if (input.value.trim().length == 0) {
            submit = false;
            input.closest("div").classList.add("error");
            let div = document.createElement("div");
            div.innerText = "Champs obligatoire";
            div.classList.add("error-message");
            input.closest("div").append(div);
            errors[] = "champs obligatoire";
        }
    });
    
    if (!submit) {
        event.preventDefault();
        console.log("Oups!");
    }
});
=======
document.querySelector("#form input[type=submit]").addEventListener("click", () => {
    
});
>>>>>>> 0ad8da9 (feat(docs) : add js curses)
