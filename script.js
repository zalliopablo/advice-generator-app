const d = document,
$card = d.querySelector(".card");



async function getAdvice() {
    try {
        let res = await fetch("https://api.adviceslip.com/advice");
        let json = await res.json()
        console.log(json.slip.advice)
        console.log(res)

        if(!res.ok) throw {status: res.status, statusText: res.statusText}
        $card.querySelector("h1").textContent = `ADVICE # ${json.slip.id}`
        $card.querySelector("p").textContent = `"${json.slip.advice}"`
    } catch (err) {
        let message = err.statusText || "No se encuentran los datos"
        $card.innerHTML = `Error ${err.status}, texto del error ${message} `
    }
}



d.addEventListener("click", e => {
    if(e.target.matches(".icon-dice") || e.target.matches(".icon-dice img") ){
        console.log("first")
        getAdvice()
    }
})