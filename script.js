
function commencer() {
    alert("Bienvenue sur notre site !");
}

function envoyer() {

    let nom = document.getElementById("nom").value;

    if (nom === "") {
        document.getElementById("message").innerHTML =
            "Veuillez entrer votre nom.";
    } else {
        document.getElementById("message").innerHTML =
            "Bonjour " + nom + " ! Votre message a été envoyé.";
    }
}
