var name_person =document.getElementById("name_person");
var dob =document.getElementById("dob");
var city =document.getElementById("city");
var mailid =document.getElementById("mailid");
var phone =document.getElementById("phone");
var rating =document.getElementById("rating");











function checker()
{
	

	var n = name_person.value;
    console.log(n);
    var letters = /^[A-Za-z _]*$/
    if(n.length<=15)
    {
    	if(n.match(letters))
    	{
    		console.log("The name is correct")
    	}
    	else
    	{
    		console.log("Length correct but patter mismatch")
    	}
    }
    else
    {
    	console.log("Length Exceeded")
    }

    console.log("-----------------------------------");
	today = new Date();
	dob1 = new Date(dob.value);

	var currYear = today.getFullYear();
	var currMonth = today.getMonth();
	var currDate = today.getDate();
	console.log("CURRENT "+ currYear + "  "+ currMonth +" "+ currDate);

	console.log("DOB" + dob1.getFullYear() + "  "+dob1.getMonth() +" "+ dob1.getDate());


	if(currYear - dob1.getFullYear() >18)
	{
		console.log("Greater than 18");
	}
	else if(currYear - dob1.getFullYear() == 18 )
	{
		if(currMonth - dob1.getMonth()>0)
		{
			console.log("Greater than 18 by months");

		}
		else if(currMonth - dob1.getMonth()== 0)
		{
			if(currDate - dob1.getDate()>0)
			{
				console.log('Greater than 18 by days');
			}
			else
			{
				console.log("Lesser than 18 by days");
			}
		}
		else
		{
			console.log("Lesser than 18 by months");
		}	
	}
	else
	{
		console.log("Lesser than 18 by years");
	}



	console.log("-----------------------------------");

	var p = phone.value;
	console.log(p);
	var wrong = 0
	
	if(p.length==13)
	{
		for(var i=0;i<p.length;i++)
		{
			if(i==0)
			{
				if(p[i]!='+')
				{
					wrong = 1;
					console.log("Number entered has no + at the start");
					break;

				}		
			}
			else if(i == 1)
			{
				if(p[i]!=9)
				{
					wrong = 1;
					console.log("Sorry First country code wrong")
					break;
				}
			}
			else if(i == 2)
			{
				if(p[i]!=1)
				{
					wrong = 1;
					console.log("Sorry second contry code wrong")
					break;
				}	
			}
			else if(i>=3)
			{
				if((p[i]>=0)&&(p[i]<=9))
				{
					continue;
				}
				else
				{
					wrong = 1;
					console.log("It should only be numbers")
					break;
				}
			}
		}	
	}

    else
    {
    	console.log("Number length wrong")
    	wrong = 1
    }

    if(wrong == 0)
    {
    	console.log("Number was correct")
    }	
    else
    {
    	console.log("Number was wrong")
    }

	console.log("-----------------------------------");
	var r = rating.value;
	console.log("Rating : " + r)
	if((r<1) || (r>5))
	{
		console.log("Rating value should be between 1 and 5");
	}
	else
	{
		console.log('rating value correct');
	}
	
}