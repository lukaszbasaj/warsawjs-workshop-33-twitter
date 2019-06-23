export default function myDate(value) {
    const d = new Date(value);
    return d.toLocaleString('pl-PL');
}