let currentPlayer = 'X';
function play() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.textContent === '') {
                cell.textContent = currentPlayer;
                if (currentPlayer === 'X') {
                    currentPlayer = 'O';
                    checkWin();
                } else {
                    currentPlayer = 'X';
                    checkWin();
                }
            }
        });
    });
}

function checkWin() {
    const r1 = document.getElementById('r11').textContent;
    const r2 = document.getElementById('r12').textContent;
    const r3 = document.getElementById('r13').textContent;
    const c1 = document.getElementById('r21').textContent;
    const c2 = document.getElementById('r22').textContent;
    const c3 = document.getElementById('r23').textContent;
    const d1 = document.getElementById('r31').textContent;
    const d2 = document.getElementById('r32').textContent;
    const d3 = document.getElementById('r33').textContent;

    if ((r1 === r2 && r2 === r3 && r1 !== '') ||
        (c1 === c2 && c2 === c3 && c1 !== '') ||
        (d1 === d2 && d2 === d3 && d1 !== '') ||
        (r1 === c1 && c1 === d1 && r1 !== '') ||
        (r2 === c2 && c2 === d2 && r2 !== '') ||
        (r3 === c3 && c3 === d3 && r3 !== '') ||
        (r1 === c2 && c2 === d3 && r1 !== '') ||
        (r3 === c2 && c2 === d1 && r3 !== '')) {
            if (currentPlayer === 'X') {
                currentPlayer = 'O';
            } else {
                currentPlayer = 'X';
            }
        alert(`${currentPlayer} wins!`);
    }

    else if (r1 !== '' && r2 !== '' && r3 !== '' && c1 !== '' && c2 !== '' && c3 !== '' && d1 !== '' && d2 !== '' && d3 !== '') {
        alert("It's a draw!");
    }
}

function reset() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.textContent = '';
    });
}