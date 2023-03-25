## Guia de estudos .Net


## Injeção de dependência
  
    - Porque é interessante usar Injeção de Deps ?
      - Vamos receber uma classe já instanciada e com todos parâmetros corretos e a regra de negócio irá somente utilizar essa classe, sem se preocupar com detalhes desnecessários
      - Existem 3 tipos
        - Transient:
          - Faz com que a cada chamada o objeto configurado na injeção de deps será instanciado novamente. Como se a cada chamada fosse um "new"
        - Scoped:
          - Faz um new que será compartilhada durante o ciclo de vida da request.
          - Imagine que a regra de negócio irá utilizar outra regra de negócio e ambas necessitam de uma instância da classe do banco de dados. A injeção de dependência será a mesma durante o cliclo do request.
        - Singleton:
          - A instância é a mesma para todas regras de negócio durante todo ciclo de vida da aplicação. Não é a melhor abordagem, porém útil em alguns casos!

      - Sempre dê preferencia ao Scoped, pois dura apenas o ciclo de vida necessário.

## Explicação SonarCloud

    - Usado para medir a qualidade e confiabilidade do código.
    - Plataforma grátis caso o projeto seja OpenSource
    - O que é um code Smell ?
      - Uma caracteristica do código que não é um problema, mas pode vir a causar um problema no futuro.
    - Bugs -> Mostra quantos BUGS foram encontrados no código (Sem ser problemas de compilação) que podem gerar erros no sistema.
    - Vunerabilities -> Partes que podem ser exploradas por alguem mal intencionada
    - Duplications -> Coisas repetidas que podem ser reduzidas.

## O que é Domain-Driven-Design

    - Define uma modelagem baseada nos problemas a serem resolvidos como casos de uso
    - Um exemplo:
      - API -> DOMAIN <- INFRA = API e INFRA dependem do DOMAIN
    - No Domain ficam as regras de negócios do projeto
    - Na API ficam as conexões com o exterior
    - Modelo que consegue unificar a equipe, tendo o objetivo mais claro.

    ## API 
      - Recebe os Controllers
      - Hubs de conexão para WebSocket
      - Classes de REQ e RES
      - Exceptions personalizadas -> Filtros para melhor atender o projeto

    ## Domain
      - Ficam as entidades
      - Interfaces/contratos com o BD
      - Exceptions
      - Regras de negócio/Casos de uso
    
    ## Infra
      - Implementação dos Repositórios
      - Implementação de Migrate com BD
    
    - Como ficaria o Projeto ?
      - (API) Api
      - (Classes) Domain
      - (Classes) Infrastructure

    - É só fazer isso?
      - Depende, as vezes são necessárias alterações para melhor atender o projeto, porém o conceito segue o mesmo

## Azure Devops

    - Ferramenta da microsoft
    - Ajuda a controlar todo fluxo do projeto
    - Existe versão gratuita e versão paga


## Sprint no Azure

  - Normalmente definimos 5 dias de trabalhos para cada sprint 
  - Definimos quantos devs vão trabalhar e sua capacidade


## Primeira Sprint

  - Basicamente é feita para configuração
  - Configurar todo o projeto ( Classes, Configurações do projeto, etc... )
  - Configurar ferramentas extras

  - Na primeira sprint vou fazer só o cadastro de usuário
  - Criamos a primeira USER STORY
  - Criamos nossas tasks na user story
  - Melhor ter várias tasks com objetivos pequenos do que tasks com objetivos muito grandes


## Configurando o Repositório

  - É possível criar o repositório pela ferramenta de Repos da Azure DevOps
  - Fazendo isso basta clonar o projeto e seguir trabalhando
  - Não esqueça de marcar a tarefa como concluída hehe

## Organização de pastas

  - SRC -> Vai conter os projetos
  - Tests - > Projetos de testes unitários
  - SRC -> Backend -> Para quando existem mais projeto como mobile, backend e etc...
  - Shared -> Um projeto para armazenar as exceptions para exceptions customizadas

## Necessário configurar as dependências

  - Pode ser feito no inicio ou no andar do projeto

## Configurar o gitFlow

  - Criar uma branch develop a partir da master
  - Trocar para a develop
  - git flow init
  - qual branch é de prod ? Vamos usar a master
  - Para fazer o desenvolvimento ? Develop
  - Demais vamos usar apenas enter e usar o padrão

