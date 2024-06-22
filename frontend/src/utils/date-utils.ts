class DateUtils {
    public static formatDate(dateString: string) {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    }
}

export default DateUtils;