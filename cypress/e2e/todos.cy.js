describe('FanCode Users Todos Completion Test', () => {
  const usersAPI = 'https://jsonplaceholder.typicode.com/users';
  const todosAPI = 'https://jsonplaceholder.typicode.com/todos';

  it('should verify that all users from the city FanCode have completed more than 50% of their todos', () => {
    //Fetch users
    cy.request(usersAPI).then((response) => {
      expect(response.status).to.equal(200);

      //Filter users based on the lat and lng criteria for the city FanCode
      const fanCodeUsers = [];
      for (let i = 0; i < response.body.length; i++) {
        const user = response.body[i];
        const lat = parseFloat(user.address.geo.lat);
        const lng = parseFloat(user.address.geo.lng);
        if (lat > -40 && lat < 5 && lng > 5 && lng < 100) {
          fanCodeUsers.push(user);
        }
      }

      // Assert that fanCodeUsers is not empty
      expect(fanCodeUsers).to.not.be.empty;
      
      //Fetch todos for the identified FanCode users
      fanCodeUsers.forEach(user => {
        cy.request(`${todosAPI}?userId=${user.id}`).then((todosResponse) => {
          expect(todosResponse.status).to.equal(200);

          const todos = todosResponse.body;
          const totalTodos = todos.length;
          const completedTodos = todos.filter(todo => todo.completed).length;

          //Calculate and assert the completion percentage
          const completionPercentage = (completedTodos / totalTodos) * 100;
          cy.log(`User: ${user.name}, Completion Percentage: ${completionPercentage}%`);
          expect(completionPercentage).to.be.greaterThan(50);
        });
      });
    });
  });
});