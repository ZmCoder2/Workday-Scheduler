var saveBtn = $(".saveBtn");

// This function displays the correct Date and time for the user
$(document).ready(function() {
  var today = dayjs().format("MMM D YYYY");
  var time = dayjs().format("h:mma")
  $("#currentDay").text(today);
  $("#currentTime").text(time)

  var currentTime = dayjs().hour();
  var timeBlock = $(".time-block");

  // The function has the time boxes change colors depending on if they are past, present, or future
  timeBlock.each(function () {
    var hourId = $(this).attr("id");
    if (hourId < currentTime) {
      $(this)
        .children(".description")
        .attr("class", "col-8 col-md-10 description past");
    } else if (hourId < currentTime) {
      $(this)
        .children(".description")
        .attr("class", "col-8 col-md-10 description future");
    } else {
      $(this)
        .children(".description")
        .attr("class", "col-8 col-md-10 description present");
    }
  });

  // This is the function that saves what the user wants to save to the local storage and is supposed to save when the user leaves the page.
  saveBtn.on("click", function (event) {
    event.preventDefault();
    var value = $(this).siblings(".description").val().replace(key);
    var key = $(this).parent().attr("id");
    localStorage.setItem(key, JSON.stringify(value));
  });
  for (var i = 9; i <= 17; i++) {
    $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)));
  }
});
console.log(localStorage)
