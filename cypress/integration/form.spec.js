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
  });
});
