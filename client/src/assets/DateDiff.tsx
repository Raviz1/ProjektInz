export const datesArray = (start: Date, end: Date) => {
    let result = [], current = new Date(start);
    while (current <= end)
        result.push(current) && (current = new Date(current)) && current.setDate(current.getDate() + 1);
    return result;
}
