function myFunction() {
    var Email = $("#Email").val();
    alert("Your Email has been successfully registered as: \n" + Email + "\nThank You !!");
    $("#Email").val("");
}
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}