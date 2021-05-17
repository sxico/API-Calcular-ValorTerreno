# Passo a Passo para utilizar da API

_Neste Projeto foi utilizado como base de dados o MySQL_


## Instalar Pacotes
```
npm install
```

## Executar API em modo DEV
```
npm run dev
```

## Executar API em modo de Produção
```
npm start
```

# Parametros ( GET calcular o valor do imóvel atráves da quantidade de metros e com CEP
### cep: String - metros: String

## Request
```
GET /valortotal
```
```
http://localhost:3005/valortotal?cep=<>cep&metros=<metros>
```
### Exemplo
```
http://localhost:3005/valortotal?cep=12121212&metros=20
```


## Demonstração

Base de dados MySQL com valores demonstrativos cadastrado

### Valores

Bairro: Cambuí - CEP: 10101101 - Valor Metro: 1000  
Bairro: Taquaral - CEP: 11111111 - Valor Metro: 2000  
Bairro: Centro - CEP: 12121212 - Valor Metro: 800  

## Docker
Para uso do Docker deve ter o mesmo instalado [Docker](https://docs.docker.com/get-docker/)  e [Docker Compose](https://docs.docker.com/compose/install/)  

### Executar Docker
Primeiro vamos a raiz do projeto e dentro dela via terminal digitamos (Linux - Ubuntu)
```
sudo docker-compose up
```

## Observação

Deve utilizar o banco de dados [mySQL](https://www.mysql.com/downloads/) - Para pode utilizar o Xampp ou Lampp ou [Docker]

### Docker
O comando abaixo foi utilizado de um exemplo da internet, caso queira um teste rápido

```
docker run --name=mysql1 -p 3306:3306 -e MYSQL_ROOT_PASSWORD="" -d mysql/mysql-server:8.0
```

Os próximos passos desde a criação de uma base de dados, tabela e inserir os dados

#### Acessar Docker-MySQL via terminal
```
docker exec -it mysql1 mysql -uroot -p
```

