function SubmitForm() {
    try{
                    Email.send({ 
        Host : "smtp.gmail.com", 
        Username : "bijirinjo@gmail.com", 
        Password : "8A7F0869AD16708E291950AA", 
        To : 'bijirinjo@gmail.com', 
        From : document.getElementById("email").value, 
        Subject : "New Query from Client", 
        Body : "Name: " + document.getElementById("name").value 
                + "<br>" +
                "E-mail: " + document.getElementById("email").value
                + "<br>" +
                "Message: " + document.getElementById("message").value`enter code here`
                
    })
    .then(res=>{console.log(res)});
    } catch(err) {
                    console.log(err)
    }
}