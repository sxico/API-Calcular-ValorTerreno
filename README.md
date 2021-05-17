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

Bairro: Cambuí - CEP: 10101101 - Metro: 1000
Bairro: Taquaral - CEP: 11111111 - Metro: 2000
Bairro: Centro - CEP: 12121212 - Metro: 800


