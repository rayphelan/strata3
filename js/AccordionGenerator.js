class AccordionGenerator {

  constructor(targetElement, contents) {

    this.targetElement = targetElement;
    this.contents = contents;
    this.uniqueId = '';
    this.html = '';
    this.option = '';

    this.prepare();
  }

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

  article() {
    return `
      <article id="article-${this.uniqueId}" role="region" aria-labelledby="acc-button-${this.uniqueId}" class="accordion-hidden">
        <p class="normal-text">
          ${this.option.answer}        
        </p>
      </article>
    `
  }


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

    //console.log(`<div class="accordion">${this.html}</div>`)

    document.getElementById(this.targetElement).innerHTML = `
    <div class="accordion" id="accordion-${this.targetElement}">${this.html}</div>
    `

    this.activate();
  }

  activate() {

    let accordion = document.getElementById(`accordion-${this.targetElement}`);

    // Listen for clicks
    accordion.addEventListener('click', event => {

      let target = event.target;

      // If trigger was clicked
      if (target.classList.contains('accordion-trigger')) {

        // Active panel
        let active = accordion.querySelector('[aria-expanded="true"]');

        // Section to activate
        let panel = document.getElementById(target.getAttribute('aria-controls'))

        // close panel
        if (active && active !== target) {

          // Set expanded attribute to false
          active.setAttribute('aria-expanded', 'false');

          let activePanel = document.getElementById(active.getAttribute('aria-controls'));

          // Hide the related panel
          activePanel.classList.toggle('accordion-hidden');

        }

        // Set expanded to false on target
        if (target.getAttribute('aria-expanded') == 'true') {
          target.setAttribute('aria-expanded', 'false');
        }
        // Set expanded to true on target
        else {
          target.setAttribute('aria-expanded', 'true');
        }

        // Toggle visibility
        panel.classList.toggle('accordion-hidden');

        // Prevent default action
        event.preventDefault();
      }
    });


    // Add focus and blur style
    accordion.querySelectorAll('.accordion-trigger').forEach(trigger => {

      trigger.addEventListener('focus', () => {
        accordion.classList.add('focus');
      });

      trigger.addEventListener('blur', () => {
        accordion.classList.remove('focus');
      });

    });

    // Click first accordion button to activate
    accordion.getElementsByTagName("BUTTON")[0].click();


  }


}

export { AccordionGenerator }