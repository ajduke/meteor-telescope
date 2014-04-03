logSearch = function (keyword) {
  Telescope_Searches.insert({
    timestamp: new Date().getTime(),
    keyword: keyword
  })
}