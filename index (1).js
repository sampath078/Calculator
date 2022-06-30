const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

keys.forEach(key=>{
    key.addEventListener("click",calculate);
});

function calculate(){
    let buttonText = this.innerText;
    if(buttonText==="AC"){
        output.innerText="";
        result.innerText="";
        return;
    }
    
    if(buttonText==="DEL"){
        output.textContent=output.textContent.substr(0,output.textContent.length-1);
        result.innerText="";
    }

    if(buttonText==="="){
        result.innerText=eval(output.innerText);

    }

    else if(buttonText!=="DEL") {
        output.textContent+=buttonText;
    }
}

