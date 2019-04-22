class AccordionGenerator {

  constructor(targetElement, contents) {

    // Class variables
    this.targetElement = targetElement;
    this.contents = contents;
    this.uniqueId = '';
    this.html = '';
    this.option = '';

    // Prepare HTML
    this.prepare();

  }

  // Create section element
  section() {
    return `
      <section>
        <button aria-expanded="false" class="accordion-trigger" aria-controls="article-${this.uniqueId}" id="acc-button-${this.uniqueId}">
          <h1 class="accordion-title">
            ${this.option.question}<span class="accordion-icon"></span>
          </h1>
        </button>
      </section>
    `
  }

  // Create article element
  article() {
    return `
      <article id="article-${this.uniqueId}" role="region" aria-labelledby="acc-button-${this.uniqueId}" class="accordion-hidden">
        <p class="normal-text">
          ${this.option.answer}        
        </p>
      </article>
    `
  }

  // Prepare html structure to load on page
  prepare() {

    this.contents.forEach((option, index) => {

      this.uniqueId = `${this.targetElement}-${index}`;
      this.option = option;
      
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