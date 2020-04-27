function check()
{
    var f = document.getElementById("contactForm");

    f.setAttribute('method',"post");
    if(!((f.name.value == "") || (f.email.value == "") || (f.subject.value == "") || (f.msg.value == "")))
    {   

        f.setAttribute('action',"https://script.google.com/macros/s/AKfycbz5Q7r0Wjd1cExE3vq6Ggs9V7LrOFlqpl4yg6oFYg/exec");
        yes_visibility('thankyou_message');
        no_visibility('contactForm');
    }
    return true;
}


function yes_visibility(id, t) {
    setTimeout(function(){
        var e = document.getElementById(id);
        e.style.display = 'block'; 
    }, t);
}
  
function no_visibility(id, t) {
    setTimeout(function(){
        var e = document.getElementById(id);
        e.style.display = 'none';
    }, t);
  
}

function setBlank() {
    document.getElementById("contactForm").reset();
}