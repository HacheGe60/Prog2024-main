const prueba1 = () => {
	const sum = (a, b) => a + b;
	alert(sum(1, 3));
	alert(sum(2, 5));
};

const prueba2 = () => {
	const multiplicacion = (a, b) => a * b;
	alert(multiplicacion(2, 4));
	alert(multiplicacion(3, 2));
};

const prueba3 = () => {
	alert('Linda!'.length);
};

const prueba4 = () => {
	let text = 'Hola Mundo';
	alert(text.length);
};

const prueba5 = () => {
	alert('HOLA MUNDO'.toLowerCase());
};

const prueba6 = () => {
	alert('hola mundo'.toUpperCase());
};

const prueba7 = () => {
	function sum(a, b) {
		console.log(a);
		console.log(a + b);
		return a + b;
	}
	sum(1, 3);
};

const prueba8 = () => {
	function getCharCount(str) {
		return str.length;
	}
	alert(getCharCount('Sam'));
	alert(getCharCount('Alex 123'));
	alert(getCharCount('Charley is here'));
};

const prueba9 = () => {
	function shoutMyName(name) {
		return name.toUpperCase();
	}
	alert(shoutMyName('Sam'));
	alert(shoutMyName('Charley'));
	alert(shoutMyName('alex'));
};

const prueba10 = () => {
	function lowerName(name) {
		return name.toLowerCase();
	}
	alert(lowerName('Sam'));
	alert(lowerName('ALEX'));
};

const prueba11 = () => {
	const language = 'JavaScript';
	alert(language[0]);
	alert(language[1]);
	alert(language[2]);
};

const prueba12 = () => {
	const language = 'JavaScript';
	console.log(language[1]);
};

const prueba13 = () => {
	const language = 'JavaScript';
	alert(language[language.length - 2]);
};

const prueba14 = () => {
	const language = 'JavaScript';
	console.log(language.at(0)); // "J"
	console.log(language.at(1)); // "a"
	console.log(language.at(-1)); // "t"
	console.log(language.at(-2)); // "p"
};

const prueba15 = () => {
	function getFirstCharacter(name) {
		return name[0];
	}

	// Ejemplos
	console.log(getFirstCharacter('Amsterdam')); // A
	console.log(getFirstCharacter('Japan')); // J
};

const prueba16 = () => {
	function getLastCharacter(name) {
		return name.at(-1);
	}
	// Ejemplos
	console.log(getLastCharacter('Sam')); // m
	console.log(getLastCharacter('Alex')); // x
	console.log(getLastCharacter('Charley')); // y
};

const prueba17 = () => {
	const language = 'JavaScript';
	return console.log(language.substring(1, 4));
};

const prueba18 = () => {
	const language = 'JavaScript';
	return console.log(language.substring(4));
};

const prueba19 = () => {
	function skipFirstCharacter(text) {
		return text.substring(1);
	}
	// Ejemplos
	console.log(skipFirstCharacter('Xcode')); // code
	console.log(skipFirstCharacter('Hello')); // ello
};

const prueba20 = () => {
	console.log('Hello' + 'World');
};

const prueba21 = () => {
	let prefix = 'Mrs.';
	let name = 'Sam';
	let string = prefix + ' ' + name; // "Mrs. Sam"

	console.log(string);
};

const prueba22 = () => {
	let name = 'Sam';
	name = name + ' Blue';

	console.log(name); // "Sam Blue"
};

const prueba23 = () => {
	let name = 'Sam';
	name += ' Blue';

	console.log(name); // "Sam Blue"
};

const prueba24 = () => {
	let a = 2;
	let b = 'hello';

	console.log((a += 3)); // Suma
	// Resultado esperado: 5

	console.log((b += ' world')); // Concatenación
	// Resultado esperado: 'hello world'
};

const prueba25 = () => {
	let baz = true;

	// Booleano + Número -> adición
	console.log((baz += 1)); // 2

	// Número + Booleano -> adición
	console.log((baz += false)); // 2
};

const prueba26 = () => {
	let foo = 'foo';

	// Cadena de texto + Booleano -> concatenación
	console.log((foo += false)); // "foofalse"

	// Cadena de texto + Cadena de texto -> concatenación
	console.log((foo += 'bar')); // "foofalsebar"
};

