function addShirt1(){
    addShirt("shirt1")
}


function addShirt(shirt){
    const newShirt = document.createElement("img");
    // newShirt.className="shirt";
    if(shirt == "shirt1"){
        newShirt.src = '/testImages/blueshirt';
        
    }
    
    document.imagecontainer.appendChild(newShirt);
}
