const config = {
  server: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development'
  },

  database: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/deprem_detector',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },

  services: {
    // Example: earthquakeApiKey: process.env.EARTHQUAKE_API_KEY
  }
};

module.exports = config;
