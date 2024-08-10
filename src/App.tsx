/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./App.css";
import FAQCompoent from "./components/faq";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdscPliky2kBxB_DFHN1ScTULU7SMm6e0",
  authDomain: "stratfield-react.firebaseapp.com",
  projectId: "stratfield-react",
  storageBucket: "stratfield-react.appspot.com",
  messagingSenderId: "628875573897",
  appId: "1:628875573897:web:f147035a32181eb67f6458",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  useEffect(() => {
    // Parallax effect
    const parallaxCards = document.querySelectorAll(
      ".parallax-card"
    ) as NodeListOf<HTMLElement>;
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      parallaxCards.forEach((card) => {
        card.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      });
    });
  }, []);

  return (
    <div className="full-width">
      <header>
        <div className="header-wrapper page-width">
          <div className="header-container">
            <div className="header-logo">
              <a href="/">
                <img src="logo.png" alt="Stratfield" />
              </a>
            </div>
            <div className="header-navigation">
              <div className="header-menu-list">
                <div className="menu-item" id="aboutus">
                  <span className="menu-item-title">About us</span>
                </div>
                <div className="menu-item  mega-menu" id="services">
                  <span className="menu-item-title">Services</span>
                  <div className="menu-dropdown">
                    <div className="menu-dropdown__container">
                      <div className="menu-dropdown__item">
                        <div className="menu-item__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="32"
                            viewBox="0 0 30 32"
                            fill="none"
                          >
                            <path
                              d="M13.8847 1.47694C14.4079 1.1314 15.0341 0.977445 15.6574 1.04108C16.2807 1.10471 16.8631 1.38203 17.3061 1.82622L23.079 7.6143C24.5302 9.07019 25.5411 10.9078 25.9952 12.9151C26.4492 14.9225 26.3278 17.0176 25.645 18.9587C24.9622 20.8998 23.7459 22.6077 22.1363 23.8853C20.5268 25.1629 18.5898 25.9582 16.5488 26.1792V29.8576C16.5488 30.1677 16.4259 30.4652 16.2071 30.6845C15.9884 30.9038 15.6917 31.027 15.3824 31.027C15.073 31.027 14.7763 30.9038 14.5576 30.6845C14.3388 30.4652 14.216 30.1677 14.216 29.8576V26.1792C12.1749 25.9582 10.2379 25.1629 8.62836 23.8853C7.01884 22.6077 5.80249 20.8998 5.1197 18.9587C4.43691 17.0176 4.31553 14.9225 4.76955 12.9151C5.22358 10.9078 6.23452 9.07019 7.68566 7.6143L13.4586 1.82622C13.5885 1.69573 13.7313 1.57872 13.8847 1.47694ZM15.3824 13.8764C15.073 13.8764 14.7763 13.9996 14.5576 14.2189C14.3388 14.4383 14.216 14.7357 14.216 15.0459V23.8247C14.9899 23.931 15.7748 23.931 16.5488 23.8247V15.0459C16.5488 14.7357 16.4259 14.4383 16.2071 14.2189C15.9884 13.9996 15.6917 13.8764 15.3824 13.8764Z"
                              fill="#F1B257"
                            />
                          </svg>
                        </div>
                        <div className="menu-item__title">
                          <h1>INVENTORY</h1>
                          <span>Online payments</span>
                        </div>
                      </div>
                      <div className="menu-dropdown__item">
                        <div className="menu-item__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="23"
                            viewBox="0 0 30 23"
                            fill="none"
                          >
                            <path
                              d="M2.74752 19.1085L9.26909 0.932617H13.2545L19.7459 18.9575C19.9472 19.5614 20.1384 20.0042 20.3195 20.286C20.5208 20.5477 20.8328 20.6785 21.2555 20.6785H22.5236V22.0674H13.013V20.6785H14.583C15.0057 20.6785 15.2875 20.5577 15.4284 20.3162C15.5693 20.0746 15.5592 19.7023 15.3982 19.1991L13.9791 15.1533V15.2439H6.0385L4.61945 19.2595C4.43829 19.823 4.41817 20.2055 4.55906 20.4068C4.69996 20.5879 4.95157 20.6785 5.31388 20.6785H6.88388V22.0674H0V20.6785H1.29828C1.66059 20.6785 1.94238 20.5678 2.14367 20.3464C2.34495 20.1048 2.54623 19.6922 2.74752 19.1085ZM6.46119 13.855H13.5866L10.0239 3.55936L6.46119 13.855Z"
                              fill="#F1B257"
                            />
                            <path
                              d="M20.6403 0.932617H30V2.32147H28.3696C28.0677 2.32147 27.8161 2.42211 27.6148 2.6234C27.4336 2.82468 27.3431 3.14673 27.3431 3.58956V19.4104C27.3431 19.8532 27.4336 20.1753 27.6148 20.3766C27.8161 20.5779 28.0677 20.6785 28.3696 20.6785H30V22.0674H20.6403V20.6785H22.2405C22.5425 20.6785 22.784 20.5779 22.9652 20.3766C23.1664 20.1753 23.2671 19.8532 23.2671 19.4104V3.58956C23.2671 3.14673 23.1664 2.82468 22.9652 2.6234C22.784 2.42211 22.5425 2.32147 22.2405 2.32147H20.6403V0.932617Z"
                              fill="#F1B257"
                            />
                          </svg>
                        </div>
                        <div className="menu-item__title">
                          <h1>master gardener</h1>
                          <span>Gardener logic model</span>
                        </div>
                      </div>
                      <div className="menu-dropdown__item">
                        <div className="menu-item__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="25"
                            viewBox="0 0 26 25"
                            fill="none"
                          >
                            <path
                              d="M18.45 15C18.55 14.175 18.625 13.35 18.625 12.5C18.625 11.65 18.55 10.825 18.45 10H22.675C22.875 10.8 23 11.6375 23 12.5C23 13.3625 22.875 14.2 22.675 15M16.2375 21.95C16.9875 20.5625 17.5625 19.0625 17.9625 17.5H21.65C20.439 19.5853 18.5176 21.165 16.2375 21.95ZM15.925 15H10.075C9.95 14.175 9.875 13.35 9.875 12.5C9.875 11.65 9.95 10.8125 10.075 10H15.925C16.0375 10.8125 16.125 11.65 16.125 12.5C16.125 13.35 16.0375 14.175 15.925 15ZM13 22.45C11.9625 20.95 11.125 19.2875 10.6125 17.5H15.3875C14.875 19.2875 14.0375 20.95 13 22.45ZM8 7.5H4.35C5.54857 5.40902 7.46849 3.82686 9.75 3.05C9 4.4375 8.4375 5.9375 8 7.5ZM4.35 17.5H8C8.4375 19.0625 9 20.5625 9.75 21.95C7.47328 21.1646 5.55606 19.5846 4.35 17.5ZM3.325 15C3.125 14.2 3 13.3625 3 12.5C3 11.6375 3.125 10.8 3.325 10H7.55C7.45 10.825 7.375 11.65 7.375 12.5C7.375 13.35 7.45 14.175 7.55 15M13 2.5375C14.0375 4.0375 14.875 5.7125 15.3875 7.5H10.6125C11.125 5.7125 11.9625 4.0375 13 2.5375ZM21.65 7.5H17.9625C17.5713 5.95182 16.992 4.45737 16.2375 3.05C18.5375 3.8375 20.45 5.425 21.65 7.5ZM13 0C6.0875 0 0.5 5.625 0.5 12.5C0.5 15.8152 1.81696 18.9946 4.16117 21.3388C5.3219 22.4996 6.69989 23.4203 8.21646 24.0485C9.73303 24.6767 11.3585 25 13 25C16.3152 25 19.4946 23.683 21.8388 21.3388C24.183 18.9946 25.5 15.8152 25.5 12.5C25.5 10.8585 25.1767 9.23303 24.5485 7.71646C23.9203 6.19989 22.9996 4.8219 21.8388 3.66117C20.6781 2.50043 19.3001 1.57969 17.7835 0.951506C16.267 0.323322 14.6415 0 13 0Z"
                              fill="#F1B257"
                            />
                          </svg>
                        </div>
                        <div className="menu-item__title">
                          <h1>ecommerce</h1>
                          <span>Gardener logic model</span>
                        </div>
                      </div>
                      <div className="menu-dropdown__item">
                        <div className="menu-item__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="31"
                            viewBox="0 0 30 31"
                            fill="none"
                          >
                            <path
                              d="M5.37021 3H24.6295C24.9487 3 25.2549 3.1317 25.4806 3.36612C25.7064 3.60054 25.8332 3.91848 25.8332 4.25V26.75C25.8332 27.0815 25.7064 27.3995 25.4806 27.6339C25.2549 27.8683 24.9487 28 24.6295 28H5.37021C5.05097 28 4.7448 27.8683 4.51906 27.6339C4.29332 27.3995 4.1665 27.0815 4.1665 26.75V4.25C4.1665 3.91848 4.29332 3.60054 4.51906 3.36612C4.7448 3.1317 5.05097 3 5.37021 3ZM14.9998 25.5C16.596 25.5 18.1269 24.8415 19.2556 23.6694C20.3843 22.4973 21.0184 20.9076 21.0184 19.25C21.0184 17.5924 20.3843 16.0027 19.2556 14.8306C18.1269 13.6585 16.596 13 14.9998 13C13.4036 13 11.8728 13.6585 10.7441 14.8306C9.61541 16.0027 8.98132 17.5924 8.98132 19.25C8.98132 20.9076 9.61541 22.4973 10.7441 23.6694C11.8728 24.8415 13.4036 25.5 14.9998 25.5ZM14.9998 10.5C15.4787 10.5 15.938 10.3025 16.2766 9.95083C16.6152 9.59919 16.8054 9.12228 16.8054 8.625C16.8054 8.12772 16.6152 7.65081 16.2766 7.29917C15.938 6.94754 15.4787 6.75 14.9998 6.75C14.521 6.75 14.0617 6.94754 13.7231 7.29917C13.3845 7.65081 13.1943 8.12772 13.1943 8.625C13.1943 9.12228 13.3845 9.59919 13.7231 9.95083C14.0617 10.3025 14.521 10.5 14.9998 10.5ZM14.9998 23C14.0421 23 13.1236 22.6049 12.4464 21.9017C11.7692 21.1984 11.3887 20.2446 11.3887 19.25C11.3887 18.2554 11.7692 17.3016 12.4464 16.5983C13.1236 15.8951 14.0421 15.5 14.9998 15.5C15.9576 15.5 16.8761 15.8951 17.5533 16.5983C18.2305 17.3016 18.6109 18.2554 18.6109 19.25C18.6109 20.2446 18.2305 21.1984 17.5533 21.9017C16.8761 22.6049 15.9576 23 14.9998 23Z"
                              fill="#F1B257"
                            />
                          </svg>
                        </div>
                        <div className="menu-item__title">
                          <h1>digital marketing</h1>
                          <span>Gardener logic model</span>
                        </div>
                      </div>
                      <div className="menu-dropdown__item">
                        <div className="menu-item__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="31"
                            viewBox="0 0 30 31"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14 9.5C14 7.11305 14.9482 4.82387 16.636 3.13604C18.3239 1.44821 20.6131 0.5 23 0.5L30 0.5V7.5C30 9.88695 29.0518 12.1761 27.364 13.864C25.6761 15.5518 23.3869 16.5 21 16.5H16V30.5H14V22.5H9C6.61305 22.5 4.32387 21.5518 2.63604 19.864C0.948212 18.1761 0 15.8869 0 13.5L0 6.5H7C9.828 6.5 12.35 7.804 14 9.842V9.5ZM16.292 12.792L22.292 6.792L23.708 8.208L17.708 14.208L16.292 12.792ZM12.292 20.208L6.292 14.208L7.708 12.792L13.708 18.792L12.292 20.208Z"
                              fill="#F1B257"
                            />
                          </svg>
                        </div>
                        <div className="menu-item__title">
                          <h1>plant database</h1>
                          <span>Gardener logic model</span>
                        </div>
                      </div>
                      <div className="menu-dropdown__item">
                        <div className="menu-item__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="31"
                            height="31"
                            viewBox="0 0 31 31"
                            fill="none"
                          >
                            <path
                              d="M30.0659 28.4457L25.6608 24.0465V7.12221L23.5803 3.27744C23.4269 2.9843 23.1966 2.73888 22.9144 2.56766C22.6323 2.39645 22.3089 2.30595 21.9793 2.30595C21.6497 2.30595 21.3263 2.39645 21.0441 2.56766C20.762 2.73888 20.5317 2.9843 20.3782 3.27744L18.4244 7.1313V16.8114L1.88028 0.268876C1.75376 0.14069 1.59212 0.0532687 1.41596 0.0177571C1.23981 -0.0177545 1.05711 0.00025279 0.89118 0.0694831C0.725247 0.138713 0.58359 0.25603 0.48427 0.406476C0.38495 0.556922 0.332467 0.733681 0.333511 0.914217V8.25837H2.29638V9.71266H0.333511V15.5298H2.29638V16.9841H0.333511V23.0285H2.29638V24.4828H0.333511V29.0911C0.333511 29.3321 0.428811 29.5633 0.598447 29.7338C0.768082 29.9042 0.998156 30 1.23806 30H29.4237C29.6034 30.001 29.7793 29.9483 29.929 29.8485C30.0787 29.7487 30.1955 29.6064 30.2644 29.4396C30.3332 29.2729 30.3512 29.0893 30.3158 28.9123C30.2805 28.7353 30.1935 28.5729 30.0659 28.4457ZM7.56988 22.8013V14.5664L15.7741 22.8013H7.56988ZM23.8517 24.7191H20.2335V22.5104H23.8517V24.7191ZM23.8517 21.0834H20.2335V7.57668L21.9883 4.15001L23.8517 7.58577V21.0834Z"
                              fill="#F1B257"
                            />
                          </svg>
                        </div>
                        <div className="menu-item__title">
                          <h1>website design</h1>
                          <span>Gardener logic model</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-item" id="results">
                  <span className="menu-item-title">Results</span>
                </div>
                <div className="menu-item" id="careers">
                  <span className="menu-item-title">Careers</span>
                </div>
              </div>
            </div>
          </div>
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
                      <a href="#" className="button">
                        Contact us
                      </a>
                    </div>
                    <p>Let's work together</p>
                  </div>
                </div>
                <div className="hero-profile">
                  <div className="card-profile parallax-card">
                    <div className="card-profile-image">
                      <img src="men.png" alt="Hero card" />
                    </div>
                    <div className="card-profile-content">
                      <span className="card-subtitle">PRACTICE AREA</span>
                      <h1 className="card-title">
                        Content headline would go here.
                      </h1>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <hr />
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
                <source
                  src="https://s3-figma-videos-production-sig.figma.com/video/929948758979930366/TEAM/a5aa/2a5e/-32d5-42ca-83d4-2f9c4ec22b3e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qux1-XmehcKJYDQ4e5JE~B187DMQqF4CLyWFEtMOubAOfl0Ezlldma0fUNT0HeTAuIQoLvWRC06doffyr7hZ2pKtDS0q8NeB8uj0zlO5z9AhRnljYHAqJClxKCpZRUCN2kU6H0jyg07YMF60AjCVpHj7jR3BlqsyKLvMAHaKo55NumavLcdbp3moFixPWKEFXX6LduAGesDEg6365eNS-EFxRJ~lZ7mQ05ISErB8aESG~ot02LCy~eibcUw5Oi~bhFBV0qBiA7A-nC9KQZT7Q1e8ceN0mlcrpZhLYS0UZOGXPdWZpKizhl9PyM2JXo5syze3Yg~bJOAj2ha2~cKwlQ__"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          {/* <!--------TEXT-IMAGE SECTION------ --> */}
          <div className="text-image-section">
            <div className="page-width">
              <div className="text-image-wrapper">
                <div className="text-image-content">
                  <div className="image-1  parallax-card">
                    <img src="chart-img.png" alt="chart" />
                  </div>
                  <div className="text-content">
                    <h1>
                      We can help you successfully adapt to a rapidly changing
                      landscape.
                    </h1>
                  </div>
                  <div className="image-2  parallax-card">
                    <img src="women.png" alt="women" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- FAQ SECTION  --> */}
          <FAQCompoent />

          {/* <!-- BRAND SECTION --> */}
          <div className="brand-section">
            <div className="page-width">
              <div className="brand-wrapper">
                <div className="brand-logos">
                  <div className="brand-logo parallax-card">
                    <div className="brand-logo-card">
                      <img src="chick.png" alt="Logo 1" />
                      <div className="brand-desc">
                        <span className="brand-subtitle">PRACTICE AREA</span>
                        <h1 className="brand-title">
                          Content headline would go here.
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <hr />
                      </div>
                    </div>
                  </div>
                  <div className="brand-logo parallax-card">
                    <div className="brand-logo-card">
                      <img src="22sq.png" alt="Logo 2" />
                      <div className="brand-desc">
                        <span className="brand-subtitle">PRACTICE AREA</span>
                        <h1 className="brand-title">
                          Content headline would go here.
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <hr />
                      </div>
                    </div>
                  </div>
                  <div className="brand-logo parallax-card">
                    <div className="brand-logo-card">
                      <img src="cox.png" alt="Logo 3" />
                      <div className="brand-desc">
                        <span className="brand-subtitle">PRACTICE AREA</span>
                        <h1 className="brand-title">
                          Content headline would go here.
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <hr />
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
                <source
                  src="https://s3-figma-videos-production-sig.figma.com/video/929948758979930366/TEAM/ebd6/bdd9/-1550-4d99-a271-b49643b20adc?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UTVWQtlere29TWEajW8CI9FdMNrdy97zhqXtvgEPFGdmUZzunfOae3WmyTMlo01KUjNFNWyY47bWG6Zb6xABROwp4cRpX9E5OD6uoyFgpMS9nn8q4BG9YnYndTE61otLrUEaL5jWXUW~SJfQ7F2lunSgbNn5Fn4gHyE61SV4~glYyEOEOaT6hyQLHH4-DGvgThWL9VI-1zkRl1hqpYuuFFhZ1ipwMdOvKHMXYagvfFjhR8BCJ8CEnVcsbU2-FrJ9hNkVkLD0ilFbJElyLiB3mMDlqMG8pTpHXt3uqbpa19a0DGJ4tDOLuCWDiTn1EmZumNZ~QIHPfsJesjKuLW2qVg__"
                  type="video/mp4"
                />
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
                      <a href="#" className="button">
                        Contact us
                      </a>
                    </div>
                    <p>Let's work together</p>
                  </div>
                </div>
                <div className="hero-profile">
                  <div className="card-profile  parallax-card">
                    <div className="card-profile-image">
                      <img src="black-women.png" alt="Hero card image" />
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
