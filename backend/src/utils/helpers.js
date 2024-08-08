const momentTimezone = require('moment-timezone');
function timeStampToDateAndTime(timeStamp){
    return momentTimezone.tz(timeStamp, "Asia/Calcutta").format("DD MMMM YYYY, hh:mm A")
}


module.exports = {
    timeStampToDateAndTime
}