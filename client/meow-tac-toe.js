// Player variable, arrays for player moves, and array for winning states of grid
const game = {
    calicoTurn: true,       // primary player (player 1)
    calicoState: [],        // primary player
    gingerState: [],        // secondary player/opponent
    winningStates: [
        // Grid rows
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],

        // Grid columns
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],

        // Grid diagonals
        ['0', '4', '8'],
        ['2', '4', '6']
    ]
};


document.addEventListener('click', event => {
    const target = event.target;

    const isCell = target.classList.contains('cell');
    
    const isDisabled = target.classList.contains('disabled');


    // Pushes cell played by player into appropriate array
    if (isCell && !isDisabled) {
        const cellValue = target.dataset.value;

        game.calicoTurn === true
            ? game.calicoState.push(cellValue) : game.gingerState.push(cellValue);

        target.classList.add('disabled');

        target.classList.add(game.calicoTurn ? 'calico' : 'ginger');

        game.calicoTurn = !game.calicoTurn;
        

        // Declares a draw if all cells are played (disabled) but there was no winner
        if (!document.querySelectorAll('.cell:not(.disabled)').length) {
            document.querySelector('.results').classList.add('visible');

            document.querySelector('.results-text').textContent = "Draw!";
        };

        game.winningStates.forEach(winningState => {
            const calicoWins = winningState.every(state => game.calicoState.includes(state));

            const gingerWins = winningState.every(state => game.gingerState.includes(state));


            // Displays results of the game on screen
            if (calicoWins || gingerWins) {
                document.querySelectorAll('.cell').forEach(cell => cell.classList.add('disabled'));

                document.querySelector('.results').classList.add('visible');

                document.querySelector('.results-text').textContent = calicoWins
                    ? "...You should be spending less time paying games and more time petting me."
                    : "Defeat! You owe me a treat!";
            };
        });
    };
});


// restartBtn
document.querySelector('.restartBtn').addEventListener('click', () => {
    document.querySelector('.results').classList.remove('visible');

    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('disabled', 'calico', 'ginger');
    });

    // resets
    game.calicoTurn = true;
    game.calicoState = [];
    game.gingerState = [];
});