## Configurar o SonarCloud

  - Criar token para o Sonar no DevOps
  - Criar a organização no Sonar
  - Instalar a extensão do Sonar no devops
  - Para usar o pipeline na azure gratuito é necessário deixar o repo privado e preencher um form

## Criar repo para armazenar as infos do usuário

  - Configurar develop para só aceitar PR
  - Vamos criar o Schema no MySQL pelo código
  - Instalar o plugin DAPPER no Infrastructure
  - Criamos a migration dentro do Infra
  - Criamos uma classe para o acesso ao database
  - Caso não exista a tabela no DB, vamos executar uma query para criar a table  
  - Necessário colocar isso no Program.cs antes do app.run para atualizar antes da api iniciar

  - O AppSettigns.json vai conter tudo que o projeto vai utilizar
  - No AppSettigns.development vai o que é só do ambiente de Dev, tipo o npm i package -D
  - Como o DatabaseName é global vou colocar no Appsettigns, já a connectionString vai no development pq muda de acordo com o ambiente
  - Ao iniciar o APP, caso não exita o db o próprio código já vai criar
  - Para melhorar o código, vamos implementar uma função para pegar a connection string em domain


## Criando a tabela para armazenar os dados do usuário

  - Fazer via código
  - Fazer o versionamento dessas tabelas
  - Cada versão vai implementar uma classe do fluent migrator
  - para senha vamos usar HASH então vamos deixar com 2000 caracteres
  - Dentro do fluent migrator já existe um controle de versão, mas precisamos usar isso
  - Importante lembrar de criar o scopo do migrationExtension
  - Vamos criar uma extension para os services pois não somente as Injec Deps do migrator vão ser necessárias, como as do repositórios
  - Após isso é só adicionar no Program como um service
  - Lembrar sempre de fazer o commit


## Criar classes repositório

  - Criar uma pasta em Infra para melhorar as estruturas
  - Vamos precisar de um contexto deve ser criada apenas uma vez e dps só alterar para compor o projeto
  - Aplicar todas configurações que foram definidas no context ao onModelcreating
  - Criar a entidade para configurar e conectar com a tabela
  - Criamos uma entidade base para que as outras classes possam herdar o que é de todos
  - Vamos passar a ConnectionString por injeção de deps
  - Uma interface por responsabilidade para manter o SOLID
  - Vamos ter repositorio de leitura e outro de escrita
  - Para acessar a tabela vamos usar o context
  - Só vamos persistir se tudo der certo, se nada der certo nada vai ficar no bancos
  - UnityOfWork
  - Criamos um Dispose para liberar a memória que foi usada na unidade de trabalho
  - Adicionamos as deps injections em Bootstrapper
  
## Criar regra de negócio para registrar usuário

  - Primeira coisa que a regra de negócios vai receber é o JSON com as infos
  - Criamos as pastas Request e Response para armazenar e tratar o que for necessário dentro de seu contexto
  - Vamos validar cada campo que vamos receber individualmente 
  - Vamos usar um arquivo de recurso
  - São uteis até para fazer traduções
  - Para acessar esse arquivo basta usar o nome dele e importar o recurso
  - Para forçar a usar outro idioma basta usar o Resource.Culture e CultureInfo
  - Separar os usecases para cada caso, seguinto o principio S de SOLID
  

## Custom Exceptions

  - São importantes pois a mensagem retornada para o front pode mostrar informações cruciais que não devem vazar
  - Podemos customizar com uma mensagem onde o suporte pode facilmente entender e saber onde fica o problema
  - Criamos um arquivo base de exceptions 
  - Criamos exceptions variadas

## Salvar infos no Banco de Dados

  -  Vamos usar nosso repo
  -  Vamos usar o automapper para mapear a entidade
  -  Na API vamos configurar o automapper para funcionar como injeção de deps
  -  Vamos criptografar a senha na regra de negócio
  -  Se você quiser manter o nome da tabela diferente do nome da entidade, podemos mapear na classe

## Criptografando a senha

  - Vamos usar outra forma de injeção de deps
  - Toda vez que alguem precisar da classe, vamos usar um new e passar a chave adicional que fica no appsettings
  - Quando o usuário faz login, retornamos um token para usar nas próximas requisições
  - Vamos usar o JWT
