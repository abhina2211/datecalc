//'use strict';
const prompt = require('prompt');

var differentDays = function(inputDate1, inputDate2){
    const dateParts1 = inputDate1.split("/");
    const dateParts2 = inputDate2.split("/");

    const dateObject1 = new Date(+dateParts1[2], dateParts1[1] - 1, +dateParts1[0]);
    const dateObject2 = new Date(+dateParts2[2], dateParts2[1] - 1, +dateParts2[0]);

    const timeDiff = Math.abs(dateObject2.getTime() - dateObject1.getTime());
    var diffDays;
    return diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
}





const schema = {
    properties: {
        fromDate: {
            description: 'From Date',
            message: 'Format: dd/mm/yyyy, ex: 31/01/2018',
            pattern: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
            required: true
        },
        toDate: {
            description: 'To Date',
            message: 'Format: dd/mm/yyyy, ex: 31/01/2018',
            pattern: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
            required: true
        }
    }
};

prompt.start();


prompt.get(schema, function (err, result) {
    console.log('\n');
    console.log('Date entered are:');
    console.log('From date: ' + result.fromDate);
    console.log('To date: ' + result.toDate);
    console.log('\n');
    console.log('No: of days between the teo dates are: ' + differentDays(result.fromDate, result.toDate));

});