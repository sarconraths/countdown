$('document').ready(function(){

    // on pageload, this will get the current date and create variables to easily work with day,month and year
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();

    // create date1 object as current date for the actual day-counting later on
    date1 = {
      "d" : day,
      "m" : month,
      "y" : year,
    }

    // write the current date in the specified span for it
    $('#current_date').html(create_the_date(day, month, year));


    //upon clicking the date setting button on the form, this will read the numbers that were put in
    $('#set_date').click(function(){
      dayF = $('#enter_day').val();
      monthF = $('#enter_month').val();
      yearF = $('#enter_year').val();

      //create date2 object, date that was put in with day, month and year in a calculatable format
      date2 = {
        "d" : dayF,
        "m" : monthF,
        "y" : yearF,
      }

      // write the future date in the specified span for it
      $('#future_date').html(create_the_date(dayF, monthF, yearF));

      // trigger day-counting function as well
      count_the_days(date1, date2);
    });

// function that corrects the displayed date if e.g. january 1: 1.1. -> 01.01.
function create_the_date(day, month, year) {
  if(month.toString().length < 2) {
    month = "0"+month;
  }
  if(day.toString().length < 2) {
    day = "0"+day;
  }
  return((day) + "." + (month) + "." + (year));
}

// KEY function - take the two dates and count the days
function count_the_days(date1, date2){
  var days_to_go = 0;
  var original_month = date1["m"];
  var original_year = date1["y"];

  var day1 = parseInt(date1["d"]);
  var day2 = parseInt(date2["d"]);
  var month1 = parseInt(date1["m"]);
  var month2 = parseInt(date2["m"]);
  var year1 = parseInt(date1["y"]);
  var year2 = parseInt(date2["y"]);

  var months31 = [1,3,5,7,8,10,12];
  var months30 = [4,6,9,11];

  //Fall 0
  if(year1 == year2 && month1 == month2 && day1 == day2) {
    $('#result').html('The day has come!');
  //Fall 1
} else if(original_year == year2 && original_month == month2) {
    days_to_go += day2 - day1;
    terminate();
  //Fall 2
} else if(original_year == year2 && original_month != month2) {
      sameYear();
  }

  //Fall 2
  function sameYear() {
    //Fall 2.1
    if(month1 == original_month){
      if(months31.indexOf(month1) != -1){
        days_to_go += (31 - day1);
      }else if(months30.indexOf(month1) != -1){
        days_to_go += (30 - day1);
      }else{
        if(isLeap(year1) == true){
          days_to_go += (29 - day1);
        } else {
          days_to_go += (28 - day1);
        }
      }
    month1++;
    sameYear();
    //Fall 2.2
    }else if(month1 != original_month && month1 != month2){
      addFullMonth(month1, year1);
      month1++;
      sameYear();
    }else if(month1 == month2){
      days_to_go += day2;
      terminate();
    }
  }

  function addFullMonth(month1, year1){
    if(months31.indexOf(month1) != -1){
      days_to_go += 31;
    } else if(months30.indexOf(month1) != -1){
      days_to_go += 30;
    } else {
      goFebruary(year1);
    }
  }

  function goFebruary(y){
    if(isLeap(y)){
      days_to_go += 29;
    }else{
      days_to_go += 28;
    }
  }

  function terminate(){
    $('#num_of_days').html(days_to_go);
  }

function isLeap(y){
  if((y % 400 == 0) || (y % 100 != 0) && (y % 4 == 0)){
    return true;
  }else
    return false;
  }
  console.log(isLeap(2020));
}

});
