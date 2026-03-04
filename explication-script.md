# 📘 Explication complète du script.js

## 🎯 Notions de base JavaScript

Avant de plonger dans le code, voici quelques concepts essentiels pour comprendre JavaScript :

### 1. **Le DOM (Document Object Model)**

Le DOM est la représentation en arborescence de ta page HTML. JavaScript peut interagir avec cette structure pour :

- Selectionner des éléments (document.getElementById() , `document.querySelector()`)
- Modifier des éléments (ajouter/supprimer des classes, changer le contenu)
- Écouter des événements (clics, touches du clavier, etc.)

**Exemple simple :**

```
javascript
// Sélectionne un élément avec l'ID "mon-bouton"
let bouton = document.getElementById("mon-bouton");

// Ajoute une classe CSS à cet élément
bouton.classList.add("actif");
```

### 2. **Les événements (Event Listeners)**

Un événement est une action de l'utilisateur (clic, survol, saisie clavier...). On "écoute" ces événements pour exécuter du code en réponse.

**Syntaxe :**

```javascript
element.addEventListener("click", () => {
    // Code à exécuter quand on clique
});
```

**Types d'événements courants :**

- `click` : Clic de souris
- `keydown` : Touche du clavier enfoncée
- `focus` : Élément reçoit le focus (sélectionné)
- `submit` : Envoi d'un formulaire

### 3. **Les fonctions fléchées (Arrow Functions)**

C'est une syntaxe moderne pour écrire des fonctions en JavaScript.

**Syntaxe classique :**

```javascript
function maFonction() {
    console.log(maFonction("Bonjour"));
}
```

**Syntaxe fléchée :**

```javascript
() => {
    console.log("Bonjour");
}
```

Les fonctions fléchées sont souvent utilisées dans les `addEventListener` pour rendre le code plus compact.

### 4. **querySelector vs querySelectorAll**

- `querySelector()` : Sélectionne **UN SEUL** élément (le premier trouvé)
- `querySelectorAll()` : Sélectionne **TOUS** les éléments correspondants (retourne une liste)

**Exemple :**

```javascript
// Sélectionne le premier bouton
let premierBouton = document.querySelector("button");

// Sélectionne TOUS les boutons
let tousBoutons = document.querySelectorAll("button");
```

### 5. **forEach - Parcourir une liste**

La méthode `forEach()` permet d'exécuter du code pour chaque élément d'une liste.

**Syntaxe :**

```javascript
mesElements.forEach((element) => {
    // Code exécuté pour chaque élément
});
```

### 6. **classList - Manipuler les classes CSS**

L'objet `classList` permet d'ajouter, supprimer ou basculer des classes CSS sur un élément.

**Méthodes principales :**

- `.add("classe")` : Ajoute une classe
- `.remove("classe")` : Supprime une classe
- `.toggle("classe")` : Ajoute si absente, supprime si présente
- `.contains("classe")` : Vérifie si la classe existe

---

## 📦 Vue d'ensemble des blocs de code

Le script est divisé en **7 blocs fonctionnels** :

### Bloc 1 : **Initialisation du menu burger** (lignes 9-14)

**Objectif :** Cache le menu au chargement et gère l'ouverture/fermeture du menu mobile.

### Bloc 2 : **Ouverture d'UNE modal spécifique** (lignes 18-21)

**Objectif :** Ouvre uniquement la modal avec l'ID `modal-test` (code obsolète, car remplacé par le bloc 4).

### Bloc 3 : **Fermeture de modal (version 1)** (lignes 25-29)

