const data = `01/02/03,,,02/02/23,,
פירוט,סכום,תקן,פירוט,סכום,תקן
חנות,3,17.1,1,2,17.1,1
חנות 2,3,132.14,1,2,132.14,1
חנות 3,3,1085.17,1,2,1085.17,1
חנות 4,3,246.41,1,2,246.41,1
חנות 5,3,63.16,1,2,63.16,1
חנות 6,3,97.07,1,2,97.07,1
חנות 7,3,161.07,1,2,161.07,1
חנות 8,3,101.73,1,2,101.73,1
חנות 9,3,67.98,1,2,67.98,1
חנות 10,3,169.93,1,2,169.93,1
חנות 11,3,30.58,1,2,30.58,1
חנות 12,3,138.49,1,2,138.49,1
חנות 13,3,8.49,1,2,8.49,1
חנות 14,3,101.96,1,2,101.96,1
חנות 15,3,76.41,1,2,76.41,1
חנות 16,3,58.58,1,2,58.58,1
חנות 17,3,106.12,1,2,106.12,1
חנות 18,3,25.47,1,2,25.47,1
חנות 19,3,101.88,1,2,101.88,1
חנות 20,3,42.45,1,2,42.45,1
,,,,,,
,,2832.19,,,`;

const rows = data.split('\n');

// Initialize the JSON object
const result = {};

let currentStore = '';
for (let i = 2; i < rows.length; i++) {
    const columns = rows[i].split(',');

    // If it's a store row
    if (columns[0]) {
        currentStore = columns[0];
        result[currentStore] = {};
    }

    // If it's a data row
    if (columns[1]) {
        const date = columns[1].trim();
        const teken = parseFloat(columns[2]);
        const bizoa = parseFloat(columns[3]);
        const par = parseFloat(columns[4]);
        
        // If date not yet added to the store, add it
        if (!result[currentStore][date]) {
            result[currentStore][date] = { teken, bizoa, par };
        } else {
            // If date already exists, merge values
            result[currentStore][date].teken += teken;
            result[currentStore][date].bizoa += bizoa;
            result[currentStore][date].par += par;
        }
    }
}

console.log(result);
