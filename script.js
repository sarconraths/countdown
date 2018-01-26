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


  if(date1["d"] == date2["d"] && date1["m"] == date2["m"] && date1["y"] == date2["y"]) {
    alert("YEAHHHH");
  } else {
    go();
  }

  function go() {
    if(date1["y"] == date2["y"] && date1["m"] == date2["m"]){
      days_to_go = date2["d"] - date1["d"];
    }else if(date1["y"] == date2["y"]){
      goMonths();
    }
  }

  function goMonths() {
    var months31 = [1,3,5,7,8,10,12];
    var months30 = [4,6,9,11];

    if(months31.indexOf(date1["m"]) != -1){
      goMonths31();
    }else if(months30.indexOf(date1["m"]) != -1){
      goMonths30();
    }else{
      console.log("it's feburary and I don't know what to do :()")
    }

    function goMonths31(){
      console.log("month has 31 days");
    }

    function goMonths30(){
      console.log("month has 30 days");
    }

  }
}
