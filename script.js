const shirt1 = document.querySelector("#shirt1");

shirt1.addEventListener('click', addShirt(shirt1));

function addShirt(shirt){
    const newShirt = document.createElement("img");
    newShirt.className="shirt";
}
