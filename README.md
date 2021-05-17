# Passo a Passo para utilizar da API

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




