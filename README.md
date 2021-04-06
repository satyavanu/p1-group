# Events Travel Frontend assignment

This repo contains the frontend assignment for applicants. We would like to use this assignment to get some insight into your process of thought. You don't have worry, you can not fail this assignment as it's not a test. We like to use this assignment as a starting point for the interview conversation 🙂

It consists of two parts: **Frontend** & **API**, you will be working only in the Frontend, but will utilize the API for fetching data. 

## Assignment

The assigment is to build a mini-application that can add and show tickets using the API. You are completely free on how you would realize and structure the application, as long as the requirements are met. It's also fine to use a UI library as long as you don't change the provided designs.

### Requirements

- The project should use TypeScript
- The provided API should be used to fetch and post data
- The home and list page should be accessible by URL (so Routing should be used)
- Use functional components
- Use React Hooks
- Use Redux to manage state
- Functionality that can be interpreted from the designs should be implemented 
- Use margins and paddings consistently

**Note:** If you are stuck on a specific requirement and can't continue, consider just skipping it so you can continue with the rest.

**Home**

This is where an user can add new tickets. This screen is really basic. It just contains a navbar, a form with a few input fields and an add button.
![Home](https://firebasestorage.googleapis.com/v0/b/fe-assignment-d05f6.appspot.com/o/ticket-form.png?alt=media&token=3657cf34-7bf9-4d58-a74e-a85796ddaf57)

**List**

This is where a list of all the tickets are shown
![Home](https://firebasestorage.googleapis.com/v0/b/fe-assignment-d05f6.appspot.com/o/ticket-list.png?alt=media&token=976758f0-c167-4d95-8215-2e64498a28bc)

#### Colors, fonts and logo's

You will find the Events travel logo in the `frontend/public` directory named `ET-logo.png` or use the url `https://firebasestorage.googleapis.com/v0/b/fe-assignment-d05f6.appspot.com/o/ET-logo.png?alt=media&token=392c6669-9410-4af4-b676-632909ec9bfd`.

The following colors are used:

- Blue: `#2e93bf`
- lightgrey: `#707070`
- white: `#ffffff`
- red: just use the standard red

Font does not matter.


## API Documentation

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

`ticket` cannot be `null | undefined`

`ticket.email` must be a valid email

`ticket.price` must be a number

`ticket.amount` must be a number

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

