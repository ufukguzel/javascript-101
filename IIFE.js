let funModule = (function(){
    return {
      isCuteMixin: function(obj){
        obj.isCute = function(){
          return True;
        };
      },
      singMixin: function(obj){
        obj.sing = function(){
          console.log("Singing to an awesome tune");
        };
  
      },
    }
  })();
//ı used IIFE to Create a Module  