import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
    .then(() => {
        app.listen(3000, () => {
            console.log("Servidor executando na porta 3000");
        });
    }).catch((error) => {
        console.error("Error during Data Source initialization", error);
    });