import {
  getTodos,
  getAddTodobutton,
} from '../support/app.po';

describe('todos', () => {
  beforeEach(() => cy.visit('/'));

  it('shuld display todos', () => {
    getTodos().should((t) => expect(t.length).equal(2));
    getAddTodobutton().click();
    getTodos().should((t) => expect(t.length).equal(3));
  });
});
