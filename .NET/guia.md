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