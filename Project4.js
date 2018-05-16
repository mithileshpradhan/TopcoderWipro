var arr = ['mithilesh' , 'krishna' , 'buland' , 1, true]

function arrayReverse(arr){
 
for(var i = arr.length-1 ; i >= 0 ; i--)
{
    console.log(arr[i]);
}

}

function arraySize(arr){
   console.log('Size of given array is: ',arr.length);
}

arrayReverse(arr);
arraySize(arr);
