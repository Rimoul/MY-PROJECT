// Function to format the timestamp
export function formatTimestamp(timestamp) {
    // Convert the timestamp to a Date object
    const date = new Date(timestamp);

    // Define the options for formatting the date
    const options = {
        weekday: 'long', // 'Tuesday'
        year: 'numeric', // '2019'
        month: 'short', // 'Jan'
        day: '2-digit' // '15'
    };

    // Format the date with 'en-IN' locale
    const formattedDate = date.toLocaleDateString('en-IN', options);

    // Extract weekday
    const weekday = formattedDate.split(',')[0].trim();

    // Extract rest of the date
    const restOfDate = formattedDate.split(',')[1].trim();

    // Separate day, month, and year
    const [day, month] = restOfDate.split(' ');
    const year = formattedDate.split(',')[2].trim();


    // Format the date as 'DD MM YYYY'
    const formattedDateString = `${day} ${month} ${year}`;

    return [weekday, formattedDateString]; // Return both weekday and formatted date in an array
}

/* // Example usage:
const timestamp = "2024-05-10T14:56:00Z"; // Example timestamp
const [weekday, formattedDate] = formatTimestamp(timestamp);
console.log(weekday); // Print weekday
console.log(formattedDate); // Print formatted date */