const prueba27 = () => {
	let bar = 5;

	// Número + Número -> adición
	console.log((bar += 2)); // 7

	// Número + Cadena de texto -> concatenación
	console.log((bar += 'foo')); // "7foo"
};

const prueba28 = () => {
	let x = 1n;

	// BigInt + BigInt -> adición
	console.log((x += 2n)); // 3n

	// BigInt + Número -> devuelve TypeError
	console.log((x += 1)); // TypeError: Cannot mix BigInt and other types, use explicit conversions
};

const prueba29 = () => {
	function concatInitials(firstNameInitial, lastNameInitial) {
		return firstNameInitial + lastNameInitial;
	}

	// Ejemplos
	console.log(concatInitials('J', 'D')); // "JD"
	console.log(concatInitials('S', 'B')); // "SB"
};

const prueba30 = () => {
	let text = `Esta es una cadena
	de texto
	con varias
	líneas
	`;

	console.log(text);
};

const prueba31 = () => {
	let language = 'JavaScript';
	console.log(`Mi lenguaje favorito es ${language}`);
};

const prueba32 = () => {
	const text = `Usando el carácter de comilla invertida,
puedes definir una cadena que
abarque varias líneas.`;

	console.log(text);
};

const prueba33 = () => {
	const name = 'Sam';

	console.log(`Bienvenido ${name}.
Tienes ${2 * 5} notificaciones nuevas.`);
};

const prueba34 = () => {
	function sayHello(name) {
		return `Hola ${name}`;
	}

	// Ejemplos
	console.log(sayHello('Alex')); // "Hola Alex"
	console.log(sayHello('Sam')); // "Hola Sam"
};

const prueba35 = () => {
	function getFullName(firstName, lastName) {
		return `${firstName} ${lastName}`;
	}

	// Ejemplos
	console.log(getFullName('Sam', 'Doe')); // "Sam Doe"
	console.log(getFullName('Alex', 'Blue')); // "Alex Blue"
};

const prueba36 = () => {
	function getMultilineString() {
		return `I am learning JavaScript
		and I found it to be
		quite fun!`;
	}

	// Ejemplo
	console.log(getMultilineString());
};

const prueba37 = () => {
	function capitalize(word) {
		return word.at(0).toUpperCase() + word.substring(1).toLowerCase();
	}

	// Ejemplos
	console.log(capitalize('sam')); // "Sam"
	console.log(capitalize('ALEX')); // "Alex"
	console.log(capitalize('chARLie')); // "Charlie"
};

const prueba38 = () => {
	let answer = 42;
	let answerString = answer.toString();
	console.log(answerString); // "42"
};

const prueba39 = () => {
	let howMany = 10;

	console.log('howMany.toString() is ' + howMany.toString()); // muestra "10"
	console.log('45 .toString() is ' + (45).toString()); // muestra "45"

	let x = 7;
	console.log(x.toString(2)); // muestra "111"
};

const prueba40 = () => {
	function convertNumberToString(number) {
		return number.toString();
	}

	// Sample usage - do not modify
	console.log(convertNumberToString(42)); // "42"
	console.log(convertNumberToString(97)); // "97"
	console.log(convertNumberToString(11)); // "11"
};

const prueba41 = () => {
	function roughScale(x, base) {
		const parsed = Number.parseInt(x, base);
		if (Number.isNaN(parsed)) {
			return 0;
		}
		return parsed * 100;
	}

	console.log(roughScale(' 0xF', 16));
	// resultado esperado: 1500

	console.log(roughScale('321', 2));
	// resultado esperado: 0
};

const prueba42 = () => {
	let a = 10;
	let b = '20'; // nos olvidamos de convertir esta cadena a un número

	console.log(a + b); // '1020' (concatenación en vez de suma)
};

const prueba43 = () => {
	console.log(Number.parseInt('123abc', 10)); // 123
	console.log(Number.parseInt('5 meters', 10)); // 5
};

const prueba44 = () => {
	console.log(8 % 2); // El resto de la división es 0
	console.log(7 % 2); // El resto de la división es 1
};

