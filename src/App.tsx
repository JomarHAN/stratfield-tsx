/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';

document.addEventListener('DOMContentLoaded', function () {
  
});

function App() {
  const faqItem = document.querySelectorAll('.faq-accordion');
  faqItem.forEach((item) => {
      item.addEventListener('click', function () {
          item.classList.toggle('accordion-active');
          const itemContent = item.getElementsByClassName('faq-accordion-content')[0] as HTMLElement;

          if (itemContent.style.maxHeight) {
              itemContent.style.maxHeight = "";
          } else {
              itemContent.style.maxHeight = itemContent.scrollHeight + "px";
          }
      })
  })

  // Parallax effect
  const parallaxCards = document.querySelectorAll('.parallax-card') as NodeListOf<HTMLElement>;

  window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      parallaxCards.forEach(card => {
          card.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      });
  });
  return (
    <div className="full-width">
      <header>
        <div className="header-wrapper page-width">

        </div>
      </header>
      <main>
        <div className="main-wrapper">
        {/* <!-- {#  ------HERO SECTION-------  } --> */}
          <div className="hero-section">
            <div className="page-width">
              <div className="hero-wrapper">
                <div className="hero-content">
                  <h1>Expertise and agility for a changing world.</h1>
                  <div className="hero-button-group">
                    <div className="hero-button">
                      <a href="#" className="button">Contact us</a>
                    </div>
                    <p>Let's work together</p>
                  </div>
                </div>
                <div className="hero-profile">
                  <div className="card-profile parallax-card">
                    <div className="card-profile-image">
                      <img src="men.png" alt="Hero card"/>
                    </div>
                    <div className="card-profile-content">
                      <span className="card-subtitle">PRACTICE AREA</span>
                      <h1 className="card-title">Content headline would go here.</h1>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <hr/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* <!-- ------VIDEO-BACKGROUND SECTION-------  --> */}
          <div className="video-background-section">
            <div className="video-background-wrapper">
              <video autoPlay loop muted playsInline>
                <source src="https://s3-figma-videos-production-sig.figma.com/video/929948758979930366/TEAM/a5aa/2a5e/-32d5-42ca-83d4-2f9c4ec22b3e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qux1-XmehcKJYDQ4e5JE~B187DMQqF4CLyWFEtMOubAOfl0Ezlldma0fUNT0HeTAuIQoLvWRC06doffyr7hZ2pKtDS0q8NeB8uj0zlO5z9AhRnljYHAqJClxKCpZRUCN2kU6H0jyg07YMF60AjCVpHj7jR3BlqsyKLvMAHaKo55NumavLcdbp3moFixPWKEFXX6LduAGesDEg6365eNS-EFxRJ~lZ7mQ05ISErB8aESG~ot02LCy~eibcUw5Oi~bhFBV0qBiA7A-nC9KQZT7Q1e8ceN0mlcrpZhLYS0UZOGXPdWZpKizhl9PyM2JXo5syze3Yg~bJOAj2ha2~cKwlQ__" type="video/mp4"/>
              </video>
            </div>
          </div>


        {/* <!--------TEXT-IMAGE SECTION------ --> */}
          <div className="text-image-section">
            <div className="page-width">
              <div className="text-image-wrapper">
                <div className="text-image-content">
                  <div className="image-1  parallax-card">
                    <img src="chart-img.png" alt="chart"/>
                  </div>
                  <div className="text-content">
                    <h1>We can help you successfully adapt to a rapidly changing landscape.</h1>
                  </div>
                  <div className="image-2  parallax-card">
                    <img src="women.png" alt="women"/>
                  </div>
                </div>
              </div>
            </div>
          </div>


        {/* <!-- FAQ SECTION  --> */}
          <div className="faq-section">
            <div className="page-width">
              <div className="faq-wrapper">
                
                <div className="faq-accordion">
                  <div className="faq-accordion-item">
                    <div className="faq-accordion-title">
                      <img src="home-work-icon.svg" alt="icon"/>
                      <h2>Consulting</h2>
                    </div>
                    <div className="faq-accordion-content">
                      <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. </p>
                      <button className="read-more-button">Read more</button>
                    </div>
                  </div>
                </div>
              
                <div className="faq-accordion">
                  <div className="faq-accordion-item">
                    <div className="faq-accordion-title">
                      <img src="home-work-icon.svg" alt="icon"/>
                      <h2>Consulting</h2>
                    </div>
                    <div className="faq-accordion-content">
                      <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. </p>
                      <button className="read-more-button">Read more</button>
                    </div>
                  </div>
                </div>
              
                <div className="faq-accordion">
                  <div className="faq-accordion-item">
                    <div className="faq-accordion-title">
                      <img src="home-work-icon.svg" alt="icon"/>
                      <h2>Consulting</h2>
                    </div>
                    <div className="faq-accordion-content">
                      <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. </p>
                      <button className="read-more-button">Read more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* <!-- BRAND SECTION --> */}
          <div className="brand-section">
            <div className="page-width">
              <div className="brand-wrapper">
                <div className="brand-logos">
                  <div className="brand-logo parallax-card">
                    <div className="brand-logo-card">
                      <img src="chick.png" alt="Logo 1"/>
                      <div className="brand-desc">
                        <span className="brand-subtitle">PRACTICE AREA</span>
                        <h1 className="brand-title">Content headline would go here.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <hr/>
                      </div>
                    </div>
                  </div>
                  <div className="brand-logo parallax-card">
                    <div className="brand-logo-card">
                      <img src="22sq.png" alt="Logo 2"/>
                      <div className="brand-desc">
                        <span className="brand-subtitle">PRACTICE AREA</span>
                        <h1 className="brand-title">Content headline would go here.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <hr/>
                      </div>
                    </div>
                  </div>
                  <div className="brand-logo parallax-card">
                    <div className="brand-logo-card">
                      <img src="cox.png" alt="Logo 3"/>
                      <div className="brand-desc">
                        <span className="brand-subtitle">PRACTICE AREA</span>
                        <h1 className="brand-title">Content headline would go here.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <hr/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* <!-- ------VIDEO-BACKGROUND SECTION-------  --> */}
          <div className="video-background-section">
            <div className="video-background-wrapper">
              <video autoPlay loop muted playsInline>
                <source src="https://s3-figma-videos-production-sig.figma.com/video/929948758979930366/TEAM/ebd6/bdd9/-1550-4d99-a271-b49643b20adc?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UTVWQtlere29TWEajW8CI9FdMNrdy97zhqXtvgEPFGdmUZzunfOae3WmyTMlo01KUjNFNWyY47bWG6Zb6xABROwp4cRpX9E5OD6uoyFgpMS9nn8q4BG9YnYndTE61otLrUEaL5jWXUW~SJfQ7F2lunSgbNn5Fn4gHyE61SV4~glYyEOEOaT6hyQLHH4-DGvgThWL9VI-1zkRl1hqpYuuFFhZ1ipwMdOvKHMXYagvfFjhR8BCJ8CEnVcsbU2-FrJ9hNkVkLD0ilFbJElyLiB3mMDlqMG8pTpHXt3uqbpa19a0DGJ4tDOLuCWDiTn1EmZumNZ~QIHPfsJesjKuLW2qVg__" type="video/mp4"/>
              </video>
            </div>
          </div>

        {/* <!-- {#  ------HERO SECTION-------  } --> */}
          <div className="hero-section hero-2">
            <div className="page-width">
              <div className="hero-wrapper">
                <div className="hero-content">
                  <h1>Expertise and agility for a changing world.</h1>
                  <div className="hero-button-group">
                    <div className="hero-button">
                      <a href="#" className="button">Contact us</a>
                    </div>
                    <p>Let's work together</p>
                  </div>
                </div>
                <div className="hero-profile">
                  <div className="card-profile  parallax-card">
                    <div className="card-profile-image">
                      <img src="black-women.png" alt="Hero card image"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
