var x = 1

function titleAnimation(event) {
    // if (x%2 === 1)
    //     document.getElementById("title-box").style.backgroundColor = "white";
    // else
    //     document.getElementById("title-box").style.backgroundColor = "#C3AED6";
    // x++;
    let title = document.getElementById("title-box");

    for (i = 0; i < 10; i++) {
        console.log("X:", event.pageX, " Y:", event.pageY);
        let sparkle = document.createElement("sparkle");
        sparkle.style.top = (event.pageY + Math.random()*50) + "px";
        sparkle.style.left = (event.pageX + Math.random()*50) + "px";
        title.appendChild(sparkle);

        setTimeout(function(){sparkle.remove();}, 2000)

    }
}


function openProjectPopUp(prjNum) {
    const project = document.getElementsByClassName("projectPopUp")[prjNum-1];
    console.log("button clicked");

    if (project.style.visibility === "visible") {
        project.style.visibility = "hidden";
    }
    else {
        project.style.visibility = "visible";
    }
}