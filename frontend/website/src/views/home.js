import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import SectionNumeral from '../components/section-numeral'
import Speaker from '../components/speaker'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>OnConf (Template 8)</title>
        <meta property="og:title" content="OnConf (Template 8)" />
      </Helmet>
      <section className="home-hero">
        <div className="home-background">
          <img
            alt="image"
            src="/circle-background.svg"
            className="home-image"
          />
          <img
            alt="image"
            src="/line-background.svg"
            className="home-image01"
          />
        </div>
        <header data-thq="thq-navbar" className="home-navbar">
          <h2 className="home-text">OnConf</h2>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <span className="navLink">Speakers</span>
              <span className="navLink">Schedule</span>
              <span className="navLink">Sponsors</span>
              <span className="navLink">Useful</span>
            </nav>
            <button className="button">
              <span>Register now</span>
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container01">
                <h2 className="home-text02">OnConf</h2>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <span className="navLink home-text03">About</span>
                <span className="navLink home-text04">Features</span>
                <span className="navLink home-text05">Pricing</span>
                <span className="navLink home-text06">Team</span>
                <span className="navLink home-text07">Blog</span>
              </nav>
              <div className="home-button-container">
                <button className="home-login button">Login</button>
                <button className="button home-register1">Register</button>
              </div>
              <div className="home-icon-group">
                <div className="home-icons">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon06"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon10"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/quote-background.svg"
              className="home-background1"
            />
          </div>
        </header>
        <div className="home-hero-content">
          <h1 className="home-text08">
            World&apos;s Largest Online Conference
          </h1>
          <div className="home-caption">
            <button className="button-style-1 button home-register2">
              <span className="home-text09">Register now</span>
            </button>
            <p className="home-caption01">
              22—24 November 2023 / OnConf.template
            </p>
          </div>
        </div>
      </section>
      <section className="home-notes">
        <div className="home-first">
          <div data-aos="fade-up-right" className="home-content">
            <h2 className="home-header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <div className="home-list">
              <div className="home-note">
                <div className="home-point"></div>
                <p className="home-text10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <div className="home-note1">
                <div className="home-point01"></div>
                <p className="home-text11">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/notes-1-1400w.png"
            className="home-image02 image-notes"
          />
        </div>
        <div className="home-second">
          <div data-aos="fade-up-left" className="home-content01">
            <h2 className="home-header01">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <button className="button button-style-2 home-register3">
              <span>Register now</span>
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <img alt="image" src="/notes-2-1400w.png" className="image-notes" />
        </div>
      </section>
      <section className="home-quote">
        <div className="home-content02">
          <h2 className="home-quoted">
            “I love lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliquaation
            ullamco 100%.”
          </h2>
          <div className="home-author">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
              className="home-icon14"
            />
            <div className="home-details">
              <span className="home-name">Andy Smith</span>
              <span className="home-from">(Founder OnConf)</span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/quote-background.svg"
          className="home-background2"
        />
        <img
          alt="image"
          src="/quote-background.svg"
          className="home-background3"
        />
      </section>
      <section className="home-speakers">
        <div className="home-header02">
          <SectionNumeral></SectionNumeral>
          <div data-aos="fade-right" className="home-heading">
            <h2 className="home-title">Speakers</h2>
            <p className="home-caption02">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className="home-list1">
          <div className="home-row">
            <div className="speaker">
              <Speaker rootClassName="speaker-root-class-name"></Speaker>
              <Speaker
                image="/speakers-2-1500w.png"
                rootClassName="speaker-root-class-name3"
              ></Speaker>
            </div>
            <div className="home-row02 speaker">
              <Speaker
                image="/speakers-3-1500w.png"
                rootClassName="speaker-root-class-name2"
              ></Speaker>
              <Speaker
                image="/speakers-4-1500w.png"
                rootClassName="speaker-root-class-name1"
              ></Speaker>
            </div>
          </div>
          <div className="home-row03">
            <div className="home-row04 speaker">
              <Speaker
                image="/speakers-4-1500w.png"
                rootClassName="speaker-root-class-name13"
              ></Speaker>
              <Speaker
                image="/speakers-3-1500w.png"
                rootClassName="speaker-root-class-name12"
              ></Speaker>
            </div>
            <div className="home-row05 speaker">
              <Speaker rootClassName="speaker-root-class-name10"></Speaker>
              <Speaker
                image="/speakers-2-1500w.png"
                rootClassName="speaker-root-class-name11"
              ></Speaker>
            </div>
          </div>
          <div className="home-row06">
            <div className="home-row07 speaker">
              <Speaker
                image="/speakers-2-1500w.png"
                rootClassName="speaker-root-class-name15"
              ></Speaker>
              <Speaker rootClassName="speaker-root-class-name14"></Speaker>
            </div>
            <div className="home-row08 speaker"></div>
          </div>
        </div>
      </section>
      <section className="home-watch">
        <div className="home-content03">
          <h2 className="home-header03">
            Watch our Watch our OnConf 2022 trailer
          </h2>
          <div className="home-video">
            <video
              src
              poster="/quotes-1-1400w.png"
              className="home-video1"
            ></video>
            <img alt="image" src="/play.svg" className="home-image04" />
          </div>
          <button className="button home-register4">
            <span>Register now</span>
            <svg viewBox="0 0 1024 1024" className="home-icon15">
              <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
            </svg>
          </button>
        </div>
        <img
          alt="image"
          src="/trailer-background.svg"
          className="home-image05"
        />
      </section>
      <section className="home-schedule">
        <div className="home-content04">
          <div className="home-header04">
            <div className="home-section-numeral">
              <div className="home-divide"></div>
              <p className="home-text14">02</p>
            </div>
            <div data-aos="fade-right" className="home-heading1">
              <h2 className="home-title01">Schedule</h2>
              <p className="home-caption03">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="home-main">
            <div className="home-tab-selector">
              <div
                data-role="schedule-select"
                className="tab-active tab home-tab"
              >
                <span className="home-text15">Friday, Nov 04</span>
              </div>
              <div data-role="schedule-select" className="tab home-tab1">
                <span className="home-text16">Saturday, Nov 05</span>
              </div>
              <div data-role="schedule-select" className="tab home-tab2">
                <span className="home-text17">Sunday, Nov 06</span>
              </div>
            </div>
            <div className="home-lists">
              <section data-role="schedule-content" className="home-list2">
                <div className="home-element">
                  <div className="home-main01">
                    <span className="home-time">
                      8:00 AM - 2:00 PM GMT +1 / 10:00 AM - 4:00 PM Your local
                      time (6 Hours)
                    </span>
                    <h3 className="home-title02">Pre-event networking</h3>
                    <div className="home-author01">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon17"
                      />
                      <div className="home-details01">
                        <span className="home-name01">Andy Smith</span>
                        <div className="home-point02"></div>
                        <span className="home-caption04">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button">
                    Connect to chat room
                  </button>
                </div>
                <div className="home-element01">
                  <div className="home-main02">
                    <span className="home-time01">
                      3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                      time (30 Minutes)
                    </span>
                    <h3 className="home-title03">How to Lorem Ipsum.</h3>
                    <div className="home-author02">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon18"
                      />
                      <div className="home-details02">
                        <span className="home-name02">Samantha Johnson</span>
                        <div className="home-point03"></div>
                        <span className="home-caption05">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button01">
                    <span>
                      <span>See live</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="home-element02">
                  <div className="home-main03">
                    <span className="home-time02">
                      3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                      time (30 Minutes)
                    </span>
                    <h3 className="home-title04">How to Lorem Ipsum.</h3>
                    <div className="home-author03">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon19"
                      />
                      <div className="home-details03">
                        <span className="home-name03">Samantha Johnson</span>
                        <div className="home-point04"></div>
                        <span className="home-caption06">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button02">
                    <span>
                      <span>See live</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="home-element03">
                  <div className="home-main04">
                    <span className="home-time03">
                      3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                      time (30 Minutes)
                    </span>
                    <h3 className="home-title05">How to Lorem Ipsum.</h3>
                    <div className="home-author04">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon20"
                      />
                      <div className="home-details04">
                        <span className="home-name04">Samantha Johnson</span>
                        <div className="home-point05"></div>
                        <span className="home-caption07">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button03">
                    <span>
                      <span>See live</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="home-element04">
                  <div className="home-main05">
                    <span className="home-time04">
                      3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                      time (30 Minutes)
                    </span>
                    <h3 className="home-title06">How to Lorem Ipsum.</h3>
                    <div className="home-author05">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon21"
                      />
                      <div className="home-details05">
                        <span className="home-name05">Samantha Johnson</span>
                        <div className="home-point06"></div>
                        <span className="home-caption08">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button04">
                    <span>
                      <span>See live</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="home-element05">
                  <div className="home-main06">
                    <span className="home-time05">
                      8:00 PM - 10:00 PM GMT +1 / 10:00 PM - 12:00 AM Your local
                      time (2 Hours)
                    </span>
                    <h3 className="home-title07">Post-event networking</h3>
                    <div className="home-author06">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBvdHJhaXR8ZW58MHx8fHwxNjcxNDg1OTU2&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon22"
                      />
                      <div className="home-details06">
                        <span className="home-name06">Samantha Johnson</span>
                        <div className="home-point07"></div>
                        <span className="home-caption09">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button05">
                    <span>
                      <span>Connect to chat room</span>
                      <br></br>
                    </span>
                  </button>
                </div>
              </section>
              <section data-role="schedule-content" className="home-list3">
                <div className="home-element06">
                  <div className="home-main07">
                    <span className="home-time06">
                      3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                      time (30 Minutes)
                    </span>
                    <h3 className="home-title08">How to Lorem Ipsum.</h3>
                    <div className="home-author07">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon23"
                      />
                      <div className="home-details07">
                        <span className="home-name07">Samantha Johnson</span>
                        <div className="home-point08"></div>
                        <span className="home-caption10">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button06">
                    <span>
                      <span>See live</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="home-element07">
                  <div className="home-main08">
                    <span className="home-time07">
                      8:00 AM - 2:00 PM GMT +1 / 10:00 AM - 4:00 PM Your local
                      time (6 Hours)
                    </span>
                    <h3 className="home-title09">Pre-event networking</h3>
                    <div className="home-author08">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon24"
                      />
                      <div className="home-details08">
                        <span className="home-name08">Andy Smith</span>
                        <div className="home-point09"></div>
                        <span className="home-caption11">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button07">
                    Connect to chat room
                  </button>
                </div>
                <div className="home-element08">
                  <div className="home-main09">
                    <span className="home-time08">
                      3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                      time (30 Minutes)
                    </span>
                    <h3 className="home-title10">How to Lorem Ipsum.</h3>
                    <div className="home-author09">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon25"
                      />
                      <div className="home-details09">
                        <span className="home-name09">Samantha Johnson</span>
                        <div className="home-point10"></div>
                        <span className="home-caption12">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button08">
                    <span>
                      <span>See live</span>
                      <br></br>
                    </span>
                  </button>
                </div>
              </section>
              <section data-role="schedule-content" className="home-list4">
                <div className="home-element09">
                  <div className="home-main10">
                    <span className="home-time09">
                      8:00 AM - 2:00 PM GMT +1 / 10:00 AM - 4:00 PM Your local
                      time (6 Hours)
                    </span>
                    <h3 className="home-title11">Pre-event networking</h3>
                    <div className="home-author10">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon26"
                      />
                      <div className="home-details10">
                        <span className="home-name10">Andy Smith</span>
                        <div className="home-point11"></div>
                        <span className="home-caption13">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button09">
                    Connect to chat room
                  </button>
                </div>
                <div className="home-element10">
                  <div className="home-main11">
                    <span className="home-time10">
                      3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                      time (30 Minutes)
                    </span>
                    <h3 className="home-title12">How to Lorem Ipsum.</h3>
                    <div className="home-author11">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon27"
                      />
                      <div className="home-details11">
                        <span className="home-name11">Samantha Johnson</span>
                        <div className="home-point12"></div>
                        <span className="home-caption14">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button10">
                    <span>
                      <span>See live</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="home-element11">
                  <div className="home-main12">
                    <span className="home-time11">
                      3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                      time (30 Minutes)
                    </span>
                    <h3 className="home-title13">How to Lorem Ipsum.</h3>
                    <div className="home-author12">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon28"
                      />
                      <div className="home-details12">
                        <span className="home-name12">Samantha Johnson</span>
                        <div className="home-point13"></div>
                        <span className="home-caption15">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button11">
                    <span>
                      <span>See live</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="home-element12">
                  <div className="home-main13">
                    <span className="home-time12">
                      8:00 PM - 10:00 PM GMT +1 / 10:00 PM - 12:00 AM Your local
                      time (2 Hours)
                    </span>
                    <h3 className="home-title14">Post-event networking</h3>
                    <div className="home-author13">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBvdHJhaXR8ZW58MHx8fHwxNjcxNDg1OTU2&amp;ixlib=rb-4.0.3&amp;w=200"
                        className="home-icon29"
                      />
                      <div className="home-details13">
                        <span className="home-name13">Samantha Johnson</span>
                        <div className="home-point14"></div>
                        <span className="home-caption16">CEO, Opary</span>
                      </div>
                    </div>
                  </div>
                  <button className="button home-button12">
                    <span>
                      <span>Connect to chat room</span>
                      <br></br>
                    </span>
                  </button>
                </div>
              </section>
            </div>
            <div>
              <div className="home-container03">
                <Script
                  html={`<script>
// Get all tab buttons
const tabButtons = document.querySelectorAll('[data-role="schedule-select"]');
// Get all tab contents
const tabContents = document.querySelectorAll('[data-role="schedule-content"]');

// Add "tab-active" class to the first tab button
tabButtons[0].classList.add("tab-active");
// Show the first tab content
tabContents[0].style.display = "block";

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", () => {
    // Remove "tab-active" class from all tab buttons
    tabButtons.forEach((button) => {
      button.classList.remove("tab-active");
    });
    // Add "tab-active" class to the current tab button
    tabButton.classList.add("tab-active");
    // Hide all tab contents
    tabContents.forEach((tabContent) => {
      tabContent.style.display = "none";
    });
    // Show the tab content for the current tab button
    tabContents[index].style.display = "block";
  });
});
</script>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-sponsors">
        <div className="home-header05">
          <div className="home-section-numeral1">
            <div className="home-divide1"></div>
            <p className="home-text48">03</p>
          </div>
          <div data-aos="fade-right" className="home-heading2">
            <h2 className="home-title15">Sponsors</h2>
            <p className="home-caption17">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className="home-brands">
          <div className="brand">
            <img alt="image" src="/brand-1.svg" className="home-image06" />
          </div>
          <div className="brand home-brand1">
            <img alt="image" src="/brand-2.svg" className="home-image07" />
          </div>
          <div className="brand home-brand2">
            <img alt="image" src="/brand-3.svg" className="home-image08" />
          </div>
          <div className="home-brand3 brand">
            <img alt="image" src="/brand-4.svg" className="home-image09" />
          </div>
          <div className="home-brand4 brand">
            <img alt="image" src="/brand-5.svg" className="home-image10" />
          </div>
          <div className="home-brand5 brand">
            <img alt="image" src="/brand-6.svg" className="home-image11" />
          </div>
          <div className="home-brand6 brand">
            <img alt="image" src="/brand-7.svg" className="home-image12" />
          </div>
          <div className="home-brand7 brand">
            <img alt="image" src="/brand-8.svg" className="home-image13" />
          </div>
        </div>
      </section>
      <section className="home-why">
        <div className="home-header06">
          <div className="home-section-numeral2">
            <div className="home-divide2"></div>
            <p className="home-text49">04</p>
          </div>
          <div data-aos="fade-right" className="home-heading3">
            <h2 className="home-title16">Why OnConf</h2>
            <p className="home-caption18">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className="home-brands1">
          <div className="home-row09">
            <div className="home-item">
              <img alt="image" src="/why-1.svg" className="home-image14" />
              <div className="home-details14">
                <h3 className="home-title17">Networking</h3>
                <p className="home-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="home-item1">
              <img alt="image" src="/why-2.svg" className="home-image15" />
              <div className="home-details15">
                <h3 className="home-title18">Learning</h3>
                <p className="home-description01">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="home-item2">
              <img alt="image" src="/why-3.svg" className="home-image16" />
              <div className="home-details16">
                <h3 className="home-title19">Developing</h3>
                <p className="home-description02">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-black">
        <img alt="image" src="/black-vector.svg" className="home-image17" />
        <section className="home-quotes">
          <div className="home-row10">
            <img
              alt="image"
              src="/quotes-1-1400w.png"
              className="home-image18"
            />
            <div className="home-row11">
              <div className="home-details17">
                <p className="home-quote01">
                  “Lorem ipsum dolor sit amet consectetur “
                </p>
                <span className="home-author14">The Guard</span>
              </div>
              <img
                alt="image"
                src="/quotes-2-700w.png"
                className="home-image19"
              />
            </div>
          </div>
          <div className="home-row12">
            <div className="home-details18">
              <p className="home-quote02">
                “Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                amet“
              </p>
              <span className="home-author15">Wall Street News</span>
            </div>
            <img
              alt="image"
              src="/quotes-3-1400w.png"
              className="home-image20"
            />
            <div className="home-details19">
              <p className="home-quote03">
                “Duis aute irure dolor in reprehenderit in voluptate velit “
              </p>
              <span className="home-author16">Inside Business</span>
            </div>
          </div>
        </section>
        <section className="home-testimonials">
          <div className="home-header07">
            <div className="home-section-numeral3">
              <div className="home-divide3"></div>
              <p className="home-text50">05</p>
            </div>
            <div data-aos="fade-right" className="home-heading4">
              <h2 className="home-title20">
                Don’t just take our word for it. Here’s what past attendees have
                to say:
              </h2>
            </div>
          </div>
          <div id="scrollbar" className="home-quotes1">
            <div className="home-quote04">
              <div className="home-author17">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image21"
                />
                <div className="home-details20">
                  <span className="home-name14">Samantha Johnson</span>
                  <span className="home-handle">@thisissammy</span>
                </div>
              </div>
              <p className="home-quote05">
                “Duis aute irure dolor in reprehenderit in voluptate velit.”
              </p>
            </div>
            <div className="home-quote06">
              <div className="home-author18">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image22"
                />
                <div className="home-details21">
                  <span className="home-name15">Samantha Johnson</span>
                  <span className="home-handle1">@thisissammy</span>
                </div>
              </div>
              <p className="home-quote07">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. ”
              </p>
            </div>
            <div className="home-quote08">
              <div className="home-author19">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image23"
                />
                <div className="home-details22">
                  <span className="home-name16">Samantha Johnson</span>
                  <span className="home-handle2">@thisissammy</span>
                </div>
              </div>
              <p className="home-quote09">
                “Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea.”
              </p>
            </div>
            <div className="home-quote10">
              <div className="home-author20">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image24"
                />
                <div className="home-details23">
                  <span className="home-name17">Samantha Johnson</span>
                  <span className="home-handle3">@thisissammy</span>
                </div>
              </div>
              <p className="home-quote11">
                “Duis aute irure dolor in reprehenderit in voluptate velit.”
              </p>
            </div>
            <div className="home-quote12">
              <div className="home-author21">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image25"
                />
                <div className="home-details24">
                  <span className="home-name18">Samantha Johnson</span>
                  <span className="home-handle4">@thisissammy</span>
                </div>
              </div>
              <p className="home-quote13">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. ”
              </p>
            </div>
          </div>
        </section>
        <section className="home-join">
          <h2 className="home-title21">
            Join us at OnConf on November 22-24
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h2>
          <button className="home-button13 button">
            <span>
              <span>Register now</span>
              <br></br>
            </span>
          </button>
        </section>
        <section className="home-more">
          <div className="home-header08">
            <div className="home-section-numeral4">
              <div className="home-divide4"></div>
              <p className="home-text54">06</p>
            </div>
            <div data-aos="fade-right" className="home-heading5">
              <h2 className="home-title22">
                More about pricing, accessibility or what this year’s event
                includes
              </h2>
            </div>
          </div>
          <div className="home-accordions">
            <div className="home-accordion">
              <div className="home-header09">
                <div className="home-divide5"></div>
                <h3 className="home-title23">Event information</h3>
              </div>
              <div className="home-items">
                <div
                  data-role="accordion-container"
                  className="home-element13 accordion"
                >
                  <div className="home-content05">
                    <span className="home-header10">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="home-description03"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-icon-container">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon30"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon32"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="home-element14 accordion"
                >
                  <div className="home-content06">
                    <span className="home-header11">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="home-description04"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-icon-container1">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon34"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon36"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="home-element15 accordion"
                >
                  <div className="home-content07">
                    <span className="home-header12">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="home-description05"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-icon-container2">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon38"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon40"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-accordion1">
              <div className="home-header13">
                <div className="home-divide6"></div>
                <h3 className="home-title24">Event information</h3>
              </div>
              <div className="home-items1">
                <div
                  data-role="accordion-container"
                  className="home-element16 accordion"
                >
                  <div className="home-content08">
                    <span className="home-header14">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="home-description06"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-icon-container3">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon42"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon44"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="home-element17 accordion"
                >
                  <div className="home-content09">
                    <span className="home-header15">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="home-description07"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-icon-container4">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon46"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon48"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="home-element18 accordion"
                >
                  <div className="home-content10">
                    <span className="home-header16">
                      Esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <span
                      data-role="accordion-content"
                      className="home-description08"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-icon-container5">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="home-icon50"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="home-icon52"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="home-container05">
                <Script
                  html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
                ></Script>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="home-subscribe">
        <div className="home-main14">
          <h2 className="home-header17">
            Subscribe to our newsletter for the latest OnConf news
          </h2>
          <div className="home-content11">
            <div className="home-inputs">
              <input
                type="text"
                required
                placeholder="Name *"
                autoComplete="name"
                className="home-textinput input"
              />
              <input
                type="email"
                required
                placeholder="Email *"
                autoComplete="email"
                className="home-textinput1 input"
              />
            </div>
            <span className="home-text55">
              By submitting, you agree to receive email communications from
              OnConf, including upcoming promotions and discounted tickets,
              news, and access to exclusive invite-only events.
            </span>
            <button className="home-button14 button">
              <span>
                <span>Sign up for our newsletter</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-content12">
          <div className="home-details25">
            <h2 className="home-title25">OnConf</h2>
            <p className="home-description09">
              Product Calgary brings professionals together to connect, learn
              from each other, find opportunities, and find talent. We started
              as a meetup and have grown to be Alberta’s largest Product
              Management community.
            </p>
          </div>
          <div className="home-socials">
            <img alt="image" src="/linkedin.svg" className="social" />
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              <img
                alt="image"
                src="/instagram.svg"
                className="home-image27 social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link5"
            >
              <img
                alt="image"
                src="/twitter.svg"
                className="home-image28 social"
              />
            </a>
          </div>
          <span className="home-copyright">
            Privacy — Terms &amp; Conditions — Code of Conduct © 2022 OnConf All
            Rights Reserved
          </span>
        </div>
      </footer>
      <div>
        <div className="home-container07">
          <Script
            html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container09">
          <Script
            html={`<style>
#scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#scrollbar::-webkit-scrollbar
{
	height: 12px;
	background-color: #F5F5F5;
	border-radius: 10px;
}

#scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