const prueba45 = () => {
	console.log(13 % 5);
	// Resultado esperado: 3

	console.log(-13 % 5);
	// Resultado esperado: -3

	console.log(4 % 2);
	// Resultado esperado: 0

	console.log(-4 % 2);
	// Resultado esperado: -0
};

const prueba46 = () => {
	console.log(12 % 5); // 2
	console.log(1 % -2); // 1
	console.log(1 % 2); // 1
	console.log(2 % 3); // 2
	console.log(5.5 % 2); // 1.5
};

const prueba47 = () => {
	console.log(-12 % 5); // -2
	console.log(-1 % 2); // -1
	console.log(-4 % 2); // -0
};

const prueba48 = () => {
	console.log(NaN % 2); // NaN
};

const prueba49 = () => {
	console.log(Infinity % 2); // NaN
	console.log(Infinity % 0); // NaN
	console.log(Infinity % Infinity); // NaN
};

const prueba50 = () => {
	console.log(Math.round(2.1)); // 2
	console.log(Math.round(2.6)); // 3
	console.log(Math.round(2.5)); // 3

	console.log(Math.floor(2.1)); // 2
	console.log(Math.floor(2.6)); // 2
	console.log(Math.floor(2.5)); // 2

	console.log(Math.ceil(2.1)); // 3
	console.log(Math.ceil(2.6)); // 3
	console.log(Math.ceil(2.5)); // 3
};

const prueba51 = () => {
	let name = 'Sam';
	console.log(name); // "Sam"
};

const prueba52 = () => {
	let language = 'C++';
	console.log(language); // "C++"

	language = 'JavaScript';
	console.log(language); // "JavaScript"
};

const prueba53 = () => {
	let sum = 0;
	console.log(sum); // 0
	sum += 1;
	console.log(sum); // 1
};

const prueba54 = () => {
	function varTest() {
		var x = 31;
		if (true) {
			var x = 71; // ¡misma variable!
			console.log(x); // 71
		}
		console.log(x); // 71
	}

	function letTest() {
		let x = 31;
		if (true) {
			let x = 71; // variable diferente
			console.log(x); // 71
		}
		console.log(x); // 31
	}

	//llamamos a las funciones
	varTest();
	letTest();
};

const prueba55 = () => {
	var x = 'global';
	let y = 'global';

	console.log(this.x); // "global"
	console.log(this.y); // undefined
};

const prueba56 = () => {
	function prueba() {
		var num = 33;
		if (true) {
			let num = num + 55; // ReferenceError: no se puede acceder a la declaración léxica 'num' antes de la inicialización
		}
	}
	prueba();
};

const prueba57 = () => {
	var a = 5;
	var b = 10;

	if (a === 5) {
		let a = 4; // El alcance es dentro del bloque if
		var b = 1; // El alcance es global

		console.log(a); // 4
		console.log(b); // 1
	}

	console.log(a); // 5
	console.log(b); // 1
};

const prueba58 = () => {
	for (let i = 0; i < 10; i++) {
		console.log(i); // 0, 1, 2, 3, 4 ... 9
	}

	console.log(i); // ReferenceError: i is not defined
};

const prueba59 = () => {
	const language = 'C++'; // Cannot be re-assigned anymore
	console.log(language); // "C++"

	language = 'JavaScript'; //  Error de tipo: esto interrumpirá tu script
};

const prueba60 = () => {
	let count = 0;
	console.log({ count }); // count: 0

	count += 1;
	console.log({ count }); // count: 1
};

const prueba61 = () => {
	const ageLimit = 18;
	console.log({ ageLimit }); // {ageLimit: 18}
};

const prueba62 = () => {
	const grade = 15;

	if (grade >= 10) {
		console.log('Passing grade');
	}
};

const prueba63 = () => {
	const grade = 3;

	if (grade >= 10) {
		console.log('Passing grade');
	} else {
		console.log('Failing grade');
	}
};

const prueba64 = () => {
	const grade = 10;

	if (grade > 10) {
		console.log('Passing grade');
	} else if (grade === 10) {
		console.log('Passing on the limit');
	} else {
		console.log('Failing grade');
	}
};

