class BitcoinBlockPage {
 
  
    visitBlockPage(url) {
      cy.visit(url);
    }
  
    getTransactionHeading() {
      // Get the transaction heading element
      return cy.get('.transactions > h3');
    }
  
    getAllTransactions() {
      // Get all transaction boxes
      return cy.get('.transactions > .transaction-box');
    }
  
    getTransactionInputs($transaction) {
      return $transaction.find('.ins-and-outs > .vins > .vin').length;
    }
  
    getTransactionOutputs($transaction) {
      return $transaction.find('.ins-and-outs > .vouts > .vout').length;
    }
  
    getTransactionHash($transaction) {
      return $transaction.find('.header > .txn > a').text();
    }
  }
  
  export default new BitcoinBlockPage();
  