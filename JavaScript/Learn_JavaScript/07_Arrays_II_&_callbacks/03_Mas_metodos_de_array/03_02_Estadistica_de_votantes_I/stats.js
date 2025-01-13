/**
 * @param {number[]} ages
 */
export function getVotersCount(ages) {
	// TODO: devolver la cantidad de ciudadanos mayores de 18

	return ages.filter(function (age) {
		return age >= 18;
	}).length;
}
