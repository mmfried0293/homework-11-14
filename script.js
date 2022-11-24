tradableCompanies = [{
    Name: 'Pfizer',
    Logo: `<img src="./img/pfe-logo.png" alt="phizer logo" width="100">`,
    Price: 44.14,
    Ticker: 'PFE',
    Amount: 4,
}, {
    Name: 'Merck',
    Logo: `<img src="./img/mrk-logo.png" alt="merc & co logo" width="100">`,
    Price: 94.36,
    Ticker: 'KRK',
    Amount: 0,
}, {
    Name: 'UnitedHealth Group',
    Logo: `<img src="./img/unh-logo.png" alt="united health care logo" width="100">`,
    Price: 515.51,
    Ticker: 'UNH',
    Amount: 0,
}, {
    Name: 'Molina Healthcare',
    Logo: `<img src="./img/moh-logo.png" alt="Molina Healthcare logo" width="100">`,
    Price: 339.33,
    Ticker: 'MOH',
    Amount: 3,
}, {
    Name: 'Avantor',
    Logo: `<img src="./img/avtr-logo.png" alt="Avantor logo" width="100">`,
    Price: 20.21,
    Ticker: 'AVTR',
    Amount: 0,
}, {
    Name: 'Centene',
    Logo: `<img src="./img/cnc-logo.png" alt="centene logo" width="100">`,
    Price: 79.33,
    Ticker: 'CNC',
    Amount: 2,
}]




function writeTable() {/*
    let tableBodyElement = document.getElementById('table-body');  

    tableBodyElement.innerHTML = null; 

    for (let i = 0; i < tradableCompanies.length; i++) {
        let company = tradableCompanies[i];
        let totalValue = tradableCompanies[i].Amount * tradableCompanies[i].Price;
        //let btn = company.Amount ? 'Buy More' : 'Buy';
       
                
   
        let trElement =document.createElement('tr');
        
        createAndAppend(trElement, tradableCompanies[i].Name);
        createAndAppend(trElement, tradableCompanies[i].Logo);
        createAndAppend(trElement, tradableCompanies[i].Price);
        createAndAppend(trElement, tradableCompanies[i].Ticker);
        createAndAppend(trElement, tradableCompanies[i].Amount);
        createAndAppend(trElement, totalValue);
        let buttonCell = document.createElement('td');
        let btn = document.createElement('button');
        buttonCell.append(btn);
        trElement.append(buttonCell);
        btn.innerText = company.Amount ? 'Buy More' : 'Buy'; 
        btn.addEventListener('click', buyStock(i)) ; 
        tableBodyElement.append(trElement) ;
    }
    }*/
    
    let HTML = '';
    for (let i = 0; i < tradableCompanies.length; i++) {
        let company = tradableCompanies[i];
        let totalValue = tradableCompanies[i].Amount * tradableCompanies[i].Price;
        let btn = company.Amount ? 'Buy More' : 'Buy';
        HTML += `<tr><td class="name-cell">${company.Name}</td>
                <td class="logo-cell">${company.Logo}</td>
                <td class="price-cell">$${company.Price}</td>
                <td class="ticker-cell">${company.Ticker}</td>
                <td class="amount-cell">${company.Amount}</td>
                <td class="value-cell">$${totalValue}</td>
                <td class="button-cell"><button id="button-buy" onclick="buyStock(${i})">${btn}</button></td>
                <td class="remove-button-cell"><button id="button-remove" onclick="removeCompany(${i})">Remove from portfolio</button></td></tr>`
                
            }
            document.getElementById(`table-body`).innerHTML = HTML;

};

function createAndAppend(trElement, innerText){
    let tdElement = document.createElement('td');
    tdElement.innerText= innerText;
    trElement.append(tdElement);
}

writeTable();

function buyStock(i) {
    let amountOfShares = Number(prompt (`How many stocks of ${tradableCompanies[i].Ticker} would you like to buy?`));
    validateInput(amountOfShares);
    let totalPrice = amountOfShares * tradableCompanies[i].Price;
    let totalToDeposit = prompt(`Your total is ${totalPrice}, please enter the amount you'd like to deposit?`);
    validateInput(totalToDeposit);
    if ((totalToDeposit) > (totalPrice)) {
        alert("Purchased! Your stocks were added to your portfolio, you will now be redirected to the Stock Exchange.");
        let totalShares = tradableCompanies[i].Amount + amountOfShares;
        tradableCompanies[i].Amount = totalShares;
        writeTable();
    } else {
        alert("You don't have enough money for this purchase. Good luck!")

    }
}

function validateInput(amount) {
    if (isNaN(amount)|| (amount)< 1) { alert("Invalid amount. Please enter a valid amount."); throw "invalid input" }
}

function addCompany(){
    document.getElementById('addCompanyInfo').style.display='block';
}

let formElement;
function newCompany(){
    formElement = document.getElementById('addCompanyInfo');
    let fd = new FormData(formElement);
    let company = {};
    company.Name = fd.get ('name');
    company.Logo = ('Logo not available')
    company.Price = fd.get ('price');
    company.Ticker = fd.get ('ticker');
    company.Amount  = (0)
    tradableCompanies.push(company);
    console.log(company);
    writeTable();
    formElement.reset();
}

function removeCompany(i) {
    alert (`${tradableCompanies[i].Name} will be removed from your portfolio. You can always add Companies by using our 'Add another company' feature at the end of this page.`);
    tradableCompanies.splice(i, 1);
    writeTable()
}
function logIn(){
    document.getElementById('loginInfo').style.display='block';
}