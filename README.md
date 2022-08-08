# Node Graphql Typeorm Code Lab

In this code lab, I've explored several fundamental concepts of GraphQL.

The scenario used is a PetShop with User and Pet registration.

Despite being a simple scenario with only two entities, many important concepts of GraphQL are explored, such as: Scalar Types, Object Types, resolvers, queries, mutations, context, middlewares, among others.

## Built With

- NodeJs
- Typescript
- Express
- Graphql
- Typeorm
- Postgres
- Apollo Server
- Bcrypt

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Node v16
- Postgres

Postgres configurations can be edited at `src/config/database/index.ts`

Or if you have Docker, simply run:

```
sudo docker run -d --name typegraphql -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=typegraphqldb postgres
```

### Install

```
npm install
```

### Usage

1 - Run:

```
npm run start
```

2 - Access `localhost:3000/graphql` on the browser

3 - Click on the button `Query your server`

## Authors

👤 **Sergio Torres**

- Github: [@Torres-ssf](https://github.com/Torres-ssf)
- Linkedin: [torres-ssf](https://www.linkedin.com/in/torres-ssf/)

## 📝 License

This project is [MIT](lic.url) licensed.
