var today = new Date();

var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

var span = document.getElementById("span");
span.textContent = date;