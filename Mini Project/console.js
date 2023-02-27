const form = document.getElementById('form')
const fullName = document.getElementById('name')
const email = document.getElementById('email')
const comment = document.getElementById('komentar')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    let messages = []
    if(fullName.value ==''){
        messages.push('Name is required')
    } else if(fullName.value.length <3){
        messages.push('Name required min 3 characters')
    }
    if (email.value == '' || email.value == null){
        messages.push('Email is required')
    } else if(email.value.indexOf('@')== -1 || email.value.indexOf('.com') == -1){
        messages.push('Please input the email correctly')
    } 
    if (comment.value.length<25){
        messages.push('We need more comment, atleast 25 characters, thanks!')
    }
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')    
    }
})

function storeData(){
    document.getElementById('name').innerHTML.value = fullName
    document.getElementById('email').innerHTML.value = email
    document.getElementById('komentar').innerHTML.value = comment
}
console.log(storeData)