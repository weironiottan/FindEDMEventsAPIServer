// const fetchZouk = require('./web-scraping/fetch-zouk')
// const fetchHakassanGroup = require('./web-scraping/fetch-hakassan-group')
// const fetchWynn = require('./web-scraping/fetch-wynn')
// const EdmEvent = require('./models/edmevent');


// keep this for troubleshooting
// app.get('/add-edm-bulk-events', (req, res) => {
//   fetchDataAndUpdateCollection()
//   async function fetchDataAndUpdateCollection() {
//     try {
//       const zoukEdmEvents = await fetchZouk.fetchZoukEDMEvents()
//       const hakkasanGroupEdmEvents = await fetchHakassanGroup.getHakassanGroupEDMEvents()
//       const wynnEdmEvents = await fetchWynn.fetchWynnGroupEDMEvents()
//       const _collectionDeleted = await EdmEvent.deleteMany()
//       const resultFromCollection = await EdmEvent.insertMany([...zoukEdmEvents, ...hakkasanGroupEdmEvents, ...wynnEdmEvents])
//       res.send(resultFromCollection)
//     } catch(error) {
//       console.log(error)
//     }
//   }
// });