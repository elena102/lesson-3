
 
    function ValidMail() {
        let a = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        let myMail = document.getElementById('email').value;
        let valid = a.test(myMail);
        if (valid) output = 'Адрес эл. почты введен правильно!';
        else output = 'Адрес электронной почты введен неправильно!';
        document.getElementById('message').innerHTML = output;
        return valid;
    }
     
    function ValidPhone() {
        let b = /^\d[\d\(\)\ -]{4,14}\d$/;
        let myPhone = document.getElementById('phone').value;
        let valids = b.test(myPhone);
        if (valids) output = 'Номер телефона введен правильно!';
        else output = 'Номер телефона введен неправильно!';
        document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
        return valids;
    }  
    function ValidTextarea() {
        let c = /^.{10,500}$/i;
        let myText = document.getElementById('field').value;
        let val = c.test(myText);
        if (val) output = 'Вы написали свои пожелания!';
        else output = 'Вы не написали свои пожелания!';
       document.getElementById('message').innerHTML = document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'
        +output;
        return val;
    }  
    
    
