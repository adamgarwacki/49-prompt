function wpiszLiczbe() {
    let liczba = parseInt(prompt("Wpisz liczbę:"));

    if (isNaN(liczba)) {
        console.log("NaN! To nie jest liczba!");
    } else {
        console.log(liczba);
    }
}