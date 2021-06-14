var name1 = localStorage.getItem("Name 1: ");
var name2 = localStorage.getItem("Name 2: ");
var score1 = 0;
var score2 = 0;
var answer_turn = "player1";
var question_turn = "player2";
document.getElementById("player1_name").innerHTML = name1 + ": ";
document.getElementById("player2_name").innerHTML = name2 + ": ";
document.getElementById("player1_score").innerHTML = "&nbsp;" + score1;
document.getElementById("player2_score").innerHTML = "&nbsp;" + score2;
document.getElementById("player_question").innerHTML = "Question Turn - " + name1;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + name2;

function send() {
    get_word = document.getElementById("question").value;
    word = get_word.toLowerCase();
    console.log(word);
    if (word.length >= 5) {
        localStorage.setItem("word", word);
        console.log("Word in lowercase ", word);

        charAt1 = word.charAt(1);
        console.log(charAt1);

        length_divide_2 = Math.floor(word.length / 2);
        charAt2 = word.charAt(length_divide_2);
        console.log(charAt2);

        length_minus_1 = word.length - 1;
        charAt3 = word.charAt(length_minus_1);
        console.log(charAt3);

        remove_charAt1 = word.replace(charAt1, "_");
        remove_charAt2 = remove_charAt1.replace(charAt2, "_");
        remove_charAt3 = remove_charAt2.replace(charAt3, "_");
        console.log(remove_charAt1, remove_charAt2, remove_charAt3);

        question_word = "<h4 id=\"word_display\"> Q." + remove_charAt3 + "</h4>";
        input_box = "<br>Answer: <input type=\"text\" id=\"input_check_box\">";
        check_button = "<br><br><button class=\"btn btn-info\" onclick=\"change()\">Check</button>"
        row = question_word + input_box + check_button;
        document.getElementById("output").innerHTML = row;
        document.getElementById("question").value = "";
    }
    else {
        window.alert("Please enter a word more than 5 letters!");
    }
}

function change() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("Answer: " + answer);
    console.log("Question: " + word);
    if (answer == word) {
        console.log("Score 1 " + score1);
        console.log("Score 2 " + score2);
        if (answer_turn == "player1") {
            score1 += 1;
            console.log("Score 1" + score1);
            document.getElementById("player1_score").innerHTML = "&nbsp;" + score1;
        }
        else {
            score2 += 1;
            console.log("Score 2 " + score2);
            document.getElementById("player2_score").innerHTML = "&nbsp;" + score2;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + name2;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + name1;
    }

    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + name2;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + name1;
    }

    document.getElementById("output").innerHTML = "";
}
