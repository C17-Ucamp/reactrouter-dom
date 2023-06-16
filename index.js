const getCurrency = async() =>{
    const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-11-24/currencies/eur.json')
    const datos = await response.json()
    console.log(datos)
    getChartCurrency(datos)
}

getCurrency()

const getChartCurrency = (datos) =>{
    const chart = document.getElementById('myChart')

    const dates = Object.keys(datos)
    console.log(dates)
    const exchageEur = datos.eur 
    console.log(exchageEur)
    new Chart(chart, {
        type: 'bar',
        data: {
          labels: dates,
          datasets: [{
            label: 'Tasa de Cambio Euros',
            data: exchageEur,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
    });
}

const getBitcoin = async() =>{
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const datos = await response.json()
    console.log(datos)
    getChartBitcoin(datos)
}

getBitcoin()

 const getChartBitcoin = (datos) =>{
     const chart = document.getElementById('myChart2')

     const labes = datos.map((coin) => coin.name)
     const marketCap = datos.map((coin)=> coin.market_cap)

     new Chart(chart, {
         type: 'bar',
         data: {
           labels: labes,
           datasets: [{
             label: 'Valor de Mercado',
             data: marketCap,
             borderWidth: 1
           }]
         },
         options: {
           scales: {
             y: {
               beginAtZero: true
             }
           }
         }
     });
 }

 const getRestaurant = async() =>{
    const response = await fetch('https://restcountries.com/v3.1/all')
    const datos = await response.json()
    console.log(datos)
    getChartResturants(datos)
}

getRestaurant()

  const getChartResturants = (datos) =>{
      const chart = document.getElementById('myChart3')
      
      const countries = datos.map((rest)=> rest.name.common)
      const population = datos.map((rest)=> rest.population)

      new Chart(chart, {
          type: 'bar',
          data: {
            labels: countries,
            datasets: [{
              label: 'Población',
              data: population,
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
      });
  }