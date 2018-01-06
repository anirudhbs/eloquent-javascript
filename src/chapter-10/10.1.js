const month = function () {
    let names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return {
        name: number => names[number],
        number: name => names.indexOf(name)
    }
}()

console.log(month.name(2))
console.log(month.number("Nov"))