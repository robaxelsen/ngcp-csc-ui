import { date } from 'quasar'
const { formatDate } = date

export default function(value) {
    var timeStamp = new Date(value);
    return `${formatDate(timeStamp, 'MMMM D, YYYY')} at ${formatDate(timeStamp, 'h:mm a')}`;
}
