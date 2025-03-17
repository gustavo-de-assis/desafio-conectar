import NavBar from "./NavBar";

describe("Test NavBar component", () => {
  it("should renders", () => {
    cy.mount(<NavBar />);
  });
});
