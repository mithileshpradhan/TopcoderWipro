window.onload = function(){
   
    ask();
    function ask(){
          var query = prompt('Do you want to change color Yes/No');
          
          if(query === 'Yes' || query === 'yes')
          {
          changeColor();
          setTimeout(ask,0)
          }
          if(query === 'No' || query === 'no'){
            clearTimeout();
          }
    
    
    }




function changeColor(){
        var backColor = prompt('Enter Background Color for the page');
        var foreColor = prompt('Enter Foreground Color for the page');

        document.querySelector('body').style.background = backColor;
        document.querySelector('body').style.color = foreColor;
       
         }
}
