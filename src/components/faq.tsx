import React, { useEffect } from "react";
import "../App.css";

type Props = {};

const FAQComponent = (props: Props) => {
  useEffect(() => {
    const addEventListeners = () => {
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
    };

    // Add event listeners after a short delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(addEventListeners, 0);

    // Cleanup event listeners on component unmount
    return () => {
      clearTimeout(timeoutId);
      const faqItems = document.querySelectorAll(".faq-accordion");
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
                <div className="faq-accordion__icon-box">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M8 6H16V4H8V6ZM8 9H16V7H8V9ZM8 12H13V10H8V12ZM5 6C5.28333 6 5.521 5.90433 5.713 5.713C5.90433 5.521 6 5.28333 6 5C6 4.71667 5.90433 4.479 5.713 4.287C5.521 4.09567 5.28333 4 5 4C4.71667 4 4.479 4.09567 4.287 4.287C4.09567 4.479 4 4.71667 4 5C4 5.28333 4.09567 5.521 4.287 5.713C4.479 5.90433 4.71667 6 5 6ZM5 9C5.28333 9 5.521 8.904 5.713 8.712C5.90433 8.52067 6 8.28333 6 8C6 7.71667 5.90433 7.479 5.713 7.287C5.521 7.09567 5.28333 7 5 7C4.71667 7 4.479 7.09567 4.287 7.287C4.09567 7.479 4 7.71667 4 8C4 8.28333 4.09567 8.52067 4.287 8.712C4.479 8.904 4.71667 9 5 9ZM5 12C5.28333 12 5.521 11.904 5.713 11.712C5.90433 11.5207 6 11.2833 6 11C6 10.7167 5.90433 10.479 5.713 10.287C5.521 10.0957 5.28333 10 5 10C4.71667 10 4.479 10.0957 4.287 10.287C4.09567 10.479 4 10.7167 4 11C4 11.2833 4.09567 11.5207 4.287 11.712C4.479 11.904 4.71667 12 5 12ZM0 20V2C0 1.45 0.196 0.979 0.588 0.587C0.979333 0.195667 1.45 0 2 0H18C18.55 0 19.021 0.195667 19.413 0.587C19.8043 0.979 20 1.45 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.021 15.8043 18.55 16 18 16H4L0 20ZM2 15.175L3.175 14H18V2H2V15.175Z"
                      fill="#B3EB76"
                    />
                  </svg>
                </div>
                <h2>Marketing</h2>
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
                <div className="faq-accordion__icon-box">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M9.04523 20C7.77219 19.866 6.58727 19.5186 5.49045 18.9578C4.39296 18.3963 3.43819 17.6673 2.62613 16.7709C1.8134 15.875 1.17253 14.8492 0.703518 13.6935C0.234506 12.5377 0 11.3065 0 10C0 8.47571 0.305863 7.06868 0.917588 5.77889C1.52864 4.48911 2.36181 3.38358 3.41709 2.46231H1.00503V0.452261H7.03518V6.48241H5.02513V3.74372C4.10385 4.48074 3.37085 5.38961 2.82613 6.47035C2.28208 7.55042 2.01005 8.72697 2.01005 10C2.01005 12.0603 2.68442 13.8399 4.03317 15.3387C5.38124 16.8382 7.05193 17.7136 9.04523 17.9648V20ZM8.61809 14.6231L4.37186 10.3518L5.77889 8.94472L8.61809 11.7839L14.3216 6.0804L15.7286 7.51256L8.61809 14.6231ZM13.0653 19.5477V13.5176H15.0754V16.2563C15.9967 15.5025 16.7296 14.5896 17.2744 13.5176C17.8184 12.4456 18.0905 11.273 18.0905 10C18.0905 7.9397 17.4164 6.1598 16.0683 4.6603C14.7196 3.16147 13.0486 2.28643 11.0553 2.03518V0C13.6013 0.251256 15.7454 1.32328 17.4874 3.21608C19.2295 5.10888 20.1005 7.37018 20.1005 10C20.1005 11.5243 19.7946 12.9313 19.1829 14.2211C18.5719 15.5109 17.7387 16.6164 16.6834 17.5377H19.0955V19.5477H13.0653Z"
                      fill="#B3EB76"
                    />
                  </svg>
                </div>
                <h2>Change management</h2>
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
                <div className="faq-accordion__icon-box">
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M3 15C2.45 15 1.97933 14.8043 1.588 14.413C1.196 14.021 1 13.55 1 13V2C1 1.45 1.196 0.979 1.588 0.587C1.97933 0.195667 2.45 0 3 0H19C19.55 0 20.021 0.195667 20.413 0.587C20.8043 0.979 21 1.45 21 2V13C21 13.55 20.8043 14.021 20.413 14.413C20.021 14.8043 19.55 15 19 15H3ZM3 13H19V2H3V13ZM1 18C0.716667 18 0.479333 17.904 0.288 17.712C0.096 17.5207 0 17.2833 0 17C0 16.7167 0.096 16.4793 0.288 16.288C0.479333 16.096 0.716667 16 1 16H21C21.2833 16 21.5207 16.096 21.712 16.288C21.904 16.4793 22 16.7167 22 17C22 17.2833 21.904 17.5207 21.712 17.712C21.5207 17.904 21.2833 18 21 18H1Z"
                      fill="#B3EB76"
                    />
                  </svg>
                </div>
                <h2>Technology enablement</h2>
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
                <div className="faq-accordion__icon-box">
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M4.5 9H2.5V16H4.5V9ZM10.5 9H8.5V16H10.5V9ZM19 18H0V20H19V18ZM16.5 9H14.5V16H16.5V9ZM9.5 2.26L14.71 5H4.29L9.5 2.26ZM9.5 0L0 5V7H19V5L9.5 0Z"
                      fill="#B3EB76"
                    />
                  </svg>
                </div>
                <h2>Software engineering</h2>
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
                <div className="faq-accordion__icon-box">
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Group">
                      <path
                        id="Vector"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 0.5H2.11111C0.95 0.5 0 1.45 0 2.61111V17.3889C0 18.55 0.95 19.5 2.11111 19.5H19C20.1611 19.5 21.1111 18.55 21.1111 17.3889V2.61111C21.1111 1.45 20.1611 0.5 19 0.5ZM19 17.3889H2.11111V2.61111H19V17.3889Z"
                        fill="#B3EB76"
                      />
                      <path
                        id="Vector_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.3773 8.33287L16.8784 6.83398L13.5323 10.1801L12.044 8.68121L10.5556 10.1695L13.5323 13.1673L18.3773 8.33287Z"
                        fill="#B3EB76"
                      />
                      <path
                        id="Vector_3"
                        d="M8.44431 4.72266H3.16653V6.83377H8.44431V4.72266Z"
                        fill="#B3EB76"
                      />
                      <path
                        id="Vector_4"
                        d="M8.44431 8.94482H3.16653V11.0559H8.44431V8.94482Z"
                        fill="#B3EB76"
                      />
                      <path
                        id="Vector_5"
                        d="M8.44431 13.166H3.16653V15.2771H8.44431V13.166Z"
                        fill="#B3EB76"
                      />
                    </g>
                  </svg>
                </div>
                <h2>Project management</h2>
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

export default FAQComponent;
