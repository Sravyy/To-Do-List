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

    $("ul#tasks").append("<li><span class = addTask> <input type ='checkbox' name ='title' id='" + newTask.title+ "' value='"+ newTask.notes + "'>" + newTask.fullTask() + "</span></li>");


    $(".addTask").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newTask.title);
      $(".title").text(newTask.title);
      $(".notes").text(newTask.notes);

    });
    $("input#title").val("");
    $("input#notes").val("");

  });
    $("#remove").click(function() {
      $("input:checkbox[name=title]:checked").each(function() {
        $("#show-task").hide();
        $(this).parent().parent().remove();
      });
  });
});
