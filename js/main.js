  $(function(){

    $("#typed").typed({
      strings: ["Welcome to my space on the web!", "Here is where I host my freelance work!","I am a Developer", "Click below to find me on GitHub."],
      typeSpeed: 30,
      callback: function(){
        shift();
      }
    });

  });

  function shift(){
      $(".head-wrap").addClass("shift-text");
      terminalHeight();
  }

  function terminalHeight(){
      var termHeight = $(".terminal-height");
      var value = termHeight.text();
      value = parseInt(value);
      setTimeout(function(){
          if (value > 10){
              value = value-1;
              this.txtValue = value.toString();
              termHeight.text(this.txtValue);
              self.terminalHeight();
          }
          else{
              clearTimeout();
          }
      }, 10);
  }