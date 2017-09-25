//Business logic
function Task(title, notes) {
  this.title = title;
  this.notes = notes;
}

Task.prototype.fullTask = function() {
  return this.title;
}




//UserInterface logic
$(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTitle = $("input#title").val().toUpperCase();
    var inputtedNotes = $("input#notes").val();

    var newTask = new Task(inputtedTitle, inputtedNotes);

    $("ul#tasks").append("<li><span class = addTask>" + newTask.fullTask() + "</span></li>");

    $("input#title").val("");
    $("input#notes").val("");

    $(".addTask").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newTask.title);
      $(".title").text(newTask.title);
      $(".notes").text(newTask.notes);
    })

  })
})
