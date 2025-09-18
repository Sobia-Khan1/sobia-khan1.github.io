

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