**Objectif :** Tente de fermer les modals en retirant la classe `modal-wrapper-slow` (code bugué, car cette classe n'existe pas).

### Bloc 4 : **Ouverture de TOUTES les modals** (lignes 33-38)

**Objectif :** Gère l'ouverture de n'importe quelle modal en récupérant son ID depuis l'attribut `aria-controls`.

### Bloc 5 : **Fermeture de TOUTES les modals** (lignes 43-48)

**Objectif :** Ferme n'importe quelle modal et replace le focus sur le bouton qui l'a ouverte.

### Bloc 6 : **Focus trap sur UNE modal spécifique** (lignes 52-55)

**Objectif :** Empêche le focus de sortir de la modal `modal-test` (code obsolète, car remplacé par le bloc 7).

### Bloc 7 : **Focus trap sur TOUTES les modals** (lignes 59-63)

**Objectif :** Empêche le focus de sortir de n'importe quelle modal ouverte.

### Bloc 8 : **Fermeture des modals avec Échap** (lignes 67-73)

**Objectif :** Ferme la modal quand l'utilisateur appuie sur la touche Échap.

### Bloc 9 : **Validation de formulaire** (lignes 79-98)

**Objectif :** Empêche l'envoi d'un formulaire si des champs obligatoires sont vides et affiche des messages d'erreur.

---

## 🔍 Explication ligne par ligne

### **Bloc 1 : Initialisation et gestion du menu burger**

```javascript
document.getElementById("nav-ul").classList.add("nav-ul-hide");
```

**Ligne 9 :** Sélectionne l'élément avec l'ID `nav-ul` (la liste `<ul>` du menu) et ajoute la classe CSS `nav-ul-hide` pour le cacher au chargement de la page.

---

```javascript
document.getElementById("burger-button-display").addEventListener("click", () => {
```

**Ligne 10 :** Sélectionne le bouton burger (ID `burger-button-display`) et ajoute un écouteur d'événement qui se déclenche au clic. La fonction fléchée `() => { ... }` contient le code à exécuter.

---

```javascript
    if (!document.getElementById("nav").classList.toggle("nav-hide")) {
```

**Ligne 11 :**

- `document.getElementById("nav")` : Sélectionne l'élément `<nav>`
- `.classList.toggle("nav-hide")` : Ajoute ou retire la classe `nav-hide`
- `toggle()` retourne `true` si la classe a été ajoutée, `false` si elle a été retirée
- `!` inverse le résultat : donc `if (!...)` signifie "si la classe a été RETIRÉE"

**Logique :** Si on retire `nav-hide` (= le menu s'ouvre), alors on exécute le code suivant.

---

```javascript
        document.querySelector("#nav-ul > li:first-child a").focus();
```

**Ligne 12 :**

- `#nav-ul > li:first-child a` : Sélecteur CSS qui cible le premier lien (`<a>`) du premier élément `<li>` dans `#nav-ul`
- `.focus()` : Place le focus clavier sur cet élément (utile pour l'accessibilité)

**Logique :** Quand le menu s'ouvre, le focus se place automatiquement sur le premier lien.

---

### **Bloc 2 : Ouverture d'UNE modal spécifique (obsolète)**

```javascript
document.getElementById("modal-button-open").addEventListener("click",() => {
```

**Ligne 18 :** Ajoute un écouteur de clic sur un bouton avec l'ID `modal-button-open`.

---

```javascript
    document.getElementById("modal-test").classList.add("modal-show");
```

**Ligne 19 :** Sélectionne la modal avec l'ID `modal-test` et ajoute la classe `modal-show` pour l'afficher.

---

```javascript
    document.querySelector("#modal-test>div").focus();
```

**Ligne 20 :** Place le focus sur le premier `<div>` enfant direct de `#modal-test`.

**⚠️ Problème :** Ce code ne fonctionne que pour UNE modal spécifique (`modal-test`). Il est remplacé par le Bloc 4 qui gère TOUTES les modals.

---

### **Bloc 3 : Fermeture de modal (version buguée)**

```javascript
document.querySelectorAll(".modal-button-close").forEach((button) => {
```

**Ligne 25 :** Sélectionne TOUS les boutons avec la classe `modal-button-close` et parcourt chacun d'eux.

---

```javascript
    button.addEventListener("click",()=>{
```

**Ligne 26 :** Pour chaque bouton, ajoute un écouteur de clic.

---

```javascript
        button.closest(".modal-wrapper")?.classList.remove("modal-wrapper-slow");
```

**Ligne 27 :**

- `.closest(".modal-wrapper")` : Remonte dans le DOM pour trouver l'ancêtre le plus proche avec la classe `modal-wrapper`
- `?.` : Opérateur de chaînage optionnel (évite une erreur si l'élément n'existe pas)
- `.classList.remove("modal-wrapper-slow")` : Retire la classe `modal-wrapper-slow`

**⚠️ Problème :** La classe `modal-wrapper-slow` n'existe pas dans ton CSS ! Ce code ne fait donc rien. Il est remplacé par le Bloc 5.

---

### **Bloc 4 : Ouverture de TOUTES les modals (code correct)**

```javascript
document.querySelectorAll("button.modal-button-open").forEach((button) => {
```

**Ligne 33 :** Sélectionne TOUS les boutons avec la classe `modal-button-open` et parcourt chacun d'eux.

---

```javascript
    button.addEventListener("click",() => {
```

**Ligne 34 :** Pour chaque bouton, ajoute un écouteur de clic.

---

```javascript
        let id = button.getAttribute("aria-controls");
```

**Ligne 35 :** Récupère la valeur de l'attribut `aria-controls` du bouton cliqué et la stocke dans la variable `id`.

**Exemple HTML :**

```html
<button class="modal-button-open" aria-controls="modal-heroisme">Ouvrir</button>
```

Ici, `id` contiendra la chaîne `"modal-heroisme"`.

---

```javascript
        document.getElementById(id).classList.add("modal-show");
```

**Ligne 36 :** Sélectionne l'élément avec l'ID récupéré (par exemple `modal-heroisme`) et ajoute la classe `modal-show` pour l'afficher.

---

```javascript
        document.querySelector(".modal-show > div").focus();
```

**Ligne 37 :** Place le focus sur le premier `<div>` enfant de l'élément avec la classe `modal-show`.

**⚠️ Petit problème :** Si plusieurs modals ont la classe `modal-show`, ce code sélectionnera toujours le premier. Une meilleure approche serait :

```javascript
document.querySelector("#" + id + " > div").focus();
```

---

### **Bloc 5 : Fermeture de TOUTES les modals (code correct)**

```javascript
document.querySelectorAll(".modal-button-close").forEach((button) => {
```

**Ligne 43 :** Sélectionne TOUS les boutons de fermeture (classe `modal-button-close`) et parcourt chacun d'eux.

---

```javascript
    button.addEventListener("click",()=>{
```

**Ligne 44 :** Pour chaque bouton, ajoute un écouteur de clic.

---

```javascript
        let wrapper = button.closest(".modal-wrapper");
```

**Ligne 45 :** Trouve l'ancêtre le plus proche avec la classe `modal-wrapper` (c'est la modal entière) et le stocke dans la variable `wrapper`.

---

```javascript
        wrapper.classList.remove("modal-show");
```

**Ligne 46 :** Retire la classe `modal-show` de la modal pour la masquer.

---

```javascript
        document.querySelector("button[aria-controls="+wrapper.id+"]").focus();
```

**Ligne 47 :**

- `"button[aria-controls=" + wrapper.id + "]"` : Construit un sélecteur CSS dynamique pour trouver le bouton qui a ouvert cette modal
- `.focus()` : Replace le focus sur ce bouton

**Exemple :** Si la modal fermée a l'ID `modal-heroisme`, ce code cherche un bouton avec `aria-controls="modal-heroisme"` et y replace le focus.

**Utilité :** Améliore l'accessibilité en ramenant l'utilisateur au contexte d'où il venait.

---

### **Bloc 6 : Focus trap sur UNE modal spécifique (obsolète)**

```javascript
document.querySelector("#modal-test > q.sr-only").addEventListener("focus", () => {
```

**Ligne 52 :** Sélectionne l'élément `<q>` avec la classe `sr-only` qui est enfant direct de `#modal-test`, et ajoute un écouteur d'événement `focus`.

---

```javascript
    document.querySelector("#modal-test > div").focus();
```

**Ligne 53 :** Quand l'élément `<q>` reçoit le focus, replace le focus sur le `<div>` principal de la modal.

**Logique du "focus trap" :**

- L'élément `<q class="sr-only">` est placé à la fin de la modal
- Quand l'utilisateur atteint cet élément (en appuyant sur Tab), le focus revient au début de la modal
- Cela empêche le focus de sortir de la modal

**⚠️ Problème :** Ce code ne fonctionne que pour `modal-test`. Il est remplacé par le Bloc 7.

---

### **Bloc 7 : Focus trap sur TOUTES les modals (code correct)**

```javascript
document.querySelectorAll(".modal-wrapper > q.sr-only").forEach((a) => {
```

**Ligne 59 :** Sélectionne TOUS les éléments `<q class="sr-only">` qui sont enfants directs d'un `.modal-wrapper`, et parcourt chacun d'eux.

---

```javascript
    a.addEventListener("focus",()=>{
```

**Ligne 60 :** Pour chaque élément `<q>`, ajoute un écouteur d'événement `focus`.

---

```javascript
        a.closest(".modal-wrapper").querySelector(":scope > div").focus();
```

**Ligne 61 :**

- `a.closest(".modal-wrapper")` : Remonte jusqu'à la modal parente
- `.querySelector(":scope > div")` : Sélectionne le `<div>` enfant direct (`:scope` signifie "à partir de cet élément")
- `.focus()` : Replace le focus sur ce `<div>`

**Logique :** Même principe que le Bloc 6, mais fonctionne pour TOUTES les modals.

---

### **Bloc 8 : Fermeture des modals avec la touche Échap**

```javascript
document.querySelectorAll(".modal-wrapper").forEach((wrapper) => {
```

**Ligne 67 :** Sélectionne TOUTES les modals (classe `modal-wrapper`) et parcourt chacune d'elles.

---

```javascript
    wrapper.addEventListener("keydown", (event) => {
```

**Ligne 68 :** Pour chaque modal, ajoute un écouteur d'événement `keydown` (touche du clavier enfoncée). Le paramètre `event` contient les informations sur la touche pressée.

---

```javascript
        if (event.key === "Escape") {
```

**Ligne 69 :** Vérifie si la touche pressée est "Escape" (la touche Échap).

---

```javascript
            wrapper.classList.remove("modal-show");
```

**Ligne 70 :** Retire la classe `modal-show` pour masquer la modal.

---

```javascript
            document.querySelector("button[aria-controls=" + wrapper.id + "]").focus();
```

**Ligne 71 :** Replace le focus sur le bouton qui a ouvert cette modal (même logique que la ligne 47).

---

### **Bloc 9 : Validation de formulaire**

```javascript
document.querySelector("#form input[type=submit]").addEventListener("click",(event)=>{
```

**Ligne 79 :** Sélectionne le bouton de soumission (input de type `submit`) dans un formulaire avec l'ID `form`, et ajoute un écouteur de clic.

---

```javascript
    document.querySelectorAll("#form div.error").forEach((div)=>{
```

**Ligne 80 :** Sélectionne tous les `<div>` avec la classe `error` dans le formulaire et parcourt chacun d'eux.

---

```javascript
        div.classList.remove("error");
```

**Ligne 81 :** Retire la classe `error` de chaque div (réinitialisation des erreurs).

---

```javascript
        div.querySelector(".error-message").remove();
```

**Ligne 82 :** Supprime l'élément avec la classe `error-message` (le message d'erreur affiché précédemment).

---

```javascript
    let submit=true;
```

**Ligne 84 :** Crée une variable `submit` initialisée à `true`. Elle indique si le formulaire peut être soumis.

---

```javascript
    document.querySelectorAll("#form [required]").forEach((input)=>{
```

**Ligne 85 :** Sélectionne tous les champs avec l'attribut `required` (champs obligatoires) dans le formulaire et parcourt chacun d'eux.

---

```javascript
        if(input.value.trim().length==0){
```

**Ligne 86 :**

- `input.value` : Récupère la valeur du champ
- `.trim()` : Supprime les espaces au début et à la fin
- `.length == 0` : Vérifie si la chaîne est vide

**Logique :** Si le champ est vide (ou ne contient que des espaces), alors...

---

```javascript
            submit=false;
```

**Ligne 87 :** Met `submit` à `false` (le formulaire ne pourra pas être envoyé).

---

```javascript
            input.closest("div").classList.add("error");
```

**Ligne 88 :** Remonte jusqu'au `<div>` parent du champ et ajoute la classe `error` (pour styliser visuellement l'erreur).

