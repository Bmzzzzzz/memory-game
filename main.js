const card = ['A', 'B', 'C', 'A', 'B', 'C']
const shuffledArray = [];
// for (i = 0; i <= card.length - 1; i++) {
//     const element = document.createElement("div");
//     element.innerHTML = card[i];
//     const board = document.getElementById("board");
//     board.appendChild(element);
// }

function craeteCrad(idx) {
    const cardEl = document.createElement("div");//מייצר דיב 
    cardEl.innerHTML = i;//מכניס לתוך הדיב את מה שנמצא במיקום במערך//
    const board = document.getElementById("board");//מחפש את המיקום של בורד ב איץ טי אמ אל //
    board.appendChild(cardEl);//מכניס את האלמנט לתוך הדיב//
    cardEl.id = idx;
    cardEl.className = "card";
}


function shuffle(arr) {
    arr = arr.sort((a, b) => 0.5 - Math.random());
    return arr;
}
const arrr = shuffle(card);

for (i in card) {
    craeteCrad(i)
}
for (i of arrr) {
    craeteCrad(i)
}
shuffle(card);
//console.log(shuffle(card));
console.log("card" + card);
