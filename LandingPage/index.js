
for(var i = 0; i < document.querySelectorAll(".clickImg").length; i++){

    // On Mouse Hover
    document.querySelectorAll(".clickImg")[i].addEventListener("mouseenter", function() {
        handleHovered(this.id, true);
     });

    // On Mouse Leave
    document.querySelectorAll(".clickImg")[i].addEventListener("mouseleave", function() {
        handleHovered(this.id, false);
    });

    // On Mouse Clicked
    document.querySelectorAll(".clickImg")[i].addEventListener("click", function() {
        handleClicked(this.id);
    });
}

function handleHovered(id, isHovered){
    var item = document.querySelector("#" + id);

    if(isHovered === true){
        item.classList.add("highlight");
    }else{
        item.classList.remove("highlight");
    }
}

function handleClicked(id){
    switch(id){
        case "vgameImage":
            location.replace("../SoftwarePage/index.html");
            break;   
    }
}
