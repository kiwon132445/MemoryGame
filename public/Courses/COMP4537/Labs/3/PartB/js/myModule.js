exports.myDateTime =
function () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    if ((hours - 12) > 0) {
        return (hours - 12) + ":" + minutes + "pm";
    } else {
        return hours + ":" + minutes + "am";
    }
};