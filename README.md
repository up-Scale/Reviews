# Description
This component displays the reviews for each listing in the up-Scale application.


## Related Projectts

  - https://github.com/up-Scale/Proxy_Dev
  - https://github.com/up-Scale/ProductInfo
  - https://github.com/up-Scale/Gallery
  - https://github.com/up-Scale/Overviews
  
### Launching the application locally
Before the microservice can be run, a MySQL database needs to be set up to store the description table. Follow the steps below to initialize a schema and populate the table.

```sh
# download dependencies
npm install

# set up MySQL schema
go to your root directory
mysql -u root < database-mysql/schema.sql

# populate database
npm run seed-product

# start server on localhost
npm run server-dev

# run webpack to build client bundle
npm run react-dev
```
