## Context

A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.

## Constraints

- Given a record of every transaction during a three-month period, calculate the reward points earned for each customer per month and total.
- A customer reeives 2 points for every dollar spent of $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction. (e.g. a $120 purchase = 2 _ $20 + 1 _ $50 = 90 points)

```javascript
if (amount >= 50 && amount < 100) {
      return amount - 50;
    } else if (amount > 100) {
      return 2 * (amount - 100) + 50;
    }```

## Tecnical Requirements

- ReactJS
- Simulate an asynchronous API to fetch data
- Make up a data set
- Check into GitHub

## Steps

First, run the development server:

```bash
npm install
# and
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
`````

Second, open [http://localhost:3000](http://localhost:3000) with your browser.

Third, sign in with the following credentials:

- Email: superawesome@fake.com
- Password: Password123

## Explanation

Every bit of the implementation is intentional:

- The API is a simulation intended to demonstrate knowledge of HTTP request methods, as well as data formats and streams. For a production-grade application, the business logic associated with purchases, for example, could be established as a cloud function within a serveless framework.
- Outside of authentication and a conditional history push, there are no other considerations for security and routing. A happy path is assumed. The aforementioned items should be built as extensive features.
- A product application would have treater attention paid to render and performance patterns - client vs server, code-splitting, etc.
