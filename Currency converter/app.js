const btn = document.getElementById("btn");
const naira = document.getElementById("Naira")
const dollars = document.getElementById("dollars")

btn.addEventListener("click") , function(e) {
    e.preventDefault()
    const naira =document.getElementById("naira").value;
    const dollars =document.getElementById("dollars");

    dollars.value = math.round(naira/ 700)
}