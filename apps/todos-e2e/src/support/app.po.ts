export const getGreeting = () => cy.get('h1');
export const getTodos = () => cy.get('li.todo');
export const getAddTodobutton = () =>
  cy.get('button#add-todo');
