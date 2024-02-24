import express from "express";
import bodyParser from "body-parser";
import {User} from "./users";
import {DataSource} from "typeorm";
import userRoute from './routes/users';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', function(req, res){
  res.send('hello world')
});
app.use('/api/users', userRoute)
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "postgres",
  entities: [User],
  migrations: [User],
  synchronize: true,
  logging: true,
})


AppDataSource.initialize()
  .then(async () => {
    console.log("Connection initialized with database...");
  })
  .catch((error) => console.log(error));
app.listen(3000);
