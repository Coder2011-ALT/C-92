var name1;
var name2;
function addUser() {
    name1 = document.getElementById("player1_name_input").value;
    name2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("Name 1: ", name1);
    localStorage.setItem("Name 2: ", name2);
    window.location = "game_page.html";
}
