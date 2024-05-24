const createField = () => {
    
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
    
            nouvelleCellule.dataset.row = i;
            nouvelleCellule.dataset.col = j;
            // Appliquer des classes Tailwind CSS en fonction de la valeur dans la cellule
            switch (soccerField[i][j]) {
                case "x":
                    nouvelleCellule.classList.add("bg-black", "w-10", "h-10", "p-2", "border-2", "border-black"); // Définir la couleur pour les zones de terrain
                    break;
                case "c":
                    nouvelleCellule.classList.add("cell", "bg-white", "w-10", "h-10", "p-2", "border-2", "border-black"); // Définir la couleur pour les coins et rendre les coins ronds
                    break;
                case "g":
                    nouvelleCellule.classList.add("bg-green-500", "w-10", "h-10", "p-2", "border-2", "border-black"); // Définir la couleur pour les zones vides
                    break;
                case "GR":
                case "DR":
                case "MR":
                case "SR":
                    nouvelleCellule.classList.add("cell", "bg-red-500", "w-10", "h-10", "p-2", "border-2", "border-black"); // Définir la couleur pour les joueurs, rendre les joueurs ronds et centrer le texte
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
    
    }

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

createField()

let kickOff = "player1"
const cells = document.querySelectorAll('.cell');
let rowPlayerSelect = null
let colPlayerSelect = null
let cellPlayerSelect = null

let Commitment = () => {
    if (kickOff === "player1"){
        let cellElement = document.querySelectorAll("div")[7].querySelectorAll("p")[7];

        ballField[6][7] = "B"
        cellElement.classList.remove("bg-red-500");
        cellElement.classList.add("bg-white");
        
    } else {
        let cellElement = document.querySelectorAll("div")[7].querySelectorAll("p")[9];

        ballField[6][9] = "B"
        cellElement.classList.remove("bg-blue-500");
        cellElement.classList.add("bg-white");
    }
}

function selectPlayer(event) {
    const cell = event.target;

    if (rowPlayerSelect === null && colPlayerSelect === null) {
        rowPlayerSelect = parseInt(cell.dataset.row);
        colPlayerSelect = parseInt(cell.dataset.col);
        cellPlayerSelect = cell;
        console.log("Coordonnée du joueur selectionné : ", rowPlayerSelect, colPlayerSelect);
    } else if (parseInt(cell.dataset.col) === colPlayerSelect) {
        console.log("Rentré", colPlayerSelect);
        lineMoveDown(rowPlayerSelect, colPlayerSelect, cellPlayerSelect);
    } else if (rowPlayerSelect !== cellPlayerSelect && parseInt(cell.dataset.col) === 16) {
        let rowPlayerSelectShoot = parseInt(cell.dataset.row);
        let colPlayerSelectShoot = parseInt(cell.dataset.col);
        shootBall(rowPlayerSelect, colPlayerSelect, rowPlayerSelectShoot, colPlayerSelectShoot, cellPlayerSelect);
        Commitment();
    } else if (rowPlayerSelect !== cellPlayerSelect || colPlayerSelect !== cellPlayerSelect) {
        let rowPlayerSelectPass = parseInt(cell.dataset.row);
        let colPlayerSelectPass = parseInt(cell.dataset.col);
        let cellPlayerSelectPass = cell;
        passBall(rowPlayerSelect, colPlayerSelect, rowPlayerSelectPass, colPlayerSelectPass, cellPlayerSelect, cellPlayerSelectPass);
        rowPlayerSelect = null;
        colPlayerSelect = null;
    } else if (rowPlayerSelect === parseInt(cell.dataset.row) && colPlayerSelect === parseInt(cell.dataset.col)) {
        rowPlayerSelect = null;
        colPlayerSelect = null;
        console.log("Le joueur selectionné est le même");
    }
}



let passBall = (iPlayerSelect, jPlayerSelect, iPlayerSelectPass, jPlayerSelectPass, cellPlayerSelect, cellPlayerSelectPass) => {
    
    ballField[iPlayerSelect][jPlayerSelect] = "0"
    ballField[iPlayerSelectPass][jPlayerSelectPass] = "B"

    cellPlayerSelect.classList.remove("bg-white")
    cellPlayerSelect.classList.add("bg-red-500")

    cellPlayerSelectPass.classList.remove("bg-red-500")
    cellPlayerSelectPass.classList.add("bg-white")

}

let shootBall = (iPlayerSelect, jPlayerSelect, iPlayerSelectShoot, jPlayerSelectShoot, cellPlayerSelect) => {

    ballField[iPlayerSelect][jPlayerSelect] = "0"
    ballField[iPlayerSelectShoot][jPlayerSelectShoot] = "B"

    cellPlayerSelect.classList.remove("bg-white")
    cellPlayerSelect.classList.add("bg-red-500")

    console.log("But !")
}

let lineMoveDown = (iPlayerSelect, jPlayerColumn, cellPlayerSelect) => {
    // Parcourir de bas en haut pour éviter d'écraser les joueurs déjà déplacés
    for (let i = soccerField.length - 2; i >= 0; i--) {
        if (soccerField[i][jPlayerColumn] !== "g" && soccerField[i][jPlayerColumn] !== "x") {
            // Vérifier que la nouvelle position est valide
            if (i + 1 < soccerField.length && soccerField[i + 1][jPlayerColumn] === "g") {
                // Mettre à jour la position du joueur
                let playerType = soccerField[i][jPlayerColumn];
                soccerField[i][jPlayerColumn] = "g"; // Ancienne position devient vide
                soccerField[i + 1][jPlayerColumn] = playerType; // Nouvelle position pour le joueur

                // Mettre à jour la couleur de la cellule correspondante dans le document HTML
                let cellToUpdate = document.querySelector(`[data-row="${i}"][data-col="${jPlayerColumn}"]`);
                if (cellToUpdate) {
                    cellToUpdate.classList.remove("bg-red-500", "bg-blue-500");
                    cellToUpdate.classList.add("bg-green-500");
                    cellToUpdate.innerText = ""
                }
                let cellToUpdateBelow = document.querySelector(`[data-row="${i + 1}"][data-col="${jPlayerColumn}"]`);
                if (cellToUpdateBelow) {
                    cellToUpdateBelow.classList.remove("bg-green-500");
                    cellToUpdateBelow.classList.add("bg-red-500");
                    cellToUpdateBelow.innerText = playerType;
                }
            }
        }
    }

    // Gérer le déplacement du joueur sélectionné
    if (iPlayerSelect + 1 < soccerField.length && soccerField[iPlayerSelect + 1][jPlayerColumn] === "g") {
        soccerField[iPlayerSelect][jPlayerColumn] = "g";
        soccerField[iPlayerSelect + 1][jPlayerColumn] = cellPlayerSelect.innerText;

        cellPlayerSelect.classList.remove("bg-red-500", "bg-blue-500");
        cellPlayerSelect.classList.add("bg-green-500");

        let cellToUpdate = document.querySelector(`[data-row="${iPlayerSelect + 1}"][data-col="${jPlayerColumn}"]`);
        if (cellToUpdate) {
            cellToUpdate.classList.remove("bg-green-500");
            cellToUpdate.classList.add(cellPlayerSelect.innerText.startsWith("M") ? "bg-red-500" : "bg-blue-500");
            cellToUpdate.innerText = cellPlayerSelect.innerText;
        }
    }
};







Commitment()

cells.forEach((cell, index) => {

    cell.addEventListener("click", selectPlayer);
  
  });