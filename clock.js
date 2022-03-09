//Kullanıcı adını öğrendik
let userName = prompt("Kullanıcı Adınızı Giriniz");

//Kullanıcı adını boş girerse ekrana İsimsiz yazdırdık
let name =  document.querySelector("#name").innerHTML=  `
"${userName.length > 0 ? userName : 
    alert("Kullanıcı Adınızı Girmediniz") ? userName : "İsimsiz"}"`

//Bugünün saat ve tarihini öğrendik
    setInterval(()=>{
        let date    = new Date();
        let day     = date.getDay();
        let hour    = date.getHours();
        let minute  = date.getMinutes();
        let secound = date.getSeconds();

        let days    = ["Pazar","Pazartesi", "Salı", "Çarşamba","Perşembe","Cuma","Cumartesi"]

        let clock   = document.querySelector("#clock");
        
        hour        = (hour < 10) ? "0"+ hour : hour
        minute      = (minute < 10) ? "0" + minute : minute
        secound     = (secound < 10) ? "0" + secound : secound

        clock.innerHTML =`${hour}:${minute}:${secound} ${days[day]}`

    },1000)
