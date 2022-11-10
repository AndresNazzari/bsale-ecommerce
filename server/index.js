import server from './server.js';
import cors from 'cors';
import { depInySetup, container } from './src/config/dep-inyection-setup.js';
import { config } from './src/config/config.js';

const app = server(cors, depInySetup, container);

app.listen(config.PORT || 3000, () => {
  console.log(`🚀 Server started on port  ${config.PORT} `);
});

app.on('error', (error) => console.log(`Error on server ${error}`));
