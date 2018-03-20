// BUDGET CONTROLLER
var budgetController = (function() {
	var x = 23;
	
	var add = function(a) {
		return x + a;
	}
	
	return {
		publicTest: function(b) {
			return add(b);
		}
	}
	
})();



// UI CONTROLLER
var UIController = (function() {
	
	var DOMstrings = {
		inputType: '.add__type',
		inputDesc: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	}
	
	
	return {
		getinput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value,
				desc: document.querySelector(DOMstrings.inputDesc).value,
				value: document.querySelector(DOMstrings.inputValue).value
			}		
		},
		
		getDOMstrings: function() {
			return DOMstrings;
		}
	};

})();




// MAIN CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
	
	var ctrlAddItem = function() {
	var DOM = UICtrl.getDOMstrings;
		
		
		//1. Get the filed input data
		var input = UICtrl.getinput();
		console.log(input);
		
		
		//2. Add the item to the budget controller
		
		//3. Add the item to the UI
		
		//4. Calculate the budget
		
		//5. Display the budget on the UI
	}
	
	
	document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
	
	document.addEventListener('keypress', function(e) {
		if (e.keyCode == 13 || e.which === 13) {
			ctrlAddItem();	
		}
	});
	
	
	
})(budgetController, UIController);



