var Cronly = require('./src/index.js');


var cronly = new Cronly('2|2Ep8eF5Iwd8SNeJERpF2xOzlGvUrJgPhQWKut7wc');


cronly.createMonitor('hi').then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});