const prueba65 = () => {
	function testNum(a) {
		let result;

		if (a > 0) {
			result = 'Positive';
		} else {
			result = 'NOT Positive';
		}

		return result;
	}

	console.log(testNum(-5));
	// Resultado esperado: "NOT Positive"
};

const prueba66 = () => {
	const b = new Boolean(false);
	// Esta condición se evalúa como verdadera
	if (b) {
		console.log('b is truthy'); // "b is truthy"
	}
};

const prueba67 = () => {
	function canVote(age) {
		return age >= 18;
	}

	// Ejemplos
	console.log(canVote(25)); // true
	console.log(canVote(18)); // true
	console.log(canVote(10)); // false
};

const prueba68 = () => {
	console.log('2' == 2);
};

const prueba69 = () => {
	function isPassing(grade) {
		if (grade >= 10) {
			return true;
		} else {
			return false;
		}
	}

	console.log(isPassing(12));
};

const prueba70 = () => {
	function isPassing(grade) {
		return grade >= 10;
	}

	console.log(isPassing(12));
};

const prueba71 = () => {
	const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

	console.log(clothing.length); // Resultado esperado: 4
};

const prueba72 = () => {
	/* let nameListA = new Array(4294967296); */ // 2 a la 32a potencia = 4294967296
	/* let nameListC = new Array(-100); */ // signo negativo

	/* console.log(nameListA.length); // RangeError: longitud de la matriz inválida
	console.log(nameListC.length); // RangeError: longitud de la matriz inválida */

	let nameListB = [];
	nameListB.length = Math.pow(2, 32) - 1; // establecer una longitud de la matriz menor que 2 a la 322 potencia

	console.log(nameListB.length); // 4294967295
};

const prueba73 = () => {
	let arr = [1, 2, 3];
	printEntries(arr);

	arr.length = 5; // establecer la longitud de la matriz en 5 mientras que la actual es 3.
	printEntries(arr);

	function printEntries(arr) {
		let length = arr.length;
		for (let i = 0; i < length; i++) {
			console.log(arr[i]);
		}

		console.log('=== impreso ===');
	}
};

const prueba74 = () => {
	const numbers = [1, 2, 3, 4, 5];
	let length = numbers.length;
	for (let i = 0; i < length; i++) {
		numbers[i] *= 2;
	}

	console.log(numbers);
};

const prueba75 = () => {
	const numbers = [1, 2, 3, 4, 5];

	if (numbers.length > 3) {
		numbers.length = 3;
	}
	console.log(numbers); // [1, 2, 3]
	console.log(numbers.length); // 3
};

const prueba76 = () => {
	const users = ['Sam', 'Alex', 'Charley'];

	console.log(users[1]); // 'Alex'
};

const prueba77 = () => {
	const users = ['Sam', 'Alex', 'Charley', 'Blane', 'Crane'];
	console.log(users.at(0)); // 'Sam'
	console.log(users.at(1)); // 'Alex'
	console.log(users.at(-2)); // 'Blane'
	console.log(users.at(-1)); // 'Crane'
};

const prueba78 = () => {
	// Nuestro array con objetos
	const carrito = ['manzana', 'banana', 'pera'];

	// Una función que devuelve el último elemento de un array dado
	function devolverUltimo(arr) {
		return arr.at(-1);
	}

	// Obtenemos el último elemento de nuestro array 'carrito'
	const objeto1 = devolverUltimo(carrito);
	console.log(objeto1); // Muestra 'pera'

	// Añade un elemento a nuestro array 'carrito'
	carrito.push('naranja');
	const objeto2 = devolverUltimo(carrito);
	console.log(objeto2); // Muestra 'naranja'
};

const prueba79 = () => {
	// Nuestro array con elementos
	const colores = ['rojo', 'verde', 'azul'];

	// Usando la propiedad length
	const lengthMetodo = colores[colores.length - 2];
	console.log(lengthMetodo); // Muestra 'verde'

	// Usando el método slice(). Note que se devuelve un array
	const sliceMetodo = colores.slice(-2, -1);
	console.log(sliceMetodo[0]); // Muestra 'verde'

	// Usando el método at()
	const atMetodo = colores.at(-2);
	console.log(atMetodo); // Muestra 'verde'
};

