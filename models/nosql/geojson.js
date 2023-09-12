const mongoose= require('mongoose');

const GeojsonScheme = new mongoose.Schema(
    {
        info:{
            siteAcquisition:{
                type: String
            },
            samplePointId:{
                type: String
            },
            surveyId:{
                type: String
            },
            longitud:{
                type: String
            },
            latitud:{
                type: String},
            anguleSunpoint:{
                type: String
            },
            dateAcquisition:{
                type: String
            },
            captureMethod:{
                type: String
            },
            parametersAcquisition:{
                type: String
            },
            operator:{
                type: String
            },
            owner:{
                type: String
            }
        }

    },
    {
        timestamps:true, //TODO createdAT, updatedAT
        versionkey:false
    },
);

module.exports = mongoose.model("data", GeojsonScheme)