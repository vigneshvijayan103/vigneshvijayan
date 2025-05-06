function sendEmail(){
    let params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    }



 const serviceId="service_xgg44br";
const templateId="template_c0ltrrr";

emailjs.send (serviceId,templateId,params)
.then(res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value=""
        console.log(res); 
        alert("your message sent successfully!!")
    })
        .catch(err=>console.log(err));
}

