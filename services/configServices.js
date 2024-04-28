const configRepository = require('../repository/configRepository');

module.exports =  {
    
async getAllConfig (environment,service){
    try{
    return  await configRepository.getAllConfig(environment,service);
    }
    catch(error){
        console.log("error in getconfig",error);
        return {};
    }
},
async setConfig (environment,service, args){
    try{
    return  await configRepository.setConfig(environment,service,ags);
    }
    catch(error){
        console.log("error in setconfig",error);
        return {};
    }
},

}