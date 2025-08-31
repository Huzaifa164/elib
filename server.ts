import app from "./src/app.js";
import { config } from "./src/config/config.js";

const startServer = () => {
    const PORT = config.port || 3000;

    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    })
}

startServer();
