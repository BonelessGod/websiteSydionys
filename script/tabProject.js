function tabProject(projectType) {
    var i;
    var x = document.getElementsByClassName("projectTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(projectType).style.display = "block";
  }