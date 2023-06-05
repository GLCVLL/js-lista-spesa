console.log('JS OK');

// RECUPERO ELEMENTO DAL DOM

const listField = document.getElementById("shopping-list");
console.log(listField);

// CREO LISTA SPESA

const shoppingList = ["mele", "banane", "pane", "latte", "uova"];

// CREO WHILE LOOP

let list = '';

let i = 0;

while (i < shoppingList.length) {

  list += `<li>${shoppingList[i]}</li>`;

  i++;
}

// STAMPO IN PAGINA

listField.innerHTML = list;
