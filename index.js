import { GYUMOLCSOK } from "./adatok.js";

const vasarolt = [];

// 1. feladat
function letrehozTablazat(lista) {

    /* <!-- 1. feladat -->
    <!-- Index.js file-ban lévő gyümölcsök tömbből készíts egy táblázatot a mintának megfelelően -->
    <!-- A táblázatot javascript segítségével hozd létre és a feladat_1 elem-be töltsd bele. --> */

    let txt = `<table> `;
    for (let index = 0; index < lista.length; index++) {
        txt += `
        <tr>
            <td class = "gyumolcsok">${lista[index].nev}</td>
            <td>${lista[index].tomeg}</td>
            <td>${lista[index].ar}</td>
        </tr>
        `;
    }
    txt += `</table>`;
    return txt;
}

const TABLAZAT = document.getElementById("feladat_1");
TABLAZAT.innerHTML = letrehozTablazat(GYUMOLCSOK);

// 2. feladat
function osszesit(lista) {
    let arOsszesen = 0;
    for (let index = 0; index < lista.length; index++) {
        arOsszesen += lista[index].ar;
    }
    return arOsszesen;
}

function tomegosszesites(lista) {
    let tomegOsszesen = 0;
    for (let index = 0; index < lista.length; index++) {
        tomegOsszesen += lista[index].tomeg;
    }
    return tomegOsszesen;
}

const OSSZESITES = document.getElementById("feladat_2");
OSSZESITES.innerHTML = `A gyümölcsök súlya összesen: ${tomegosszesites(GYUMOLCSOK)} <br>A gyümölcsök ára összesen: ${osszesit(GYUMOLCSOK)} ft` 


// 3. feladat
function vasarol(zoldseg) {

}

// 4. feladat
function torolEsemeny() {

}