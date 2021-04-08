//donner la date du jour au format jj/mm/aaaa
let today = formatDate();
function formatDate(d = new Date) {
    return [d.getDate(), d.getMonth()+1, d.getFullYear()]
        .map(n => n < 10 ? `0${n}` : `${n}`).join('/');
}
console.log(today);