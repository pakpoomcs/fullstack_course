let rando = Math.random();
if (rando < 0.5) {
    console.log(`random is less than 0.5! It's ${rando}`)
}
let i = 0
for (i; i <= 10; i++) {
    if (1 + 1 === 2) {
        console.log(("The math is correct").toUpperCase());
    }

    const dayOfWeek = prompt("Enter a day of the week");

    if (dayOfWeek.toUpperCase() === "FRIDAY") {
        console.log("TGIF!!!");
    } else if (dayOfWeek.toUpperCase() === "SATURDAY") {
        console.log("wheeeeeeeeeeeeeee");
    } else if (dayOfWeek.toUpperCase() === "SUNDAY") {
        console.log("can this day never end?????????")
    } else {
        console.log("boringggggggggggggggggggg")
    }
}