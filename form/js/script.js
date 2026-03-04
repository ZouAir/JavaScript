const form = document.getElementById("test-form")
const submitButton = form.querySelector("input[type = submit]")

submitButton.addEventListener("click", (event) => {
    let error = false;
    let errors = {}; //On crée un tableau pour récapiltuler toutes les erreurs. 
    //les tableaux en JS sont des objets et sont donc entre {} contrairement à [] en PHP.

    form.querySelectorAll(".form-group.error").forEach((elt) => {
        elt.classList.remove("error");
        elt.querySelector(".error-message").remove();
    });

    form.querySelectorAll("input[required],select [required], textarea[required]").forEach((input) => {

        if (input.value.trim().length == 0) {
            error = true;
            input.closest(".form-group").classList.add("error");
            const msg = document.createElement("div");
            const text = document.createTextNode("Champ obligatoire");//TextNode: On rajoute un noeud qui sera un texte.
            msg.append(text);
            msg.classList.add("error-message");
            input.parentNode.append(msg);//TextNode: On rajoute au noeud parent un msg.
        }
    });

    const mail = document.getElementById("mail"); //Pour éviter de reproduire le code 4 fois.
    if (mail.value.trim().length > 0) {
        const regEx = /[a-zA-Z0-9_.\- \+]+@[a-zA-Z0-9.\-]+.[a-zA-Z0-9] {2,}/;
        if (!regEx.test(mail.value)) {
            error = true;
            mail.closest(".form-group").classList.add("error");
            const msg = document.createElement("div");
            const text = document.createTextNode("Adresse mail invalide");
            msg.append(text);
            msg.classList.add("error-message");
            mail.parentNode.append(msg);
        }
    }

    if (error) {
        event.preventDefault();
        console.log("erreur détectée");
    }
});