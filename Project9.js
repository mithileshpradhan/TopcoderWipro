
    var  b = document.querySelector('body');

    var compactDisk = {
      name : 'Arman Malik',
      publisher : 'T Series',
      price: 1000
  }

function displayAllDetails(){
    console.log('hi');
    var finalPrice = compactDisk.price + compactDisk.price*0.1 - compactDisk.price*0.03;
    
   b.innerHTML = 'Final Price is : ' +finalPrice;
    

}
displayAllDetails();

