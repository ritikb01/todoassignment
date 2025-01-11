import BitcoinBlockPage from './bitcoin-block-transaction-pageobject'


describe('Bitcoin Block Transaction List', () => {
  const blockUrl = 'https://blockstream.info/block/';
  let BitcoinBlock = '000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732';

  beforeEach(() => {
    cy.visit(blockUrl + BitcoinBlock);
  });

  it('should display transaction list with the correct heading', () => {
    cy.get('.transactions .transaction-box').then(($numberOfBlockInThisPage)=>{
      let numberOfBlockInThisPage = $numberOfBlockInThisPage.length;
    BitcoinBlockPage.getTransactionHeading()
      .should('contain.text', `${numberOfBlockInThisPage} of 2875 Transactions`);
    })
  });

  it('should find transactions with 1 input and 2 outputs and log their hash', () => {
    BitcoinBlockPage.getAllTransactions().each(($transaction) => {
      const numberOfInputs = BitcoinBlockPage.getTransactionInputs($transaction);
      const numberOfOutputs = BitcoinBlockPage.getTransactionOutputs($transaction);

      cy.log(`Inputs: ${numberOfInputs}, Outputs: ${numberOfOutputs}`);

      if (numberOfInputs === 1 && numberOfOutputs === 2) {
        const transactionHash = BitcoinBlockPage.getTransactionHash($transaction);
        expect(numberOfInputs,`Transaction Hash: ${transactionHash}`).to.equal(1);
        expect(numberOfOutputs,`Transaction Hash: ${transactionHash}`).to.equal(2);
      }
    });
  });
});