const prueba80 = () => {
	const números = [10, 8, 13, 15];
	números.push(20); // devuelve 5 (la nueva longitud del array)
	console.log(números); // [10, 8, 13, 15, 20]
};

const prueba81 = () => {
	const animales = ['cerdos', 'cabras', 'ovejas'];

	const cantidad = animales.push('vacas');
	console.log(cantidad); // ['cerdos', 'cabras', 'ovejas', 'vacas']
	// Resultado esperado: 4
	console.log(animales);
	// Resultado esperado: Array ['cerdos', 'cabras', 'ovejas', 'vacas']

	animales.push('pollos', 'gatos', 'perros');
	console.log(animales);
	// Resultado esperado: Array ['cerdos', 'cabras', 'ovejas', 'vacas', 'pollos', 'gatos', 'perros']
};

const prueba82 = () => {
	const deportes = ['fútbol', 'béisbol'];
	let total = deportes.push('fútbol americano', 'natación');

	console.log(deportes); // ['fútbol', 'béisbol', 'fútbol americano', 'natación']
	console.log(total); // 4
};

const prueba83 = () => {
	const vegetales = ['boniato', 'papa'];
	const masVegs = ['apio', 'berenjena'];

	// Combinar el segundo array en el primero
	// Equivalente a vegetales.push('apio', 'berenjena');
	Array.prototype.push.apply(vegetales, masVegs);

	console.log(vegetales); // ['boniato', 'papa', 'apio', 'berenjena']
};

const prueba84 = () => {
	const obj = {
		length: 0,

		addElem: function addElem(elem) {
			// obj.length is automatically incremented
			// every time an element is added.
			[].push.call(this, elem);
		},
	};

	obj.addElem({});
	obj.addElem({});
	console.log(obj.length); // 2
};

const prueba85 = () => {
	function getEmptyArray() {
		return [];
	}

	// Ejemplo
	console.log(getEmptyArray());
};

const prueba86 = () => {
	function getNumberOfElements(elements) {
		return elements.length;
	}

	// Ejemplo
	console.log(getNumberOfElements(['a', 'b', 'c'])); // 3
	console.log(getNumberOfElements([])); // 0
};

const prueba87 = () => {
	function useCalculator(apps) {
		apps.push('Calculator');
		return apps;
	}

	// Ejemplo
	console.log(useCalculator(['Clock', 'Twitter'])); // ['Clock', 'Twitter', 'Calculator']
	console.log(useCalculator(['Weather'])); // ['Weather', 'Calculator']
};

const prueba88 = () => {
	function useApp(apps, app) {
		apps.push(app);
		return apps;
	}

	// Ejemplo
	console.log(useApp(['Clock', 'Twitter'], 'Calculator')); // ['Clock', 'Twitter', 'Calculator']
	console.log(useApp([], 'Safari')); // ['Safari']
};

const prueba89 = () => {
	function getFirstApp(apps) {
		return apps[0];
	}

	// Ejemplo
	console.log(getFirstApp(['Chrome', 'Clock', 'Twitter'])); // 'Chrome'
	console.log(getFirstApp(['Clock', 'Contacts'])); // 'Clock'
};

const prueba90 = () => {
	function getLastApp(apps) {
		return apps.at(-1);
	}

	// Ejemplo
	console.log(getLastApp(['Chrome', 'Clock', 'Twitter'])); // 'Twitter'
	console.log(getLastApp(['Safari', 'Contacts'])); // 'Contacts'
};

const prueba91 = () => {
	const array1 = ['a', 'b', 'c'];

	array1.forEach((element) => console.log(element));

	// Resultado esperado: "a"
	// Resultado esperado: "b"
	// Resultado esperado: "c"
};

const prueba92 = () => {
	function logArrayElements(element, index, array) {
		console.log('a[' + index + '] = ' + element);
	}
	// Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array
	[2, 5, , 9].forEach(logArrayElements);

	// salida:
	// a[0] = 2
	// a[1] = 5
	// a[3] = 9
};

