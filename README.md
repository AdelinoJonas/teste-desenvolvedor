
# Teste Prático para Desenvolvedor

**Duração:** 2 horas

## Objetivo
Este teste tem como objetivo avaliar seu conhecimento em desenvolvimento, incluindo a criação de APIs no backend, a construção de interfaces no frontend, e a integração entre frontend e backend.

## Instruções Gerais
1. **Backend**: Crie uma API RESTful com Node.js usando o NestJs (https://nestjs.com/).
2. **Frontend**: Crie uma interface gráfica que consuma essa API em React ou Vuejs.
3. **CRUD**: Implemente operações de Create, Read, Update, Delete (Não precisa de banco de dados pode usar armazenamento em arrays).
4. **API**: Sua API deve expor endpoints para gerenciar registros.
5. **Interface**: A interface deve permitir a interação com os dados da API.

## Detalhamento das Tarefas

### 1. Backend (API RESTful)
- Crie uma API com os seguintes endpoints:
  - `POST /items`: Criar um novo item.
  - `GET /items`: Listar todos os itens.
  - `GET /items/{id}`: Obter um item específico pelo ID.
  - `PUT /items/{id}`: Atualizar um item existente.
  - `DELETE /items/{id}`: Excluir um item.

**Requisitos:**
- **Armazenamento dos dados**: Use um banco de dados em memória ou uma solução real como MongoDB.
- **Estrutura de dados**: Exemplo de estrutura JSON:
  ```json
  {
    "id": 1,
    "name": "Item 1",
    "description": "Description of item 1"
  }
  ```

### 2. Frontend (Interface de Usuário)
- Crie uma interface gráfica que permita:
  - **Listar** os itens da API.
  - **Adicionar** um novo item.
  - **Atualizar** um item existente.
  - **Deletar** um item.

**Requisitos:**
- **Conexão com a API**: A interface deve consumir os endpoints da API.
- **Layout**: Não é necessário um layout complexo. Foque na funcionalidade.
- **Validação**: Adicione validação básica nos formulários.

## O que será avaliado
- **Funcionalidade**: Correta implementação do CRUD.
- **Integração**: Comunicação entre frontend e backend via API.
- **Organização do Código**: Boas práticas e clareza no código.
- **Tempo de Execução**: Completar a tarefa dentro do prazo de 1:30.

## Entrega
- Envie o link do repositório no GitHub para `desenvolvimento@bluelogic.com.br`, com as seguintes informações:
  - Nome completo
  - E-mail
  - Telefone de contato
  - **Instruções detalhadas sobre como executar o projeto** (instalação, dependências e como rodar).

## Considerações Finais
Boa sorte! Estamos ansiosos para ver sua solução.