/**
 * @param {array[][]} rows
 */
export function renderTableRows(rows) {
	console.log(rows);
	let html = '';
	rows.forEach(function (row) {
		html += `<tr>
                    <td>${row[0]}</td>
                    <td>${row[1]}</td>
                </tr>`;
	});
	console.log(html);
	return html;
}
