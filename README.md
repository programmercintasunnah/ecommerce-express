# ecommerce-express

# Backend: You need to setup database to run server. So, How can run it?

1. You need to edit config.js or .env inside folder config. Config what?

- username, password, and then database. If you haven't database. You should use command: npx sequelize create:db

2. You need to create folder model and migration. But, how can do it?

- Use: npx sequelize model:generate --name TenModel --attributes property:type, property:type. So I have 6 models, you need to create 6 models with name and attributes corresponding
- Then use: npx sequelize db:migrate to table migrate

3.  Add your data to database.
