'use sctrict';

var money = prompt('Ваш бюджет на месяц?','1000');
var time = prompt('Введите дату в формате YYYY-MM-DD','01-01-2018');

var appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpenses: {},
    income: [],

};


var quest1 = prompt('Введите обязательную статью расходов в этом месяце','');
var quest2 = prompt('Во сколько это обойдеться','');

appData.expences.quest1 = quest2;

console.log(appData.expences)

// var expences = {
//       [quest1] : quest2
// };
//

 alert('бюджет на 1 день  ' + money/30)

 






