# AuthLogin - React + Spring Boot (JWT)

Projeto fullstack de autenticação utilizando **Java Spring Boot**, **JWT** e **React com TypeScript**.

## 🔒 Descrição

O objetivo deste projeto foi estudar e implementar um sistema simples e completo de autenticação com **JWT (JSON Web Token)**, incluindo:

* Backend com **Spring Boot + Spring Security**
* Frontend com **React + TypeScript**
* Banco de dados SQL (PostgreSQL via Neon)
* Hospedagem do backend na **AWS**
* Deploy do frontend na **Vercel**

---

## 🚀 Tecnologias Utilizadas

### Backend

* Java 17
* Spring Boot
* Spring Security
* JWT (com.auth0\:java-jwt)
* PostgreSQL (Neon)
* JUnit para testes
* SpringDoc OpenAPI (Swagger)

### Frontend

* React
* TypeScript
* Axios

---

## 📦 Funcionalidades

* Registro de usuário
* Login de usuário
* Geração de token JWT
* Acesso a rota protegida com autenticação via token
* Validação do token no frontend
* Controle de sessão e armazenamento do token
* Logout

---

## 🔗 Acesse

* **Frontend online:**
  👉 [https://auth-login-react.vercel.app/](https://auth-login-react.vercel.app/)

* **Swagger (Documentação da API):**
  👉 [https://3.22.77.140:8443/swagger-ui/index.html#](https://3.22.77.140:8443/swagger-ui/index.html#)

* **Backend hospedado na AWS**

---

## 📸 Demonstração

No vídeo abaixo demonstro o fluxo completo:

1. Registro
2. Login
3. Geração do token JWT
4. Acesso à rota protegida
5. Testes via Insomnia

---

## ⚙️ Como Executar Localmente

### Backend

1. Clone o repositório backend:

```bash
git clone https://github.com/PedroFDias/AuthLogin-ReactTs
```

2. Configure o banco de dados PostgreSQL.
3. Ajuste o `application.properties` com suas configurações de banco e porta.
4. Execute o projeto via IDE ou comando Maven:

```bash
./mvnw spring-boot:run
```

### Frontend

1. Instale as dependências:

```bash
npm install
```

2. Execute:

```bash
npm run dev
```

---

## ✅ Contribuição

Contribuições, sugestões ou melhorias são sempre bem-vindas!

---

## 📄 Licença

Este projeto está sob a licença MIT.
