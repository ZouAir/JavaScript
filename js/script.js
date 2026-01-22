//Ceci est un commentaire.
/*Ceci est un autre commentaire*/

/*
document.getElementById("titre").innerText = "Salam";

const h1 = document.getElementById("titre");

document.getElementById("bouton").addEventListener("click", () => {
    if (h1.innerText == "Hello"){
        h1.innerText = "Salam";
    }
    else {
        h1.innerText = "Hello";
    }
}); 

//Viser un élément.
h1.innerText = (h1.innerText=="Hello" ? "Salut" : "Hello");
getElementById("titre")
getElementsByClassname()
getElementsByTagName()
querySelector("#titre")
querySelectorAll("#titre")

document.querySelectorAll(".bouton").forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.innerText = "Youhou!";
    });
});
*/

//Créer une liste :
document.getElementById("btn").addEventListener("click", () => {
    //document.getElementById("list").innerHTML += "<li>lorem</li>";

const li = document.createElement("li");
const text = document.createTextNode("lorem");
//Ajouter un id à un élément déjà existant: 
li.setAttribute("data-id", "toto"); 
//Ajouter un id à un élément déjà existant:
li.classList.add("ma-classe");
li.append(text);  
document.getElementById("list").appendChild(li);
});

const tab = ["Bananes", "Pommes", "Poires"];
let flag = true;
document.getElementById("btn").addEventListener("click", () => {
    const maxi = tab.length;
    if (flag==true) {
        for (let i = 0; i < tab.length; i++){
            // à chaque click
            const li = document.createElement("li");
            const text = document.createTextNode(nom + (cpt<10 ? "0" : "") + cpt + tab[cpt++],);
            li.setAttribute("data-id", "toto");
            li.classList.add("ma-class");
            li.append(text);
            document.getElementById("list").appendChild(li);
        }
        flag = false;
    }
})

// Burger button 
//////////////////////////////////////////////////////////////////////////
document.getElementById("btn2").addEventListener("click", () => {
    if (document.getElementById("list").style.display != "none") {
        document.getElementById("list").style.display = "none";
        document.getElementById("btn2").innerText = "Afficher";
    } else {
        document.getElementById("list").style.display = "block";
        document.getElementById("btn2").innerText = "Masquer";
    }
})

document.getElementById("btn2").addEventListener("click", () => {
    if (document.getElementById("list").classList.toggle("d-none"));
});

// Exemple modal:
//////////////////////////////////////////////////////////////////////////
document.querySelectorAll("button.modal-button-open").forEach((button) => {
    button.addEventListener("click", () => {
        let id = button.getAttribute("aria-controls");
        document.getElementById(id).classList.add("modal-show");
        document.querySelector(".modal-show > div").focus();
    });
});

document.querySelectorAll(".modal-button-close").forEach((button) => {
    button.addEventListener("click", () => {
/*
        button.closest(".modal-wrapper")?.classList.remove("modal-show");
        let id = button.closest(".modal-wrapper").id;
        document.querySelector("button[aria-controls=" + id + "]").focus();
*/
        let wrapper = button.closest(".modal-wrapper");
        wrapper.classList.remove("modal-show");
        document.querySelector("button[aria-controls=" + wrapper.id + "]").focus();
    });
});

// Tabulation cyclique:
///////////////////////
/*
document.querySelector("#modal-test > a.sr-only").addEventListener("focus", () => {
    document.querySelector("#modal-test > div").focus();
});
*/

// Généraliser la tabulation pour toutes les fenêtres modals:
/////////////////////////////////////////////////////////////
document.querySelectorAll(".modal-wrapper > a.sr-only").forEach((a) => {
    a.addEventListener("focus", () => {
        a.closest(".modal-wrapper").querySelector(":scope > div").focus();
    });
});

// Focus:
/////////
