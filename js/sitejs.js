window.onload = function () {
    let menuButton = document.querySelector("#menu-button");
    let menuContainer = document.querySelector("#menu-container");
    
    menuButton.addEventListener('click', function (event) {
        console.log(menuContainer.style.right);
        if(menuContainer.style.right == "0px"){
            menuContainer.style.right = "-300px";
        }else{
            menuContainer.style.right = "0px";
        }
    });
}
