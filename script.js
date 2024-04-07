let soccerField = [
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
    ["x","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","x"],
    ["x","g","g","g","g","g","g","MR","g","MB","g","g","g","g","g","g","x"],
    ["x","g","g","g","g","SB","g","g","g","g","g","SR","g","g","g","g","x"],
    ["c","g","g","DR","g","g","g","MR","g","MB","g","g","g","DB","g","g","c"],
    ["c","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","c"],
    ["c","GR","g","g","g","SB","g","MR","g","MB","g","SR","g","g","g","GB","c"],
    ["c","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","c"],
    ["c","g","g","DR","g","g","g","MR","g","MB","g","g","g","DB","g","g","c"],
    ["x","g","g","g","g","SB","g","g","g","g","g","SR","g","g","g","g","x"],
    ["x","g","g","g","g","g","g","MR","g","MB","g","g","g","g","g","g","x"],
    ["x","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","x"],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
    
]

let ballField = [
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
    ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
    ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
    ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
    ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
    ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
    ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
    ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
    
]

// Récupération de l'élément body
const body = document.getElementById("body");

// Création d'une nouvelle div
let nouvelleDiv = document.createElement("div");
    nouvelleDiv.classList.add("grid", "grid-cols-13");

// Boucle pour créer et ajouter les nouvelles divs et cellules
for (let i = 0; i < soccerField.length; i++) {
    // Création d'une nouvelle div interne à chaque itération de la boucle i
    let newDiv2 = document.createElement("div");
        newDiv2.classList.add("flex","text-center", "mx-auto", "my-auto");

    // Boucle pour créer et ajouter les cellules à la div interne
    for (let j = 0; j < soccerField[i].length; j++) {
        // Création d'une nouvelle cellule (élément <p> pour cet exemple)
        let nouvelleCellule = document.createElement("p");

        // Appliquer des classes Tailwind CSS en fonction de la valeur dans la cellule
        switch (soccerField[i][j]) {
            case "x":
                nouvelleCellule.classList.add("bg-black", "w-10", "h-10", "p-2", "border-2", "border-black"); // Définir la couleur pour les zones de terrain
                break;
            case "c":
                nouvelleCellule.classList.add("bg-white", "w-10", "h-10", "p-2", "border-2", "border-black"); // Définir la couleur pour les coins et rendre les coins ronds
                break;
            case "g":
                nouvelleCellule.classList.add("bg-green-500", "w-10", "h-10", "p-2", "border-2", "border-black"); // Définir la couleur pour les zones vides
                break;
            case "GR":
            case "DR":
            case "MR":
            case "SR":
                nouvelleCellule.classList.add("bg-red-500", "w-10", "h-10", "p-2", "border-2", "border-black"); // Définir la couleur pour les joueurs, rendre les joueurs ronds et centrer le texte
                nouvelleCellule.innerText = soccerField[i][j]; // Afficher l'abréviation du joueur
                break;
            case "MB":
            case "SB":
            case "GB":
            case "DB":
                nouvelleCellule.classList.add("bg-blue-500", "w-10", "h-10", "p-2", "border-2", "border-black"); // Définir la couleur pour les joueurs, rendre les joueurs ronds et centrer le texte
                nouvelleCellule.innerText = soccerField[i][j]; // Afficher l'abréviation du joueur
                break;
        }

        // Ajout de la cellule à la div interne
        newDiv2.appendChild(nouvelleCellule);
    }

    // Ajout de la div interne à la div principale
    nouvelleDiv.appendChild(newDiv2);
}

// Ajout de la div principale au corps du document
body.appendChild(nouvelleDiv);



