var marks = [80 , 90 ,56 ,89, 34 ,78 , 99 , 70 , 30 ,83];
var sum = 0,avg = 0;

for(var i = 0 ; i < marks.length ; i++)
{
    sum = sum + marks[i];
    avg = sum/3;
}
 console.log(avg);