const jmeno = prompt("Zadejte křestní jméno bez diakritiky").trim()
const prijmeni = prompt("Zadejte příjmení bez diakritiky").trim()
const domena = "@fit.cvut.cz"

const email = `${prijmeni.slice(0, 5).toLowerCase()}${jmeno.slice(0, 3).toLowerCase()}${domena}`

document.body.innerHTML =  "<p>Váš email je: " + email + "</p>" 
