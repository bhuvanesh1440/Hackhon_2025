const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');

canvas.height = 200;
canvas.width = 200;

function drawDot(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
}

function drawDice(number) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    switch (number) {
        case 1:
            drawDot(100, 100);
            break;
        case 2:
            drawDot(60, 60);
            drawDot(140, 140);
            break;
        case 3:
            drawDot(60, 60);
            drawDot(100, 100);
            drawDot(140, 140);
            break;
        case 4:
            drawDot(60, 60);
            drawDot(140, 60);
            drawDot(60, 140);
            drawDot(140, 140);
            break;
        case 5:
            drawDot(60, 60);
            drawDot(140, 60);
            drawDot(100, 100);
            drawDot(60, 140);
            drawDot(140, 140);
            break;
        case 6:
            drawDot(60, 60);
            drawDot(140, 60);
            drawDot(60, 100);
            drawDot(140, 100);
            drawDot(60, 140);
            drawDot(140, 140);
            break;
    }
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'Space') {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        drawDice(randomNumber);
        console.log(randomNumber);
    document.getElementById('result').innerHTML=`The Number is ${randomNumber}`
    }
    


});

// first time
drawDice(1);
