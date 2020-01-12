export const required = value => {
    if (value) return undefined;
    return 'This field is required';
}

export const maxLength = (formLength) => (value) => {
    if (value.length > formLength) return `max length is ${formLength} symbols`;
    return undefined;
};