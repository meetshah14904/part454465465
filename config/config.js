/*const config = {
env: process.env.NODE_ENV || 'development', 
port: process.env.PORT || 3000,
jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
mongoUri: process.env.MONGODB_URI ||
process.env.MONGO_HOST ||
'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
'/mernproject' 
}
export default config*/

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,  // This will use the PORT environment variable if available, otherwise default to 3000
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI || "mongodb+srv://meet:meet14@cluster0.yqvokoa.mongodb.net/meet"  // Replace with your MongoDB URI
};

export default config;

