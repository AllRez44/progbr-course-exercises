"use strict";
//Teste do Script Mode:
function strictTest() {
    x = 5;
    console.log(x)
}

//Teste do Método Bind:
function bindTest(){
    function speakGeneric(){
        return this.sound
    }

    let dog = {
        sound: "au au",
        speak: speakGeneric
    }
    
    let cat = {
        sound: "miau",
        speak: speakGeneric
    }

    let catSound = speakGeneric.bind(cat)
    console.log(catSound())
}
