
// where to be added 
const placeUl = document.getElementById('placeUL')

// what to be added 
const newLI  =  document.createElement('li')
newLI.innerText = 'Vietnam'

// then append
const addedLi = placeUl.appendChild(newLI)
console.log(addedLi);



// **********   add a section   *********
const sectionContainer = document.getElementById('section-container')
console.log(sectionContainer);


const section = document.createElement('section')
// section.style.border = '2px solid red'
// section.style.margin = '20px'
// section.style.padding = '20px'
section.classList.add('section-style')

section.innerHTML = `

<section>
        <h3 >Subjects : </h3>
        <ul >
            <li>Bangla</li>
            <li>English</li>
            <li>Math </li>  
        </ul>
    </section>

`

const addedSec = sectionContainer.appendChild(section)
console.log(addedSec);


