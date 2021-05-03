let submit = document.querySelector(".button");
submit.addEventListener("click", displayNetWorth);

function displayNetWorth() {
    let realEstate = parseFloat(document.querySelector(".re-input").value);
    let chequingAccount = parseFloat(document.querySelector(".ca-input").value);
    let savingAccount = parseFloat(document.querySelector(".sa-input").value);
    let retirementAccount = parseFloat(document.querySelector(".ra-input").value);
    let vehicle = parseFloat(document.querySelector(".auto-input").value);
    let otherAssets = parseFloat(document.querySelector(".oa-input").value);

// get values of liabilities
    let mortgage = parseFloat(document.querySelector(".m-input").value);
    let consumerDebt = parseFloat(document.querySelector(".cd-input").value);
    let personalLoan = parseFloat(document.querySelector(".pl-input").value);
    let studentLoan = parseFloat(document.querySelector(".sl-input").value);
    let autoLoan = parseFloat(document.querySelector(".al-input").value);
    let otherDebt = parseFloat(document.querySelector(".od-input").value);
    let totalAssets = 0;
    let totalLiabilities = 0;
    let netWorth = 0;
    
    if (isNaN(realEstate)) realEstate = 0;
    if (isNaN(chequingAccount)) chequingAccount = 0;
    if (isNaN(savingAccount)) savingAccount = 0;
    if (isNaN(retirementAccount)) retirementAccount = 0;
    if (isNaN(vehicle)) vehicle = 0;
    if (isNaN(otherAssets)) otherAssets = 0;
    
    // get values of liabilities
    if (isNaN(mortgage)) mortgage = 0;
    if (isNaN(consumerDebt)) consumerDebt = 0;
    if (isNaN(personalLoan)) personalLoan = 0;
    if (isNaN(studentLoan)) studentLoan = 0;
    if (isNaN(autoLoan)) autoLoan = 0;
    if (isNaN(otherDebt)) otherDebt = 0;

    totalAssets = realEstate + chequingAccount + savingAccount + retirementAccount + vehicle + otherAssets; 
    totalLiabilities = mortgage + consumerDebt + personalLoan + studentLoan + autoLoan + otherDebt;
    let total = totalAssets - totalLiabilities;
    total = total.toFixed(2);
    netWorth = numberWithCommas(total)

    let display = document.querySelector(".display");
    let again_button = document.querySelector(".again_button");
    let breakdown = document.querySelector(".breakdown");
    let showNetWorth = document.querySelector(".net-worth");

    display.style.display = "block";
    again_button.style.display = "block";
    breakdown.style.display = "block";
    
    if (total < 0) {
        showNetWorth.innerHTML = `- $ ${netWorth.substring(1)}`
    } else {
        showNetWorth.innerHTML = `$ ${netWorth}`
    }
    showBarChart(totalAssets, totalLiabilities, total)
    showAssetChart(realEstate, chequingAccount, savingAccount, retirementAccount, vehicle, otherAssets)
    showLiabilityChart(mortgage, consumerDebt, personalLoan, studentLoan, autoLoan, otherDebt)
}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function showBarChart(assets, liabilities, networth) {
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Assets', 'Liabilities', 'Net Worth'],
            datasets: [{
                label: 'Dollars ($)',
                data: [assets, liabilities, networth],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            indexAxis: 'y',
            elements: {
              bar: {
                borderWidth: 1,
              }
            },
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Net Worth Visual Representation'
              }
            }
          },
    });
    let barChart = document.querySelector(".bar_chart");
    barChart.style.display = "block";
}

function showAssetChart(re, ca, sa, ra, veh, other) {
    var ctx = document.getElementById('assetChart');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Real Estate ($)", "Chequings Account ($)", "Savings Account ($)", "Retirement Account ($)", "Vehicle(s) ($)", "Other ($)"],
            datasets: [{
                data: [re, ca, sa, ra, veh, other],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                hoverOffset: 3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Assets Breakdown'
                }
              }
        }
    });
    let assetChart = document.querySelector(".asset_chart");
    assetChart.style.display = "block";
}

function showLiabilityChart(mort, cd, pl, sl, al, other) {
    var ctx = document.getElementById('liabilityChart');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Mortgages ($)", "Consumer Debt ($)", "Personal Loans ($)", "Student Loans ($)", "Auto Loans ($)", "Other ($)"],
            datasets: [{
                label: 'Dollars ($)',
                data: [mort, cd, pl, sl, al, other],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                hoverOffset: 3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Liabilities Breakdown'
                }
              }
        }
    });
    let liabilityChart = document.querySelector(".liability_chart");
    liabilityChart.style.display = "block";
}
