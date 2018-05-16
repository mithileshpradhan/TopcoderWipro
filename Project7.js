var btn = document.querySelector('button');
btn.addEventListener('click',function(){
    var value = prompt('Enter Your Donation Amount');
    alert('You Donated Rs.'+value);
})