const prueba93 = () => {
	function Counter() {
		this.sum = 0;

		this.count = 0;
	}
	Counter.prototype.add = function (array) {
		array.forEach(function (entry) {
			this.sum += entry;
			++this.count;
		}, this);
		// ^--- Note
	};

	let obj = new Counter();
	obj.add([2, 5, 9]);
	obj.count;
	// 3
	obj.sum;
	// 16
};

const prueba94 = () => {
	function copy(o) {
		let copy = Object.create(Object.getPrototypeOf(o));
		let propNames = Object.getOwnPropertyNames(o);

		propNames.forEach(function (name) {
			let desc = Object.getOwnPropertyDescriptor(o, name);
			Object.defineProperty(copy, name, desc);
		});

		return copy;
	}

	let o1 = { a: 1, b: 2 };
	let o2 = copy(o1); // o2 ahora se parece a o1

	console.log(o1); // { a: 1, b: 2 }
	console.log(o2); // { a: 1, b: 2 }
};

const prueba95 = () => {
	let words = ['uno', 'dos', 'tres', 'cuatro'];
	words.forEach(function (word) {
		console.log(word);
		if (word === 'dos') {
			words.shift();
		}
	});

	// uno
	// dos
	// cuatro
};

const prueba96 = () => {
	function loopThroughElements(elements) {
		elements.forEach(function (element) {
			console.log(element);
		});
	}

	// Ejemplos
	loopThroughElements(['Sam', 'Charlie', 'Alex']);
};

const prueba97 = () => {
	function logUserIds(userIds) {
		userIds.forEach(function (userId) {
			console.log(userId);
		});
	}

	// Ejemplos
	logUserIds([10, 15, 14]);
};

const prueba98 = () => {
	function logGrades(grades) {
		grades.forEach(function (grade) {
			console.log(grade);

			return 10;
		});

		return 20;
	}

	// Ejemplos
	console.log(logGrades([]));
};

const prueba99 = () => {
	function sumGrades(grades) {
		let sum = 0;
		grades.forEach(function (grade) {
			sum += grade;
		});
		return sum;
	}

	// Ejemplos
	console.log(sumGrades([15, 5, 10])); // 30
	console.log(sumGrades([12, 10, 13, 19])); // 54
};

const prueba100 = () => {
	function sumPositiveNumbers(numbers) {
		let sum = 0;
		numbers.forEach(function (number) {
			if (number > 0) {
				sum += number;
			}
		});
		return sum;
	}

	// Ejemplos
	console.log(sumPositiveNumbers([15, -5, 10])); // 25
	console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5
};

const prueba101 = () => {
	function sumOddNumbers(numbers) {
		let sum = 0;
		numbers.forEach(function (number) {
			if (number % 2 !== 0) {
				sum += number;
			}
		});
		return sum;
	}

	// Ejemplos
	console.log(sumOddNumbers([15, 5, 10])); // 20
	console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
	console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2
};

const prueba102 = () => {
	const numbers = [9, 5, 14, 3, 11];
	const numbersAboveTen = numbers.filter(function (number) {
		return number > 10;
	});
	console.log(numbersAboveTen); // [14, 11]
};

const prueba103 = () => {
	const numbers = [9, 5, 14, 3, 11];
	const numbersAboveTen = numbers.filter(function (x) {
		return x > 10;
	});
	console.log(numbersAboveTen); // [14, 11]
};

const prueba104 = () => {
	const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
	const result = words.filter((word) => word.length > 6);
	console.log(result); // [ 'exuberant', 'destruction', 'present' ]
};

const prueba105 = () => {
	function esSuficientementeGrande(elemento) {
		return elemento >= 10;
	}
	let filtrados = [12, 5, 8, 130, 44].filter(esSuficientementeGrande);
	console.log(filtrados);
	// filtrados es [12, 130, 44]
};

