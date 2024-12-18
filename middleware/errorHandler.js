//middleware to handle errors

const {errorTypes} = require('../errorTypes');
const errorHandler = (err, req, res, next) => {
    statusCode = res.statusCode || 500;
    switch(statusCode) {
        case errorTypes.ValidationError:
            res.json({
                title: "Validation Error",
                message: err.message,
                statusCode: err.stack,
            });
            break;
            case errorTypes.Unauthorized:
                res.json({
                    title: "NOT Authorized",
                    message: err.message,
                    statusCode: err.stack,
                });
                break;
            case errorTypes.Forbidden:
                res.json({
                    title: "Forbidden",
                    message: err.message,
                    statusCode: err.stack,
                });
                break;
            case errorTypes.NotFound:
                res.json({
                    title: "Not Found",
                    message: err.message,
                    statusCode: err.stack,
                });
                break;
            case errorTypes.ServerBusy:
                res.json({
                    title: "Server Busy",
                    message: err.message,
                    statusCode: err.stack,
                });
                break;
            default:
                console.log("No error encountered")};
                next();
}

module.exports = errorHandler; 