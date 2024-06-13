
// option 1 
function makeRed(){
    document.body.style.backgroundColor = 'red'
}


// option 2
const getMakeGreen = document.getElementById('make-green')
getMakeGreen.onclick = makeGreen;

function makeGreen(){
    document.body.style.backgroundColor = 'green'
};


// option 3 
const getMakeYellow = document.getElementById('make-yellow')
getMakeYellow.onclick = function (){
    document.body.style.backgroundColor = 'yellow'
};


// option 4 
document.getElementById('make-blue').addEventListener('click', function (){
    document.body.style.backgroundColor = 'blue'
})