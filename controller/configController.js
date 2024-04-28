const { setConfig } = require('../repository/configRepository');
const configServices = require('../services/configServices');

module.exports = {
  
async getAllConfig (req, res)  {
  try {
    const { environment,service } = req.body;
    const config = await configServices.getAllConfig(environment,service);
    res.status(200).json(config);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
},

async setConfig (req, res)  {
  try {
    const { environment,service, dburl, rbmqurl, baseurl,port } = req.body;
    const args = {
      dburl : dburl,
      rbmqurl : rbmqurl,
      baseurl : baseurl,
      port : port,
    }
    const config = await configServices.setConfig(environment,service,args);
    res.status(200).json(config);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
},

}
