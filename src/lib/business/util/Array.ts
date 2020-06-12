export const range = (start = 0, stop = 0, step = 1) => {
    var a = [start], b = start;
    while (b < stop) {
        a.push(b += step || 1);
    }
    return a;
}