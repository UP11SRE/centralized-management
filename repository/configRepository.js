const redisClient = require('../redisClient');

module.exports = {
  async getAllConfig(environment, service) {
    try {
      const key = `${environment}:${service}`;
      const response = await redisClient.hgetall(key);
      return response;
    } catch (error) {
      console.log("error in config-repo", error);
      return {};
    }
  },

  async setConfig(environment, service, args) {
    try {
      const key = `${environment}:${service}`;
  
      // Convert args object into an array of field-value pairs
      const fieldValues = Object.entries(args).flat();
  
      // Use hmset to set the field-value pairs in Redis hash
      const response = await redisClient.hmset(key, ...fieldValues);
  
      return response;
    } catch (error) {
      console.error("Error in setConfig:", error);
      return {};
    }
  },
  

};
