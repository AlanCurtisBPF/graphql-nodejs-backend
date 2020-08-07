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

### Login

```
mutation {
  login(
    email: "alice@prisma.io"
    password: "graphql"
  ) {
    token
    user {
      email
      links {
        url
        description
      }
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

### test subcription

1. run server
1. open two tabs in the browser
1. playground one send subscribe

```
subscription {
  newLink {
      id
      url
      description
      postedBy {
        id
        name
        email
      }
  }
}
```

1. playground two sign in
1. and post

### Voting

#### subscribe

```
subscription {
  newVote {
    id
    link {
      url
      description
    }
    user {
      name
      email
    }
  }
}
```

#### vote for link

_vote will only work if you are logged in other wise you will get an error_

```
mutation {
  vote(linkId: "__LINK_ID__") {
    link {
      url
      description
    }
    user {
      name
      email
    }
  }
}
```

### filters

```
query {
  feed(filter:"full") {
    id
  	description
    url
    postedBy {
      id
      name
    }
  }
}
```

### test pagination

```
query {
  feed(
    take: 1
    skip: 1
  ) {
    id
    description
    url
  }
}
```
