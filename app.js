var budgetController = (function () {
  var x = 23;

  var add = function (a) {
    return x + a;
  };

  return {
    publicTest: function (b) {
      return add(b);
    }
  }
})();

var UIController = (function () {
  /* UI Controller */
})();

var controller = (function (budgetCtrl, UICtrl) {

  $('.add__btn').click(function ctrlAddItem () {
    console.log('Button pressed.')

  });

  $(document).keypress(function (e) {

    if(e.keyCode === 13 || e.which === 13 ){
      console.log('ENTER Pressed.');
      ctrlAddItem();
    }

  });

})(budgetController, UIController);

