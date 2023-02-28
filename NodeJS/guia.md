# NODE JS + EXPRESS

  ## Rotas Sem express - Apenas com o módulo nativo
    
    - Estrutura base sem Express:
    
        const http = require("http"); //Utilizando Módulo nativo HTTP
        const port = 4000; //Definir porta 

        const routes = {
          '/': 'Hello from base',
          '/books': 'Hello from books',
          '/authors': 'Hello from Authors'
        };
        const server = http.createServer((req, res) => {
        // Devolvendo alguma coisa
        // 200 -> OK
        // Content-Type -> tipo do que vai ser devolvido
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(routes[req.url]);
      }); 

      server.listen(port, () => {
        console.log("Server iniciado em http://localhost:",port);
      }); //"Iniciar" o server

    
    - Para usar o Nodemon:
      -   "dev": "nodemon server.js"

 
## Com Express
 - npm install express
 - Seguir o padrão do app.js
   - Importar o Express 
   - Mapear as rotas
    
 - Para interpretar JSON = app.use(express.json())
    