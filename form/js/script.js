const form = document.getElementById("test-form")
const submitButton = form.querySelector("input[type = submit]")

submitButton.addEventListener("click", (event) => {
    let error = false;
    let errors = {};
    //On crée un tableau pour récapiltuler toutes les erreurs.
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
            const text = document.createTextNode("Champ obligatoire");
            //TextNode: On rajoute un noeud qui sera un texte.
            msg.append(text);
            msg.classList.add("error-message");
            input.parentNode.append(msg);
            //TextNode: On rajoute un msg au noeud parent.
        }
    });
    //Vérification de l'email
    const mail = document.getElementById("mail");
    //Pour éviter de reproduire la ligne 4 fois.
    if (mail.value.trim().length > 0) {
        const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // /[a-zA-Z0-9_.\- \+]+@[a-zA-Z0-9.\-]+.[a-zA-Z0-9] {2,}/;
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

//Vérification du mot de passe
//////////////////////////////
//CODE LONG ET DETAILLE
// const pwd = document.getElementById("pwd");
// pwd.addEventListener("keyup", () => { //le "keyup" veut dire quand le user termine de taper sur clavier. 
// let regEx = /.{8,}/;
// if (regEx.test(pwd.value)) { //pour remplacer "input.value.length >=8"
//     document.getElementById("pwd-criteria-length").classList.add("success"); //le nom "succes" est générique afin pouvoir utiliser la classe CSS dans d'autres cas sur le programme.
// } else {
//     document.getElementById("pwd-criteria-length").classList.remove("success");
// }
// regEx = /[#@!?$%&]+/;
// //Le "+" dans la regEx veut dire que je veux ces caractères au moins une fois.
// if (regEx.test(pwd.value)) {
//     document.getElementById("pwd-criteria-special").classList.add("success");
// } else {
//     document.getElementById("pwd-criteria-special").classList.remove("success");
// }
// regEx = /[A-Z]+/;
// //Le "+" dans la regEx veut dire que je veux ces caractères au moins une fois.
// if (regEx.test(pwd.value)) {
//     document.getElementById("pwd-criteria-uppercase").classList.add("success");
// } else {
//     document.getElementById("pwd-criteria-uppercase").classList.remove("success");
// }
// regEx = /[0-9]+/;
// //Le "+" dans la regEx veut dire que je veux ces caractères au moins une fois.
// if (regEx.test(pwd.value)) {
//     document.getElementById("pwd-criteria-numeric").classList.add("success");
// } else {
//     document.getElementById("pwd-criteria-numeric").classList.remove("success");
// }
//////////////////////////////
//CODE COMPACTE
const pwd = document.getElementById("pwd");
const criterias = {
    "length": {
        "regEx": /.{8,}/,
        "label": "8 critères minimum"
    },
    "special": {
        "regEx": /[#@!?$%&]+/,
        "label": "1 critère spécial minimum"
    },
    "uppercase": {
        "regEx": /[A-Z]+/,
        "label": "1 majuscule minimum"
    },
    "numeric": {
        "regEx": /[0-9]+/,
        "label": "1 numérique minimum"
    }
};

const div = document.createElement("div");
const p = document.createElement("p");
const text = document.createTextNode("Merci de respecter les critères suivants");
p.append(text);
div.append(p);
const ul = document.createElement("ul");
//Pour parcourir le tableau pour chaque condition
for (const [id, data] of Object.entries(criterias)) {
    //console.log(criteria);
    //console.log()
    const li = document.createElement("li");
    const text = document.createTextNode(data["label"]) //data.label 
    li.id = "pwd-criteria-" + id;
    li.append(text);
    ul.append(li);
}
div.append(ul);
pwd.parentNode.append(div);
pwd.addEventListener("keyup", () => {
    for (const [id, data] of Object.entries(criterias)) {
        if (data["regEx"].test(pwd.value)) {
            document.getElementById("pwd-criteria-" + id).classList.add("success");
        } else {
            document.getElementById("pwd-criteria-" + id).classList.remove("success");
        }
    }
});