import React, { useEffect } from "react";

type Props = {};

const FAQCompoent = (props: Props) => {
  useEffect(() => {
    const faqItems = document.querySelectorAll(".faq-accordion");

    faqItems.forEach((item) =>
      item.addEventListener("click", function () {
        item.classList.toggle("accordion-active");
        const itemContent = item.getElementsByClassName(
          "faq-accordion-content"
        )[0] as HTMLElement;

        if (itemContent.style.maxHeight) {
          itemContent.style.maxHeight = "";
        } else {
          itemContent.style.maxHeight = itemContent.scrollHeight + "px";
        }
      })
    );

    // Cleanup event listeners on component unmount
    return () => {
      faqItems.forEach((item) =>
        item.removeEventListener("click", function () {
          item.classList.toggle("accordion-active");
          const itemContent = item.getElementsByClassName(
            "faq-accordion-content"
          )[0] as HTMLElement;

          if (itemContent.style.maxHeight) {
            itemContent.style.maxHeight = "";
          } else {
            itemContent.style.maxHeight = itemContent.scrollHeight + "px";
          }
        })
      );
    };
  }, []);

  return (
    <div className="faq-section">
      <div className="page-width">
        <div className="faq-wrapper">
          <div className="faq-accordion">
            <div className="faq-accordion-item">
              <div className="faq-accordion-title">
                <img src="home-work-icon.svg" alt="icon" />
                <h2>Consulting</h2>
              </div>
              <div className="faq-accordion-content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
                <button className="read-more-button">Read more</button>
              </div>
            </div>
          </div>

          <div className="faq-accordion">
            <div className="faq-accordion-item">
              <div className="faq-accordion-title">
                <img src="home-work-icon.svg" alt="icon" />
                <h2>Consulting</h2>
              </div>
              <div className="faq-accordion-content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
                <button className="read-more-button">Read more</button>
              </div>
            </div>
          </div>

          <div className="faq-accordion">
            <div className="faq-accordion-item">
              <div className="faq-accordion-title">
                <img src="home-work-icon.svg" alt="icon" />
                <h2>Consulting</h2>
              </div>
              <div className="faq-accordion-content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </p>
                <button className="read-more-button">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQCompoent;
