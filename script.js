function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    //value < 1 ? value = 1 : '';
    //Or, a Simple If Else will do the same thing :)
    if(value<1){
        value=1;
    }else{

    }
    value--;
    document.getElementById('number').value = value;
  }