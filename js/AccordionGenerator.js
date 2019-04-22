class AccordionGenerator {

  constructor(targetElement, contents) {

    // Class variables
    this.targetElement = targetElement;
    this.contents = contents;
    this.html = '';

    // Prepare HTML
    this.prepare();

  }

  // Create section element
  section() {
    return '<section></section>';
  }

  // Create article element
  article() {
    return '<article></article>';
  }

  // Prepare html structure to load on page
  prepare() {

    this.contents.forEach((option, index) => {

      this.html += `
      <div class="section-container">
        ${this.section()}
        ${this.article()}
      </div>
      `
    });

    console.log(`<div class="accordion">${this.html}</div>`)

  }

  // Activate Accordion
  activate() {
    
  }

}

export { AccordionGenerator }