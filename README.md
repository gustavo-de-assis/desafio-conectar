# Informações Gerais do Projeto

Este projeto utiliza as seguintes tecnologias e bibliotecas:

- **Next.js**: Framework React para renderização do lado do servidor (SSR) e geração de páginas estáticas.
- **Bibliotecas**:
  - **React Hook Form**: Para gerenciamento de formulários.
  - **shadcn**: Componentes UI reutilizáveis.
  - **Tailwind CSS**: Framework CSS utilitário para estilização.

### Funcionalidades Implementadas

#### Frontend

- **Páginas**:
  1. **Página Principal**: Gráfico de evolução do PIB Brasileiro em Dólares
  2. **Página `/tabela`**: Tabela com os dados da evolução do PIB Brasileiro em Dólares

# Guia de Configuração e Execução do Projeto

Este guia fornece instruções para configurar, construir e rodar o projeto.

## Requisitos

Antes de iniciar, certifique-se de ter instalado:

- **Node.js** (versão recomendada: 18.x ou superior)
- **NPM** (gerenciador de pacotes do Node.js)

## Configuração do Frontend (Next.js)

1. Acesse a pasta do frontend:

   ```sh
   cd project_app
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Configure as variáveis de ambiente:
   Você vai precisar de obter uma API_Key no site https://www.exchangerate-api.com/. Crie uma conta e substitua a api key fornecida em seu env.

   - Copie o arquivo `.env.example` para `.env` e preencha os valores necessários (API_KEY).

4. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

## Build e Execução em Produção

### Frontend

1. Gere o build:
   ```sh
   npm run build
   ```
2. Inicie o servidor Next.js:
   ```sh
   npm start
   ```

## Considerações Finais

- Em produção, configure variáveis de ambiente adequadas para segurança e performance.
- Caso utilize um serviço de hospedagem, verifique as configurações específicas para Next.js.

Se precisar de mais informações, entre em contato!
