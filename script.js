  function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
  val1 = getRandom(1, 2); 
  val2 = getRandom(0, 9); 
  val3 = getRandom(1, 9); 
  val4 = getRandom(0, 9); 

  document.getElementsByClassName("One")[0].innerText = val1 ;
  document.getElementsByClassName("Two")[0].innerText = val2 ;
  document.getElementsByClassName("Three")[0].innerText = val3 ;
  document.getElementsByClassName("Four")[0].innerText = val4 ;

  window.onload = function () {
    if(!('hasThisRunBefore' in localStorage)) {
      document.getElementsByClassName("One")[0].innerText = 2 ;
      document.getElementsByClassName("Two")[0].innerText = 0 ;
      document.getElementsByClassName("Three")[0].innerText = 5 ;
      document.getElementsByClassName("Four")[0].innerText = 7 ;
      localStorage.setItem("hasThisRunBefore", true);
    }
}