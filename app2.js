var Employee = {

		name: 'Employee Name',
		age: 'Age',
		salary: 'Salary',
		address: {
			city : 'city',
			state :'state',
			pincode : 'pincode'
		},
		fun: function(){
			return this.name + ", " + this.age + ", "+ this.salary +", "+ this.address.city +", "+ this.address.state +" and "+ this.address.pincode;
		}

	}; // []--> Array {}--> Object

		console.log(Employee.fun())