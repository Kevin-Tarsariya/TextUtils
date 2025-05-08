import React from 'react';

export default function About(props) {
  // Determine dark mode classes
  const darkMode = props.mode === 'dark';
  const accordionItemClass = darkMode ? 'bg-dark text-light' : '';
  const accordionButtonClass = darkMode ? 'bg-dark text-light' : '';
  const accordionBodyClass = darkMode ? 'bg-dark text-light' : '';

  return (
    <div className={`container my-5 text-${darkMode ? 'light' : 'dark'}`}>
      <h2 className={`mb-4 text-center display-3 text-${darkMode ? 'light' : 'dark'}`}>About Text Utility</h2>

      <div className="accordion" id="aboutAccordion">
        <div className={`accordion-item ${accordionItemClass}`}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${accordionButtonClass}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is Text Utility?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#aboutAccordion"
          >
            <div className={`accordion-body ${accordionBodyClass}`}>
              Text Utility is a powerful, free tool that helps you manipulate and analyze text efficiently. Whether you're editing content, cleaning formatting, converting cases, or generating QR codes, this tool simplifies the process.
            </div>
          </div>
        </div>

        <div className={`accordion-item ${accordionItemClass}`}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button collapsed ${accordionButtonClass}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Features Included
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#aboutAccordion"
          >
            <div className={`accordion-body ${accordionBodyClass}`}>
              <ul>
                <li>Convert to UPPERCASE / lowercase / Capitalize</li>
                <li>Remove extra spaces & punctuation</li>
                <li>Find & Replace text</li>
                <li>Generate QR code for any text</li>
                <li>Text-to-Speech</li>
                <li>Word and character count</li>
                <li>Download text as .txt file</li>
                <li>Analyze word frequency</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`accordion-item ${accordionItemClass}`}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button collapsed ${accordionButtonClass}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Why Use Text Utility?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#aboutAccordion"
          >
            <div className={`accordion-body ${accordionBodyClass}`}>
              Whether you're a student, writer, developer, or just need a quick tool to clean and analyze text — Text Utility provides all-in-one solutions in a clean, intuitive interface.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}