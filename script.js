//===========================================================================================//
//                     NOUVEAU CODE                                                          //
//===========================================================================================//



// PARTIE DU CODE QUI GERE  L'OUVERTURE ET LA FERMETURE DU MENU BURGER //

document.getElementById("nav-ul").classList.add("nav-ul-hide");
document.getElementById("burger-button-display").addEventListener("click", () => {
    if (!document.getElementById("nav").classList.toggle("nav-hide")) {
        document.querySelector("#nav-ul > li:first-child a").focus();
    }
});

// PARTIE DU CODE QUI GERE L'OUVERTURE D'UNE FENETRE MODAL //

document.getElementById("modal-button-open").addEventListener("click",() => {
    document.getElementById("modal-test").classList.add("modal-show");
    document.querySelector("#modal-test>div").focus();
});

// PARTIE DU CODE QUI GERE LA FERMETURE D'UNE FENETRE MODAL //

document.querySelectorAll(".modal-button-close").forEach((button) => {
    button.addEventListener("click",()=>{
        button.closest(".modal-wrapper")?.classList.remove("modal-wrapper-slow");
    });
});

// PARTIE DU CODE QUI GERE L'OUVERTURE DE TOUTES LES FENETRES MODAL //

document.querySelectorAll("button.modal-button-open").forEach((button) => {
    button.addEventListener("click",() => {
        let id = button.getAttribute("aria-controls");
        document.getElementById(id).classList.add("modal-show");
        document.querySelector(".modal-show > div").focus();
    });
});

// PARTIE DU CODE QUI GERE LA FERMETURE DE TOUTES LES FENETRES MODAL //

document.querySelectorAll(".modal-button-close").forEach((button) => {
    button.addEventListener("click",()=>{
        let wrapper = button.closest(".modal-wrapper");
        wrapper.classList.remove("modal-show");
        document.querySelector("button[aria-controls="+wrapper.id+"]").focus();
    });
});

// PARTIE DU CODE QUI GERE LE FOCUS TRAP SUR UN MODAL PRECIS //

document.querySelector("#modal-test > q.sr-only").addEventListener("focus", () => {
    document.querySelector("#modal-test > div").focus();
});

// PARTIE DU CODE QUI GERE LE FOCUS TRAP SUR TOUTES LES MODAL //

document.querySelectorAll(".modal-wrapper > q.sr-only").forEach((a) => {
    a.addEventListener("focus",()=>{
        a.closest(".modal-wrapper").querySelector(":scope > div").focus();
    });
});

// PARTIE DU CODE QUI GERE LA FERMETURE DU MODAL AVEC LA TOUCHE ECHAP + RETOUR DU FOCUS SUR LE BOUTON D'OUVERTURE //

document.querySelectorAll(".modal-wrapper").forEach((wrapper) => {
    wrapper.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            wrapper.classList.remove("modal-show");
            document.querySelector("button[aria-controls=" + wrapper.id + "]").focus();
        }
    });
});

// PARTIE DU CODE QUI SERT A EMPECHER L'ENVOI DU FORMULAIRE SI DES CHAMPS OBLIGATOIRES SONT VIDES //
// ET A AFFICHER DES MESSAGES D'ERREUR DYNAMIQUES //

document.querySelector("#form input[type=submit]").addEventListener("click",(event)=>{
    document.querySelectorAll("#form div.error").forEach((div)=>{
        div.classList.remove("error");
        div.querySelector(".error-message").remove();
    });
    let submit=true;
    document.querySelectorAll("#form [required]").forEach((input)=>{
        if(input.value.trim().length==0){
            submit=false;
            input.closest("div").classList.add("error");
            let div=document.createElement("div");
            div.innerText="champ obligatoire";
            div.classList.add("error-message");
            input.closest("div").append(div);
        }
    });
    if(!submit){
        event.preventDefault();
        console.log("oups!");
    }
});

// Il y a une chronologie dans les étapes : en HTML5, le navigateur va d'abord vérifier les champs et le submit. //
// Cela permet de gérer nous même les erreurs. //

// ========= 2E FACON DE FAIRE =========
//document.querySelector("#form").addEventListener("submit",(event)=>{
    //console.log("submit");
    //event.preventDefault();
//});