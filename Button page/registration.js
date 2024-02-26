function checkIdAndOpenPage() {
    let clgidValue = document.getElementById("clgid").value;
  
    if (clgidValue === "22CSE121" || clgidValue === "22CSE053") {
        window.open("Elevator.html", "_blank"); // Open the page in a new tab/window
    } else {
        console.log("Check your ID again.");
    }
    nam=document.getElementById('myname').value;
    localStorage.setItem("textvalue",nam);
    console.log(nam);
}