const prueba106 = () => {
	let arr = [
		{ id: 15 },
		{ id: -1 },
		{ id: 0 },
		{ id: 3 },
		{ id: 12.2 },
		{},
		{ id: null },
		{ id: NaN },
		{ id: 'undefined' },
	];

	let entradasInvalidas = 0;
	// Si el elemento tiene un atributo id, y su valor correspondiente es un número
	// Y no es el valor NaN, entonces es una entrada válida
	function filtrarPorId(obj) {
		if ('id' in obj && typeof obj.id === 'number' && !isNaN(obj.id)) {
			return true;
		} else {
			entradasInvalidas++;
			return false;
		}
	}

	let arrPorId = arr.filter(filtrarPorId);
	console.log('Array Filtrado\n', arrPorId);
	// [{ id: 15 }, { id: -1 }, { id: 0 },{ id: 3 }, { id: 12.2 }]

	console.log('Número de Entradas Inválidas = ', entradasInvalidas);
	// 4
};

const prueba107 = () => {
	let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
	/**
	 * Filtra la matriz en función de un criterio de búsqueda (query)
	 */
	function filterItems(query) {
		return fruits.filter(function (el) {
			return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
		});
	}

	console.log(filterItems('ap')); // ['apple', 'grapes']
	console.log(filterItems('an')); // ['banana', 'mango', 'orange'] // ['banana', 'mango', 'orange']
};

const prueba108 = () => {
	function getPositiveTemperatures(temperatures) {
		return temperatures.filter(function (temperature) {
			return temperature > 0;
		});
	}

	// Ejemplos
	console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
	console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]
};

const prueba109 = () => {
	function getFreezingTemperatures(temperatures) {
		return temperatures.filter(function (temperature) {
			return temperature < 0;
		});
	}

	// Ejemplos
	console.log(getFreezingTemperatures([-5, 12, 3])); // [-5]
	console.log(getFreezingTemperatures([1, -3, -2, 4, 10])); // [-3, -2]
};

const prueba110 = () => {
	const names = ['Javier', 'Linda', 'Ana', 'Liz'];
	const result = names.find(function (name) {
		return name === 'Ana';
	});

	console.log(result); // 'Ana'
};

const prueba111 = () => {
	const numbers = [9, 5, 14, 3, 11];
	const firstNumberAboveTen = numbers.find(function (number) {
		return number > 10;
	});

	console.log(firstNumberAboveTen); // 14
};

const prueba112 = () => {
	function getYear(years, searchYear) {
		return years.find(function (year) {
			return year === searchYear;
		});
	}

	// Ejemplo
	console.log(getYear([1991, 1992, 1993, 1994, 1995], 1995)); // 1995
	console.log(getYear([1991, 1992, 1993, 1994, 1995], 1990)); // undefined
};

const prueba113 = () => {
	function getOddYears(years) {
		return years.filter((year) => year % 2 !== 0);
	}

	// Sample usage - do not modify
	console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
	console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]
};

const prueba114 = () => {
	function isAppUsed(apps, app) {
		return apps.includes(app);
	}

	// Sample usage - do not modify
	console.log(isAppUsed(['Twitter', 'Calculator'], 'Calculator')); // true
	console.log(isAppUsed(['Clock', 'Calculator'], 'Safari')); // false
};

const prueba115 = () => {
	function getStringSizes(strings) {
		return strings.map(function (string) {
			return string.length;
		});
	}

	// Sample usage - do not modify
	console.log(getStringSizes(['a', 'abc'])); // [1, 3]
	console.log(getStringSizes(['Sam', 'Alex', 'Charlie'])); // [3, 4, 7]
	console.log(getStringSizes(['Hello', 'Blue'])); // [5, 4]}
};

const prueba116 = () => {
	function getWeather(city) {
		return `It's currently ${city.value} degrees in ${city.name}`;
	}

	console.log(getWeather({ name: 'Amsterdam', value: 3 })); // It's currently 3 degrees in Amsterdam
	console.log(getWeather({ name: 'Brasilia', value: 24 })); // It's currently 24 degrees in Brasilia
};

const prueba117 = () => {
	function incrementAge(person) {
		person.age++;
		return person;
	}

	// Sample usage - do not modify
	const person = {
		firstName: 'Jennifer',
		lastName: 'Doe',
		age: 18,
	};
	console.log(incrementAge(person)); // {firstName: "Jennifer", lastName: "Doe", age: 19}
};

const prueba118 = () => {
	function addOne(number) {
		return number + 1;
	}

	console.log(addOne(2)); // 3
	console.log(addOne(5)); // 6
	console.log(addOne()); // ¿Qué valor devuelve?
};
