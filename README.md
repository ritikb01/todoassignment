# Bitcoin Block Transaction List Tests

This repository contains Cypress tests for verifying the Bitcoin block transaction list on [Blockstream.info](https://blockstream.info). The test suite ensures that the transaction list displays correctly and identifies specific transactions with one input and two outputs.

## Project Structure

```
├── cypress
│   ├── integration
│   │   ├── bitcoin-block-transaction.spec.js
│   ├── support
│   │   ├── bitcoin-block-transaction-pageobject.js
├── README.md
```

### Files

- **`bitcoin-block-transactions.spec.js`**
  - Contains the test suite for Bitcoin block transactions.
  - Uses the Page Object Model (POM) for cleaner and maintainable code.

- **`bitcoinBlockPage.js`**
  - Encapsulates page-specific selectors and actions.
  - Provides reusable methods for interacting with the Bitcoin block page.

## Prerequisites

Ensure you have the following installed:

1. [Node.js](https://nodejs.org/) (version 12 or later)
2. [npm](https://www.npmjs.com/)
3. [Cypress](https://www.cypress.io/)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ritikb01/todoassignment
   ```

2. Navigate to the project directory:
   ```bash
   cd bitgoassignment
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Tests

1. Open the Cypress Test Runner:
   ```bash
   npx cypress open
   ```
   - Select the test file `bitcoin-block-transactions.spec.js` to run the tests.

2. Run tests in headless mode:
   ```bash
   npx cypress run
   ```