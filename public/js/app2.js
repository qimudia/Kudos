$(function() {

    (function() {
      $("#viewPage").hide();
      $("#giveKudos").hide();
      $("#viewKudos").hide();
    })();
  
    const showView = function() {
      $("section").hide();
      $("#viewPage").show();
    };
  
    const viewKudos = function() {
      $("section").hide();
      $("#viewKudos").show();
    };
  
    const giveKudos = function() {
      $("section").hide();
      $("#giveKudos").show();
    };
  
    $("#home").on("click", showView);
    $("#view_all").on("click", viewKudos);
    $("#give_kudos").on("click", giveKudos);
  
    const render = function(kudosList) {
      $("#content").empty();
      for (let i = 0; i < kudosList.length; i++) {
        $("#content").append(`<h3>${kudosList[i].title}</h3>`);
        $("#content").append(`<p>${kudosList[i].senderUserId}</p>`);
        $("#content").append(`<p>${kudosList[i].receiverUserId}</p>`);
        $("#content").append(`<p>${kudosList[i].body}</p>`);
      }
    };
  
    const getKudos = function() {
      $.get("/api/kudos").then(render);
    };
    getKudos();
  
    const postKudos = function(event) {
      event.preventDefault();
      //console.log('clicked')
      // Save the input in an object called 'kudos'
      const kudos = {
        senderUserId: $("#sender")
          .val()
          .trim(),
        receiverUserId: $("#receiver")
          .val()
          .trim(),
        title: $("#kudos-title")
          .val()
          .trim(),
        body: $("#kudos-body")
          .val()
          .trim()
      };
      console.log("items", kudos);
  
      // POST the article object to /api/kudos
      $.post("/api/kudos", kudos)
        .then(function(data) {
          res.json(data);
        })
        .catch(function(err) {
          res.json(err);
        });
      // After receiving a response, call getKudos
      getKudos();
  
      // Blank our inputs after POST
      $("#kudos-title").val("");
      $("#kudos-body").val("");
      $("#sender").val("");
      $("#receiver").val("");
    };
  
    $("#kudos-btn").on("click", postKudos);
  
    const firstviewK = function(event) {
      event.preventDefault();
      render();
    };
    $("#home").on("click", firstviewK);
  
    const renderKudos = function(items) {
      const newDiv = $("<div>");
  
      newDiv.text(items.body);
      return newDiv;
    };
  
    const showAllKudos = function(event) {
      event.preventDefault();
      // render();
      $.get("/api/kudos").then(function(data) {
        data.forEach(item => {
          $("#testContent").append(renderKudos(item));
        });
      });
    };
  
    $("#view_all").on("click", showAllKudos);
  });
  