## Available Scripts

In the project directory, you can run:

###

start graphql server: `npm start` or `node src/index.js`

## commands

### check database

run: `npx prisma studio --experimental`
_launches gui on port http://localhost:5555_

### run query

in the graphql playground run:

```query {
  feed {
    id
    url
    description
  }
}
```

### create new user

```
mutation {
  signup(
    name: "Alice"
    email: "alice@prisma.io"
    password: "graphql"
  ) {
    token
    user {
      id
    }
  }
}
```

### Authrized user

From the server’s response, copy the authentication token and open another tab in the Playground. Inside that new tab, open the HTTP HEADERS pane in the bottom-left corner and specify the Authorization header - similar to what you did with the Prisma Playground before. Replace the **TOKEN** placeholder in the following snippet with the copied token:

```
{
  "Authorization": "Bearer __TOKEN__"
}
```

_Whenever you’re now sending a query/mutation from that tab, it will carry the authentication token._

#### make post from logged in user

With the Authorization header in place, send the following to your GraphQL server:

```
mutation {
  post(
    url: "www.graphqlconf.org"
    description: "An awesome GraphQL conference"
  ) {
    id
  }
}
```
