// const menuIcon = document.getElementById("menu-icon");
// const menuList = document.getElementById("menu-list");

// menuIcon.addEventListener("click", () => {
//     // menuList.classList.toggle("hidden");
//         alert("Hey Kamu");
// });

// let letVariabel;
// letVariabel = 0;

// const constVariabel = 1;

// // Tipe Data Number

// let iniNumber = 10;
// console.log(iniNumber)
// console.log("Tipe data:" + typeof iniNumber);

// let iniDesimal = 12.5;
// console.log(iniDesimal);
// console.log("Tipe data:"+ typeof iniDesimal);

// let iniString = "Ini Teks";
// console.log(iniString);
// console.log("Tipe data:"+ typeof iniString);

// let iniBoolean = true;
// console.log(iniBoolean);
// console.log("Tipe data:"+ typeof iniBoolean);

// let iniUndefined;
// console.log(iniUndefined);
// console.log("Tipe data:"+ typeof iniUndefined);

// let iniNull = null;
// console.log(iniNull);
// console.log("Tipe data:"+ typeof iniNull);

// let nilai = 70;

// if(nilai > 70){
//     console.log("benar")
// }else{
//     console.log("salah")
// }

// for(let i = 0; i<5; i++){
//     console.log(i);
// }

// // Operasi Penugasa

// let a = 10;
// let b = 11;
// // Mirip a = a+b;
// a+=b; 
// console.log(a)
// let  variabel= 10
// console.log( variabel<10 && variabel >=10)
// console.log(true || false)
// console.log(!false)

// function iniFunction(a){
//     console.log(a)
// }

// let letvariabel = 10;
// iniFunction(letvariabel);

// let iniArray = [1, "dua", 3.0, "4"];
// iniArray.pop()
// iniArray.push("Lemon")
// iniArray.shift();
// iniArray.unshift("pertama")
// for(let i = 0; i < iniArray.length; i++){
//     console.log(iniArray[i]);
// }

// const Navbar = document.getElementById('nav');
// const li = document.getElementsByTagName('li');
// const logo = document.getElementsByClassName('logo');
// const li1 = document.querySelector('.logo ul li');
// const li2 = document.querySelectorAll("ul li");

const mode = document.querySelector("li img");
const body = document.querySelector("body");
    mode.addEventListener("click", function() {
        if (body.style.backgroundColor == "beige") {
            body.style.backgroundColor = "dimgray";
            mode.src = "./icon/moon-fill.svg";   
        } else {
            body.style.backgroundColor = "beige";
            mode.src = "./icon/brightness-high-fill.svg";  
        }
    });
    // Navbar.addEventListener("click", () => {
    //     alert('PPP');
    // })
// Navbar.addEventListener('click', () =>{
//     aler
// });