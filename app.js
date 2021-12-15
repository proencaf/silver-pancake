// Create a website that checks surf data for a beach in the UK
// make sure you figure out if API is working + free ( don't waste time)
// simple functionality (fetch 1 or 2 parameters **only**)
// param 1 (wave size) param 2 (wind or temp)

// css plan
// go for simple but "nice" looking website
// add hover effects and keyframes on button and or text div.
// use coolors and shadowlord for colors
//experiment with position relative, absolute,fixed

// keep it simpple

// ----- Wave size api---only 50 calls a day for free usage and only 1 specific location can be fetched, newquay has been selected)
const lat = 50.4163
const lng = -5.1001
const params = 'waveHeight'
const pElement = document.querySelector('#wave-size')
const buttonElement = document.querySelector('#button')
const textElement = document.querySelector('.text-field')

async function getWaves() {
  const response = await fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
    {
      headers: {
        Authorization: `f3c71ae4-2816-11ec-93db-0242ac130002-f3c71b5c-2816-11ec-93db-0242ac130002`,
      },
    }
  )

  const data = await response.json()
  console.log(data)
  //console.log(data);
  //const waveData = data.hours[0].waveHeight.noaa;
  //console.log(waveData);
  const allWaveData = data.hours.map((x) => x.waveHeight.sg)
  //console.log(allWaveData);
  //let waveSize = waveData.waveHeight;
  //console.log(waveSize);
  //let waveNoaa = waveSize.noaa;
  //console.log(waveNoaa);
  //const waveAverage = allWaveData.reduce((a, b) => a + b, 0) / 241;
  //console.log(waveAverage);
  //const waveSizeDay = Math.round(waveAverage);
  //console.log(waveSizeDay);
  const highestWave = Math.max(...allWaveData)
  const smallestWave = Math.min(...allWaveData)
  pElement.innerText = `Today Fistral Beach - Newquay 
  biggest 🌊 ${highestWave} m  
  smallest 🌊 ${smallestWave} m`
}

buttonElement.addEventListener('click', getWaves)
