const getDefaultText = document.getElementById('update-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-text')
    const inputText = inputField.value;

    const defaultText = document.getElementById('default-text')
    // console.log(defaultText);
    defaultText.innerText = inputText
    

})
