let counter2 = 1;
let table2 = document.getElementById('table2');
table2.style.borderCollapse = "collapse";
let r = 8;
for (let i = 0; i < r; i++) {
    let tr = document.createElement('tr');
    // tr.id = +i+1"tr";
    table2.appendChild(tr);
    for (let j = 0; j < r; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.className = "blocks"
        td.style.height = "65px";
        td.style.width = "65px";
        td.style.border = "solid black 1px"
        if (i % 2 === 0) {
            if (counter2 % 2 === 0) {
                td.style.backgroundColor = "saddlebrown";
            } else {
                td.style.backgroundColor = "bisque";
            }
        } else {
            if (counter2 % 2 === 0) {
                td.style.backgroundColor = "bisque";
            } else {
                td.style.backgroundColor = "saddlebrown";
            }
        }
        td.id = "block2" + counter2;
        counter2++;
    }
}