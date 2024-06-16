let intervalId;

const startBtn = document.getElementById('start') // get the start btn from html
const startTimer = () => {
    const showTime = document.getElementById('time')  // get the showing time 
    let num = 0;
    intervalId = setInterval(() => {
        showTime.innerText = ++num;
    }, 1000);
    console.log('start timer');

}




const stopTimer = () => {
    if (intervalId) {
        clearInterval(intervalId)
        console.log('stopped timer');
    }

    
}

// reset and stop
const resetTimer = () => {
    if (intervalId) {
        clearInterval(intervalId)
    }
    intervalId = null;
    console.log('reset');
    // showing 0 after reset...
    const showTime = document.getElementById('time')
    showTime.innerText  = 0

}



// let tasbi = 1;
// const increase = () => {
//     const text = document.getElementById('text')
//     text.innerText = tasbi++
//     console.log(tasbi);
// }


let tasbi = 1;
const increase = () => {
    const text = document.getElementById('text')
    setTimeout(()=> {
        text.innerText = tasbi++
    })
    console.log(tasbi);
}