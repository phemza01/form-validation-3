let form=document.getElementById("form")
let validatename = document.getElementById('validatename')
let validatephone = document.getElementById('validatephone')
let validateaddress = document.getElementById('validateaddress')
let validateemail = document.getElementById('validateemail')
form.addEventListener('submit', submitData)
function submitData(event){
    event.preventDefault();
    let name = form['name'].value
    let phone = form['phone'].value
    let address = form['home'].value
    let email = form['email'].value
    if(name.trim() == ""){
        error = "Your name is required" 
    }
     else if(name.length < 10){
    error = "invalid name"
    }else {
        validatename.value  = name
        error = ""
    }
    document.getElementById('nameError').innerHTML = error 

    if (phone == ""){
        error= "Your phone number is required"
    }
    else if (phone.length !=11){
        error= "invalid phone number"
    }
    else if ( !(phone.startsWith('080') || phone.startsWith('090') || phone.startsWith('070') || phone.startsWith('081')|| phone.startsWith('01') || phone.startsWith('091'))){
        error= "invalid phone number"
        validphone =""
    }else{
        validatephone.value = phone
        error = ""
    }
    document.getElementById('phoneError').innerHTML = error;

    if (address ==""){
        error = "Your address is required"
    }else if(address.length < 3){
        error = "invalid address"
    }else{
        validateaddress.value=address
    }
document.getElementById('homeError').innerHTML = error;

if (email == ""){
    error= "Your Email is required"
}
else if (email.includes('@')== false || email.includes('.') == false){
    error= "invalid email"
}else{
    validateemail.value = email
}
document.getElementById('emailError').innerHTML = error;
    
    
} 