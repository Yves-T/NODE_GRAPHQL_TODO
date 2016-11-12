## Demo GraphQl & mongoose

Express graphql server that demonstrates the following working toghether:

* Express
* mongo
* GraphQl

### Usage

```
npm install
npm run start
```

###Possible queries

Point your browser to [http://localhost:4000/graphql](http://localhost:4000/graphql)

#### To add a todo

```
mutation {  
  add(title: "Read a book") {
    id,
    title
  }
}
```

#### List all todos

```
{
  todos {
    id
    title
  }
}
```
