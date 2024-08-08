# Petshop Finder 

## Descrição

Petshop Finder é uma aplicação web que ajuda você a encontrar o melhor petshop para o seu pet com base na data de serviço, quantidade de cães pequenos e grandes, e os preços praticados nos dias de semana e fins de semana. A aplicação é composta por um frontend desenvolvido em React e um backend em Node.js com Express, que se comunicam por meio de uma API RESTful.

## Decisões

- Utilização de React no frontend pela sua flexibilidade e ampla adoção.
- Node.js com Express no backend devido à sua simplicidade e eficiência em criar APIs.
- Verificação das requisições utilizando o Postman para garantir a correta comunicação entre o frontend e o backend.
- Estrutura de pastas organizada para separar as responsabilidades entre frontend e backend, facilitando a manutenção.

## Lista de Premissas

- A aplicação deve calcular o melhor petshop com base na distância e no preço total.
- O frontend deve permitir ao usuário selecionar a data e informar a quantidade de cães pequenos e grandes.
- O formato de data utilizado é yyyy-mm-dd.
- A comunicação entre o frontend e o backend deve ser feita de forma assíncrona utilizando Axios.
- O sistema considera que o backend e o frontend estão rodando em localhost nas portas 5555 e 3000, respectivamente.
- O backend deve retornar o petshop ideal em formato JSON.

## Instruções para Executar o Sistema

### Pré-requisitos
Siga o seguinte passo a passo:
  
1. **Instalando o Node.js:**
  O Node.js é necessário para rodar o backend e gerenciar pacotes. Você pode baixá-lo e instalá-lo a partir do site oficial:
- [Download Node.js](https://nodejs.org/)

2. **Verificação:**
  Após a instalação, verifique se o Node.js e o npm (gerenciador de pacotes do Node.js) estão corretamente instalados. 

3. **Iniciando o projeto:**
  Com as devidas configurações ajustadas do Node.js, na pasta raiz (petshop-finder) execute o comando:

```bash
npm install
```
**Em seguida:**

```bash
npm start
```

4. **URL Frontend:**
A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

5. **URL Backend:**
O servidor estará rodando em [http://localhost:5555](http://localhost:5555).

## Observações
- Utilize ferramentas como Postman para testar os endpoints do backend e garantir que tudo está funcionando conforme esperado.
```bash
POST -> { "date": "2024-08-07", "smallDogs": 3, "largeDogs": 5 }
```
