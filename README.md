# Events Travel Frontend assignment

This repo is the frontend assignment for applicants. This repo consists of two parts: Frontend & API. The assigment is to build this mini-application with the specified requirements (see Frontend --> requirements) and following the given design (see frontend --> Home & frontend --> List). Besides the requirements, you are completely free on how you would realize this application. You can also utilize a component library, but be aware: you should follow the design.

## API

### Usage

- Install dependencies with `yarn` or `npm i`
- Run the server with `yarn (or npm) run start` or `yarn (or npm) run dev`
- We have a Postman collection available in the `api` directory

### Specifications

#### Interfaces

##### Ticket

```
interface Ticket {
  id: number;
  email: string;
  title: string;
  description: string;
  price: number;
  amount: number;
  supplier: string;
}
```

#### Endpoints

##### Get all tickets

- URL:
  `/tickets`
- Method:
  `GET`
- Success Response

```
interface GetTicketsResponse {
  data: Ticket[];
}
```

##### Add new ticket

- URL:
  `/tickets`
- Method:
  `POST`
- Request parameters

```
interface PostTicketsRequest {
  ticket: Ticket;
}
```

- validations

  - `ticket` cannot be `null | undefined`
  - `ticket.email` must be a valid email
  - `ticket.price` must be a number
  - `ticket.amount` must be a number

- Success Response

```
interface GeneralResponse {
  message: string
}
```

- Validation Error Response

```
interface ValidationErrorResponse {
  message: string,
  valid: boolean
}
```

## Frontend

The frontend consists of two screens: Home & List. This repo also contains a boilerprate (Create React App) project with the necessary things setup. Typscript is also included. Feel free to arrange the project structure to your own needs.

Also, try to follow the design as much as possible and use margins and paddings consistently.

### Colors, fonts and logo's

You will find the Events travel logo in the `frontend/public` directory named `ET-logo.png` or use the url `https://firebasestorage.googleapis.com/v0/b/fe-assignment-d05f6.appspot.com/o/ET-logo.png?alt=media&token=392c6669-9410-4af4-b676-632909ec9bfd`.

The following colors are used:

- Blue: `#2e93bf`
- lightgrey: `#707070`
- white: `#ffffff`
- red: just use the standard red

Font does not matter.

### Requirements:

- Must use typescript
- Must use the API to fetch and post data
- Must have a form of routing
- Must use functional components
- Must use React Hooks
- Must use Redux to manage state

### Home

This is where a user can add new tickets. This screen is really basic. It just containers a navbar, a form with a few input fields and an add button.
![Home](https://firebasestorage.googleapis.com/v0/b/fe-assignment-d05f6.appspot.com/o/ticket-form.png?alt=media&token=3657cf34-7bf9-4d58-a74e-a85796ddaf57)

### List

This is where a list of all the tickets are shown
![Home](https://firebasestorage.googleapis.com/v0/b/fe-assignment-d05f6.appspot.com/o/ticket-list.png?alt=media&token=976758f0-c167-4d95-8215-2e64498a28bc)
