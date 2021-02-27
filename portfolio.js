var at = document.getElementById("email").value.indexOf("@");
var sub = document.getElementById("subject").value;
var name = document.getElementById("name").value;
submitOK = "true";
if (at == -1) {
  alert("Not a valid e-mail!");
  submitOK = "false";
}
if (submitOK == "false") {
  return false;
}
if (submitOK == "true") {
    alert("Hey"+name+ " !Thanks for reaching out. Your Message has successfully been sent!");
}