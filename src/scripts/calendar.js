// Calendar {Day, Month, Year, etc...}
class calendar {
    constructor() {
        this.current = new Date();
        this.days = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday",
        };
        this.months = {
            0: "January",
            1: "February",
            2: "March",
            3: "April",
            4: "May",
            5: "June",
            6: "July",
            7: "August",
            8: "September",
            9: "October",
            10: "November",
            11: "December",
        };
    }

    today(format, seperator) {

        if (seperator === 0) {
            seperator = ''
        } else if (!seperator) {
            seperator = '/'
        }

        const nth = function(d) {
            if (d > 3 && d < 21) return 'th';
            switch (d % 10) {
                case 1:  return "st";
                case 2:  return "nd";
                case 3:  return "rd";
                default: return "th";
            }
        }

        if (format === "named") {
            return `${this.day('named')} the ${this.date()}${nth(this.date())} of ${this.month('named')}, ${this.year()}`;
        } else if (format === 'named-noyear') {
            return `${this.day('named')} the ${this.date()}${nth(this.date())} of ${this.month('named')}`;
        } else if (format === 'eu') {
            return `${this.date()}${seperator}${this.month()}${seperator}${this.year()}`
        } else if (format === 'us') {
            return `${this.month()}${seperator}${this.date()}${seperator}${this.year()}`
        } else {
            return `${this.date()}${seperator}${this.month()}${seperator}${this.year()}`
        }
    }

    year() {
        return this.current.getFullYear()
    }

    month(format) {
        if (format === 'named') {
            return this.months[this.current.getMonth()]
        } else {
            return this.current.getMonth() + 1
        }
    }

    day(format) {
        if (format === 'named') {
            return this.days[this.current.getDay()]
        } else {
            return this.current.getDay()
        }
    }

    date() {
        return this.current.getDate()
    }

    greeting() {
        let hour = this.current.getHours()
        if (hour < 12) {
            return 'Morning'
        } else if (hour < 18) {
            return 'Afternoon'
        } else {
            return 'Evening'
        }
    }
}

export default new calendar();