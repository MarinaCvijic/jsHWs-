
//Task 1

var person = {
	name: "Mike",
	age: 28,
	married: true
}

function dataChange(a){
	a.age = 34;
	delete a.married;
}
(dataChange(person))
console.log(person)

//Task 2

var personData = {
	name: "Jack",
	age: 32,
	married: true
}

function dataCheck(b){
	if (b.children) {
		console.log(b)
	} else { b.children = [];
		 b.children[0] = {name:"Tom", age:12, gender:"male"};
		b.children[1] = {name:"Ann", age:12, gender:"female"};
		
		console.log(personData)
	}
}
	dataCheck(personData)


//Task 3

var students = [
{
	name: "Mike",
	age: 28,
	passed: false
},
{
	name: "Anna",
	age: 23,
	passed: true
},
{
	name: "Jack",
	age: 32,
	passed: true
}
];
	
function studentsExam(c){
	for (var i = 0; i < c.length; i++){
	if (c[i].passed === true) {
		console.log(c[i].name + " passed exam.")
	} else { 
		
		console.log(c[i].name + " didn't pass exam.")
	}
}
}
	studentsExam(students)

//Task 4




function repackData(d){
		var names = [];
		var ages = [];
		var passed = [];

	for (var i = 0; i < d.length; i++){
		
		names[names.length] = d[i].name;
		ages[ages.length] = d[i].age;
		passed[passed.length] = d[i].passed;
		
	}
	console.log(names,ages,passed);
}
	repackData(students)

//Lecture tasks

//Task 1

var schoolTask = {

	name:'Jim',
	age: 45,
	married: true,
	children: [
	{
		name: 'Mike',
		age: 12
	},
	{
		name: 'Anna',
		age: 14
	},
	{
		name: 'Peter',
		age:10
	}
	],	

	child:function (){

		var oldestChild = this.children[0].age;
		var max = 0;
		var childrenOne = [];
	for (var i = 0; i < this.children.length; i++){

			if (oldestChild < this.children[i].age){
				oldestChild = this.children[i].age;
					max = i;
						
						} 
			}
	for (var i = 0; i < this.children.length; i++){

			if (i!==max){
				childrenOne[childrenOne.length] = this.children[i];
					
						
				} 
			}
			children = childrenOne;
			console.log(children)
			

	}
}
		
schoolTask.child()

//Task 2

var ufcFighters = [["Conor McGregor","$120 Million",21],["Khabib Nurmagomedov","$30 Million",29],
["Cris Cyborg","$6 Million",22],["Amanda Nunes","$1 Million",20]];

function ufc(fighters){

	var ufcFightersRepacked = {};
	

	for (var i = 0; i < fighters.length; i++){

		 var fighter = fighters[i];
		 
        	ufcFightersRepacked[i] = {
            name: fighter[0],
            worth : fighter[1],
            wins: fighter[2]
        };

		}

	console.log(ufcFightersRepacked)
}

	ufc(ufcFighters)

	