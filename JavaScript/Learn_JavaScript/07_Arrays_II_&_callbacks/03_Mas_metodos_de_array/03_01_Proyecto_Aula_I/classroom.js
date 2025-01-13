export function getNumberOfGrades(grades) {
	// TODO: devolver la cantidad de notas

	return grades.length;
}

export function getSumGrades(grades) {
	// TODO: devolver la suma de todas las notas

	let sum = 0;

	grades.forEach(function (grade) {
		return (sum += grade);
	});

	return sum;
}

export function getAverageValue(grades) {
	// TODO: devolver el promedio de todas las notas

	let sum = 0;

	grades.forEach(function (grade) {
		return (sum += grade);
	});

	return sum / grades.length;
}

export function getPassingGrades(grades) {
	// TODO: devolver todas las notas aprobatorias

	return grades.filter(function (grade) {
		return grade >= 10;
	});
}

export function getFailingGrades(grades) {
	// TODO: devolver todas las notas reprobatorias

	return grades.filter(function (grade) {
		return grade <= 9;
	});
}

export function getRaisedGrades(grades) {
	// TODO: devolver todas las notas aumentadas en 1, ninguna de ellas puede superar 20

	return grades.map(function (grade) {
		if (grade >= 20) {
			return 20;
		} else {
			return (grade += 1);
		}
	});
}
