const SPACES = 12;
const SEPARATOR = '|';

const rows = [
  { name: 'Name', lastName: 'Last Name', phone: 'Phone' },
  { name: 'Juan', lastName: 'Barron', phone: 1234567890 },
  { name: 'Jorge', lastName: 'Dom', phone: 1234567890 },
  { name: 'Carlos', lastName: 'Arriaga', phone: 1234567890 },
];

function getTableData(array = []) {
  let res = '';

  for (const row of array) {
    const rowRes = [];

    for (const cell in row) {
      if (Object.hasOwnProperty.call(row, cell)) {
        const cellValue = String(row[cell]);
        const charactersDif =  SPACES - cellValue.length;
        rowRes.push(`${cellValue}${(' ').repeat(charactersDif)}`);
      }
    }

    res += `${rowRes.join('| ')}\n`;
  }

  return res;
}

console.log(getTableData(rows))
