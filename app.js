
$(document).ready(function(){
	
$("form").submit(function( event ) { 
    event.preventDefault();
    //creates and empty object, and a variable for inputs on the form
    //puts EACH input into a function and calls the VALUE    
      var values = {};     
       var $inputs = $("input");       
         $inputs.each(function(){         
         	 values[this.name] = $(this).val(); 
         }); 
       var review = $('input[name=num]:checked').val();
       values.num = review;
       console.log(review);
 
         console.log(values);
         
var color = "";

		//make color switch here
		function colorChange(review){
		 
			switch(review){
			case 1:
			color = "purple";
			break;
			case 2:
			color = "red";
			break;
			case 3:
			color = "blue";
			break;
			case 4:
			color = "green";
			break;
			case 5:
			color = "orange";
			break;
			default:
			color = "white";
			}
				return color;
			}

         //values has the objects
         // console.log(values);      
        var $employees = $("<li>" + values.firstName + " " 
         	+ values.lastName + ", " + values.employeeNumber + ", " 
         	+ values.title + ", " + review + ", " 
         	+ values.salary + " " + "</li>");   
    	
    	$(".employeeInfo").append($employees);
    	$("<li>").append(color);


		    

          //make a remove button
          var $button = $('<button>');
          $button.text('Delete');
          $employees.append($button);

          //remove that button, which is connected to the employees
          $button.on('click', function(event){
			event.preventDefault();
			$employees.remove();
		})

      });

	});

	







	// var Employee = function(firstName, lastName, employeeNumber, title, lastReview, salary){ 

	// 	this.firstName = firstName;
	// 	this.lastName = lastName;
	// 	this.employeeNumber = employeeNumber;
	// 	this.title = title;
	// 	this.salary = salary;
	// 	this.salary = salary;
	// };


	// if (review === "1" ) {
		    //   $("span").text("Validated...");
		    //   return;


 
