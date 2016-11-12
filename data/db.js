import mongoose from 'mongoose';
import bluebird from 'bluebird';
const dbUri = 'mongodb://localhost/mygraphql';

mongoose.Promise = require('bluebird');
mongoose.connect(dbUri, {
    promiseLibrary: bluebird,
});

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbUri);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

let gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

// used by nodemon
process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// emitted on application termination
process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});
