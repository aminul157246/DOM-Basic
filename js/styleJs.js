const allSection = document.querySelectorAll('section')
for(const section of allSection){
    // console.log(section.innerText);
    section.style.border = '2px solid red'
    section.style.padding = '20px'
    section.style.margin = '20px'
}


// add style with  add / remove classList 
const placeTitle = document.getElementById('place-title')
placeTitle.classList.add('text-center')     // need write code in css file for it (add/remove)


// add style with getting text and using .style method
const london = document.getElementById('london-text')
london.style.backgroundColor  = 'gray'