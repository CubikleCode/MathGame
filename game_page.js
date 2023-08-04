
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "answer Turn - " + player2_name ;

function send() {
	get_number1 = document.getElementById("num1").value;
    get_number2 = document.getElementById("num2").value;
	console.log("first number: " + num1);
    console.log("second number: " + num2);
    answer = get_number1 * get_number2;

    question_num = "<h4 id='num_display'> Q. "+ get_number1 + "x" + get_number2 +"</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_num + input_box + check_button ; 

    document.getElementById("output").innerHTML = row;
	document.getElementById("num1").value = "";
	document.getElementById("num2").value = "";
} 

question_turn = "player1";
answer_turn = "player2";

function check()
{
	console.log("answer: " + answer);
	if(answer = get_number1 * get_number2)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else if(answer_turn == "player2")
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}
