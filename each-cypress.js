Then("I validate that the AIR chip exist on Expense Breakdown modal",() =>{
  const tag_intr = "div[cypresstag=block-time]>div>span[cypresstag=airInterruption]";
  const tag_block = "div[cypresstag=block-time]";
  const lnk_modal = "button[cypresstag=FlightDetailModalLink]";
  const chp_AIR = "span[cypresstag=AIRChipModal]";

  
 // each function 
  
  cy.get(tag_intr).each(function (item, index, list) {
    cy.get(item).invoke("text").then((item) => {
        if (item === "true") {
          cy.get(tag_block).eq(index).children(lnk_modal).click({ force: true });
          cy.get(chp_AIR).should("be.visible");
        }
      });
  });
});
