function scroltoTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
  var shopphingcard = [];
function AddtoBask(merch) {
  var elmId = merch.dataset.merchId;
  const btns=document.querySelectorAll('h3[data-id]');
  for (var i = 0; i < btns.length; i++) {
      var id = btns[i].getAttribute('data-id');
    if(elmId == id){
      shopphingcard.unshift(id);
      let uniqueChars = shopphingcard.filter((c, index) => {
    return shopphingcard.indexOf(c) === index;
    });
      console.log(uniqueChars);
    }
    else {

    }
  }
}
var totaal = [];
var sum = 0;
function Afreken(merch){

  const btns=document.querySelectorAll('h3[data-id]');
  let uniqueChars = shopphingcard.filter((c, index) => {
    return shopphingcard.indexOf(c) === index;
  });
  for (var i = 0; i < uniqueChars.length; i++) {
    ok = uniqueChars[i];
    const btns=document.querySelectorAll('h3[data-id]');
    let contents = btns[ok-1].innerHTML;
    console.log(contents);
    totaal.unshift(parseInt(contents));
    console.log(totaal);

  }
  var sum = totaal.reduce((x, y) => x + y);
  document.getElementById("tot").innerHTML = "Totaal : $" + sum;
  document.getElementById("wow").style.display = "grid";
  document.getElementById("background").style.display = "block";
  totaal = [];
  sum = 0;
}
function Payed(){
  alert("Thank you for Buying our Merchandize")
  document.getElementById("wow").style.display = "none";
  document.getElementById("background").style.display = "none";
}
