 // JAVASCRIPT FOR JS DATA VIZ 


//Size bars according to percentage value

function size_bars() {

	var height;

    $(".bar").each(function(){
      
      height = Number($(this).attr("data-num")) * 4;

      $(this).css("height",height+"px");
      $(".bar:after").css("left",height+"px");

      if (height <= 20) {
      	$(this).css("color","#707070");
      } 
      else {
        $(this).css("color","#ffffff");
      }
      
    });
    

}

//Array order: X1, X2, X3, X4, Y1, Y2, Y3

var question_1 = 

[{"0":0.3,"1":97.5,"2":2.2},
{"0":1.2,"1":83.3,"2":15.6},
{"0":0.3,"1":92.8,"2":6.9},
{"0":1.4,"1":65.7,"2":33.0},
{"0":0.4,"1":15.4,"2":84.3},
{"0":0.7,"1":19.1,"2":80.3},
{"0":0.6,"1":49.2,"2":50.2}];

var question_2 = 

[{"0":0.8,"1":21.6,"2":77.6},
{"0":0.4,"1":76.3,"2":23.3},
{"0":0.2,"1":74.4,"2":25.4},
{"0":1.4,"1":19.5,"2":79.2},
{"0":0.4,"1":90.7,"2":9.0},
{"0":0.3,"1":90.6,"2":9.1},
{"0":0.2,"1":78.0,"2":21.7}];

var question_3 = 

[{"0":0.4,"1":98.6,"2":1.0},
{"0":1.2,"1":84.8,"2":14.0},
{"0":0.7,"1":95.2,"2":4.2},
{"0":0.7,"1":79.2,"2":20.1},
{"0":0.5,"1":13.1,"2":86.4},
{"0":0.8,"1":22.1,"2":77.2},
{"0":1.2,"1":82.0,"2":16.8}];

var question_4 = 

[{"0":0.5,"1":2.2,"2":97.2},
{"0":1.6,"1":37.7,"2":60.7},
{"0":0.6,"1":10.5,"2":88.8},
{"0":1.4,"1":15.6,"2":83.1},
{"0":1.0,"1":66.0,"2":33.0},
{"0":1.2,"1":60.3,"2":38.5},
{"0":0.5,"1":13.6,"2":85.9}];

var question_5 = 

[{"0":1.4,"1":87.6,"2":11.0},
{"0":1.2,"1":38.1,"2":60.7},
{"0":1.9,"1":22.6,"2":75.5},
{"0":1.6,"1":31.6,"2":66.8},
{"0":1.1,"1":2.3,"2":96.6},
{"0":1.4,"1":7.9,"2":90.7},
{"0":1.2,"1":14.1,"2":84.8}];

var question_6 = 

[{"0":0.6,"1":84.4,"2":15.0},
{"0":0.8,"1":58.8,"2":40.5},
{"0":0.8,"1":52.7,"2":46.4},
{"0":0.5,"1":87.4,"2":12.1},
{"0":0.4,"1":21.9,"2":77.8},
{"0":0.6,"1":7.2,"2":92.2},
{"0":0.6,"1":61.0,"2":38.4}];

var question_7 = 

[{"0":1.2,"1":3.4,"2":95.4},
{"0":1.2,"1":35.4,"2":63.4},
{"0":1.5,"1":31.0,"2":67.5},
{"0":1.8,"1":21.5,"2":76.7},
{"0":0.4,"1":96.4,"2":3.2},
{"0":2.1,"1":88.2,"2":9.7},
{"0":1.5,"1":89.6,"2":8.9}];

var question_8 = 

[{"0":0.4,"1":61.3,"2":38.2},
{"0":0.4,"1":65.0,"2":34.6},
{"0":0.3,"1":65.1,"2":34.6},
{"0":0.0,"1":9.6,"2":90.4},
{"0":1.0,"1":32.9,"2":66.1},
{"0":0.9,"1":73.3,"2":25.8},
{"0":0.7,"1":15.0,"2":84.3}];



//Calculate bar height based upon question data in JSON array

function bars_height(question) {

		//Loop through the "1" bars, updating data-nums
		$(".answer-1").each(function(i){

            $(this).attr("data-num",(Math.round(window["question_"+question][i][1])));            

		});


        //Loop through the "2" bars, updating data-nums
        $(".answer-2").each(function(i){

            $(this).attr("data-num",(Math.round(window["question_"+question][i][2])));            

        });

		//Run size_bars() function
		size_bars();

}	




var question_details = 

[{"question_no":"1","question_desc":"This is the text for question 1...This is the text for question 1...This is the text for question 1"},
{"question_no":"2","question_desc":"This is the text for question 2...This is the text for question 2...This is the text for question 2"},
{"question_no":"3","question_desc":"This is the text for question 3...This is the text for question 3...This is the text for question 3"},
{"question_no":"4","question_desc":"This is the text for question 4...This is the text for question 4...This is the text for question 4"},
{"question_no":"5","question_desc":"This is the text for question 5...This is the text for question 5...This is the text for question 5"},
{"question_no":"6","question_desc":"This is the text for question 6...This is the text for question 6...This is the text for question 6"},
{"question_no":"7","question_desc":"This is the text for question 7...This is the text for question 7...This is the text for question 7"},
{"question_no":"8","question_desc":"This is the text for question 8...This is the text for question 8...This is the text for question 8"}];


function question_click() {

	//Darken background color of selected question number 

	$(".question-num").click(function() {

		$(".question-num").removeClass("selected-question");
		$(this).addClass("selected-question");

		var chosen_question = $(this).attr("data-num");

		

		//Match question details to correct question from JSON array "question_details"
		var selected_question_details = $.grep(question_details, function(e) {	
			return (e.question_no === chosen_question);
		});

		

		//Show question details based on selected question
		$(".q-header span").html(selected_question_details[0].question_no);
		$(".q-desc").html(selected_question_details[0].question_desc);

		//Dynamically change out numerical data for bars based on question number
        bars_height(chosen_question);

	});

	
}	


//Initialize functions

$(document).ready(function(){


	question_click();

	bars_height(1); //run bars_heaight() on the first question's data

});	