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

  var DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputAddButton: '.add__btn'
  };

  return {
    getinput: function () {
      return{
        $type: $(DOMStrings.inputType).val(),
        $description: $(DOMStrings.inputDescription).val(),
        $value: $(DOMStrings.inputValue).val()
      }
    },

    getDOMStrings: function () {
      return DOMStrings;
    }

  };  



})();

var controller = (function (budgetCtrl, UICtrl) {

  var setupEventListeners = function () {
  var DOM = UICtrl.getDOMStrings();
    $(document).keypress(function (e) {

      if(e.keyCode === 13 || e.which === 13 ){
        console.log('ENTER Pressed.');
        ctrlAddItem();
      }

    });

    $(DOM.inputAddButton).click(function () {
      console.log('BUTTON manually pressed.');
      ctrlAddItem();
    });

  };



  var ctrlAddItem = function () {
    var input = UIController.getinput();
    console.log(input);
  };



/*  $(document).keypress(function (e) {

    if(e.keyCode === 13 || e.which === 13 ){
      console.log('ENTER Pressed.');
      ctrlAddItem();
    }

  });*/

  return{
    init: function () {
      console.log('Application started');
      setupEventListeners();
    }
}

})(budgetController, UIController);

controller.init();