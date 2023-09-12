const models = {
        userModel: require('./nosql/users'),
        tracksModel: require('./nosql/tracks'),
        storageModel: require('./nosql/storage'),
        geojsonModel: require('./nosql/geojson'),
}

module.exports = models;