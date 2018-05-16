var count = 0;
function vowelsCount(str){
    
    for(var i = 0 ; i < str.length ; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'){
            count++;
            document.getElementById('p1').innerHTML += str[i] + " ";


        }
    }
    document.getElementById('p2').innerHTML = count;
}
var str = prompt('Enter Your String');
vowelsCount(str);