const API_KEY = "V3V8GBZ0SVL0AKCP";
let month = [
  "2021-06-30",
  "2021-07-31",
  "2021-08-31",
  "2021-09-30",
  "2021-10-31",
  "2021-11-30",
  "2021-12-31",
  "2022-01-31",
  "2022-02-28",
  "2022-03-31",
  "2022-04-30",
  "2022-05-31",
  "2022-06-30",
  "2022-07-31",
  "2022-08-31",
  "2022-09-30",
  "2022-10-31",
  "2022-11-30",
  "2022-12-31",
  "2023-01-31",
  "2023-02-28",
  "2023-03-31",
  "2023-04-30",
  "2023-05-31",
  "2023-06-30",
  "2023-07-31",
  "2023-08-31",
  "2023-09-30",
  "2023-10-31",
  "2023-11-30",
  "2023-12-31",
  "2024-01-31",
];
let price = [];

async function init(){
    await loadPrice();
    await loadMonthlyPrice();
    renderChart();
}

async function loadPrice() {
  let url =
    "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=" +
    API_KEY;
  let response = await fetch(url);
  let responseAsJSON = await response.json();
  let currentPrice = Math.round(
    responseAsJSON["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
  );
  document.getElementById("price").innerHTML = `<b> ${currentPrice} € </b>`;
  
}

async function loadMonthlyPrice() {
  let url =
    "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=USD&apikey=" +
    API_KEY;
  let response = await fetch(url);
  let responseAsJSON = await response.json();
  let monthlyPrice = responseAsJSON["Time Series (Digital Currency Monthly)"];

  for (let i = 0; i < month.length; i++) {
    const priceEachMonth = Math.round(monthlyPrice[month[i]]["1a. open (USD)"]);
    price.push(priceEachMonth);
  }
}
