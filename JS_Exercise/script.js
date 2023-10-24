function showTime() {
    var d = new Date();
    document.querySelector("p").innerHTML = `${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`;
}

var jsonText = '{"employees":[' +
    '{"name":"Kevin", "age":"29"}, ' +
    '{"name":"David", "age":"31"}, ' +
    '{"name":"Peter", "age":"27"}]}';

jsonObj = JSON.parse(jsonText);

// document.getElementById("demo").innerHTML = jsonObj.employees[1].name + jsonObj.employees[1].age;