---

```javascript
            let div=document.createElement("div");
```

**Ligne 89 :** Crée un nouvel élément `<div>` en JavaScript.

---

```javascript
            div.innerText="champ obligatoire";
```

**Ligne 90 :** Définit le texte du div créé : "champ obligatoire".

---

```javascript
            div.classList.add("error-message");
```

**Ligne 91 :** Ajoute la classe `error-message` au div créé.

---

```javascript
            input.closest("div").append(div);
```

**Ligne 92 :** Ajoute le div d'erreur à la fin du `<div>` parent du champ.

**Résultat HTML :**

```html
<div class="error">
    <input type="text" required>
    <div class="error-message">champ obligatoire</div>
</div>
```

---

```javascript
    if(!submit){
```

**Ligne 95 :** Si `submit` est `false` (au moins un champ obligatoire est vide), alors...

---

```javascript
        event.preventDefault();
```

**Ligne 96 :** Empêche l'action par défaut du clic sur le bouton submit (= empêche l'envoi du formulaire).

---

```javascript
        console.log("oups!");
```

**Ligne 97 :** Affiche "oups!" dans la console du navigateur (outil de développement).

---

## ✅ Résumé des problèmes du code original

1. **Code redondant :** Les blocs 2-3 et 6 sont obsolètes et remplacés par les blocs 4-5 et 7
2. **Classe CSS manquante :** `modal-wrapper-slow` n'existe pas
3. **Logique complexe du menu :** Utilise `nav-hide` et `nav-ul-hide` de manière confuse
4. **Sélecteur imprécis :** Ligne 37 utilise `.modal-show` au lieu d'un ID spécifique

## 🎯 Ce qui fonctionne bien

✅ Focus trap universel (bloc 7)
✅ Fermeture avec Échap (bloc 8)
✅ Validation de formulaire dynamique (bloc 9)
✅ Gestion du retour du focus après fermeture de modal

---

## 💡 Conseils pour améliorer le code

1. **Supprimer les blocs obsolètes** (2, 3, 6)
2. **Simplifier la logique du menu burger** (utiliser une seule classe `nav-open`)
3. **Corriger la ligne 37** pour cibler l'ID spécifique de la modal
4. **Ajouter des commentaires** pour expliquer la logique

Ton code fonctionne, mais il pourrait être **beaucoup plus court et maintenable** en supprimant les redondances ! 🚀
