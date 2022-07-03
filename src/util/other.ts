export const delay = (time: number) => {
    return new Promise(response => setTimeout(response, time));
};