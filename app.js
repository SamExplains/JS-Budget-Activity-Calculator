var budgetController = (function () {

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems : {
      expense: [],
      income: []
    },
    totals: {
      expense: 0,
      income: 0
    }
  };
  
  return {
    addItem: function (type, des, val) {
      var newItem, ID;
      /*Create a new ID*/

      console.warn('FROM WITHIN allItem :' + type);

      if (data.allItems[type].length > 0){
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }


      /*Create new item based on INC/EXP from data structure*/
      if(type === 'expense'){
        newItem = new Expense(ID, des, val);
      } else if (type === 'income'){
        newItem = new Income(ID, des, val);
      }

      /*Add to data structure*/
      data.allItems[type].push(newItem);
      return newItem;
    },

    testing: function () {
      console.log(data);
    }

  };


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
        type: $(DOMStrings.inputType).val(),
        description: $(DOMStrings.inputDescription).val(),
        value: $(DOMStrings.inputValue).val()
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
    var input, newItem;

    input = UIController.getinput();
    console.log(input);

    newItem = budgetCtrl.addItem(input.type, input.description, input.value);


  };

  return{
    init: function () {
      console.log('Application started');
      setupEventListeners();
    }
}

})(budgetController, UIController);

controller.init();