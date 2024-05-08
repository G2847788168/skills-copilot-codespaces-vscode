/**
* Calculates the result of two numbers.
*
* @param {number} var1 - The first number to calculate.
* @param {number} var2 - The second number to calculate.
* @returns {number} The result of the calculation.
*/
function calculateNumbers(var1, var2)
{
    alert(var1,var2)
}

function getTimeAgoDescription(dateString) {
	const startDate = new Date(dateString);
	const currentDate = new Date();
 
	const years = currentDate.getFullYear() - startDate.getFullYear();
	const months = currentDate.getMonth() - startDate.getMonth();
	const days = currentDate.getDate() - startDate.getDate();
 
	let timeAgoDescription = '';
 
	if (years > 0) {
		timeAgoDescription += `${years} ${years === 1 ? 'year' : 'years'}`;
	}
 
	if (months > 0) {
		if (timeAgoDescription !== '') {
			timeAgoDescription += ' ';
		}
		timeAgoDescription += `${months} ${months === 1 ? 'month' : 'months'}`;
	}
 
	if (days > 0) {
		if (timeAgoDescription !== '') {
			timeAgoDescription += ' ';
		}
		timeAgoDescription += `${days} ${days === 1 ? 'day' : 'days'}`;
	}
 
	if (timeAgoDescription === '') {
		timeAgoDescription = 'today';
	} else {
		timeAgoDescription += ' ago';
	}
 
	return timeAgoDescription;
}

