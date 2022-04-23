// Idea somewhat borrowed by completely adapted and mangled to work on my webpage https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
function openobject() {
  var id = this.getAttribute('data-target-id');
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
  else {
    x.style.display = "none";
  }
}