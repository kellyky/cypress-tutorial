describe("Form test", () => {
  // Describe is a Cypress method borrowed from Mocha for containing one or more related tests. 
  // Every time you start writing a new suite of tets for a functionality: wrap it in a describe block
  // Takes two arguments (1) a string describing the test suite, (2) callback function for wrapping the actual test
  it("Can fill the form", () => {
    // takes 'it' (while Jest takes it or test interchangeably)
    // smoke test!
    cy.visit("/");
    // cy = cypress itself
    // visit = a cypress method for browsing to a given path
    // get = a method for selecting elements in the page
    cy.get("form");
    // 'visit' and 'get' are Cypress commands that act as implicit assertions. 
    // Implicit assertion: if the element is in the page Cypress considers the test passed.
    cy.get('input[name="name"]')
      .type("Molly")
      .should("have.value", "Molly");
    // 'should' is a cypress command
    // 'should' creates an assertion and is used to check if an input is updating its state as expected
    // 'type' is a cypress command
    // 'type' types the text into the input
    cy.get('input[name="email"]')
      .type("molly@dev.dev")
      .should("have.value", "molly@dev.dev");
    
    cy.get("textarea")
      .type("Mind if I ask you some silly question?")
      .should("have.value", "Mind if I ask you some silly question?")

    cy.get("form").submit();

  });
});
