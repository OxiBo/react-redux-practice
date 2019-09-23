import React, { Component } from "react";

export default class Forms extends Component {
  onFormSubmit = () => {
      console.log("submitted")
  };

  render() {
    return (
      <div className="container">
        <p id="description">How do you feel about social networks?</p>
        <form action="false" id="survey-form" onSubmit={this.onFormSubmit}>
          <fieldset>
            <div className="section">
              <label htmlFor="name" id="name-label">
                * Name:
              </label>
              <div className="inputs">
                <input
                  type="text"
                  required
                  id="name"
                  placeholder="Enter your full name"
                  value=""
                  name="name"
                  aria-describedby=""
                />
              </div>
            </div>
            <div className="section">
              <label htmlFor="email" id="email-label">
                * Email:
              </label>
              <div className="inputs">
                <input
                  type="email"
                  required
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  value=""
                />
              </div>
            </div>
            <div className="section">
              <label htmlFor="age">* Age:</label>
              <div className="inputs">
                <input
                  type="number"
                  required
                  id="age"
                  min="1"
                  placeholder="Enter your age"
                  value=""
                />
              </div>
            </div>
            <div className="section">
              <label htmlFor="number" id="number-label">
                * Enter the amount of social networks you are a member of:
              </label>
              <div className="inputs">
                <input
                  id="number"
                  type="number"
                  min="0"
                  max="50"
                  required
                  name="social"
                  placeholder="Enter a number"
                  value=""
                />
              </div>
            </div>
            <div className="section">
              <label htmlFor="dropdown">
                * Which option best describes your current role?
              </label>
              <div className="inputs">
                <select name="role" id="dropdown" required>
                  <option value="">Select an option</option>
                  <option value="student">Student</option>
                  <option value="full-time-job">Full time job</option>
                  <option value="full-time-learner">Full time learner</option>
                  <option value="retired">Retired</option>
                  <option value="prefer-not-say">Prefer not to say</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="section">
              <p>* Choose your gender:</p>
              <div className="options">
                <label htmlFor="male">
                  <input type="radio" id="male" name="gender" value="male" />
                  Male
                </label>

                <label htmlFor="female">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                  Female
                </label>

                <label htmlFor="confident">
                  <input
                    type="radio"
                    checked
                    id="confident"
                    name="gender"
                    value="confident"
                  />
                  Prefer not to say
                </label>
              </div>
            </div>
            <div className="section">
              <p>How often do you use social networks?</p>
              <div className="options">
                <label htmlFor="">
                  <input
                    type="radio"
                    id="daily"
                    name="frequency"
                    value="few-times-day"
                    required
                  />
                  A few times per day
                </label>

                <label htmlFor="weekly">
                  <input
                    type="radio"
                    id="weekly"
                    name="frequency"
                    value="few-times-week"
                  />
                  A few times per week
                </label>

                <label htmlFor="monthly">
                  <input
                    type="radio"
                    id="monthly"
                    name="frequency"
                    value="few-times-month"
                  />
                  A few times per month
                </label>

                <label htmlFor="yearly">
                  <input
                    type="radio"
                    id="rarely"
                    name="frequency"
                    value="rarely"
                  />
                  A few times per year/rarely
                </label>

                <label htmlFor="never">
                  <input
                    type="radio"
                    id="never"
                    name="frequency"
                    value="never"
                    checked
                  />
                  Never
                </label>
              </div>
            </div>
            <div className="section">
              <p>What do you use social networks html?</p>
              <div className="options">
                <label htmlFor="">
                  <input
                    type="checkbox"
                    name="purpose"
                    value="friends-intouch"
                  />
                  To stay in touch with what my friends are doing
                </label>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    name="purpose"
                    value="current-events"
                  />
                  To stay up-to-date with news and current events
                </label>
                <label htmlFor="">
                  <input type="checkbox" name="purpose" value="spare-time" />
                  To fill up spare time
                </label>
                <label htmlFor="">
                  <input type="checkbox" name="purpose" value="find-content" />
                  To find funny or entertaining content
                </label>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    name="purpose"
                    value="networking-people"
                  />
                  General networking with other people
                </label>
                <label htmlFor="">
                  <input type="checkbox" name="purpose" value="as-friends" />
                  Because a lot of my friends are on them
                </label>
                <label htmlFor="">
                  <input type="checkbox" name="purpose" value="share-content" />
                  To share photos or videos with others
                </label>
                <label htmlFor="">
                  <input type="checkbox" name="purpose" value="opinion-share" />
                  To share my opinion with others
                </label>
                <label htmlFor="">
                  <input type="checkbox" name="purpose" value="meet-people" />
                  To meet new people
                </label>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    name="purpose"
                    value="not-use"
                    checked
                  />
                  Do not use social network
                </label>
              </div>
            </div>
            <div className="section">
              <label htmlFor="comments">
                Share your personal opinion on social networks, suggestions,
                comments, complaints:
              </label>
              <div className="inputs">
                <textarea name="comments" id="comments" cols="30" rows="10" />
              </div>
            </div>
            <div className="section">
              <label htmlFor="phoneNumber">Phone number:</label>
              <div className="inputs">
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  name="phoneNumber"
                  value=""
                />
              </div>
            </div>
            <div className="section">
              <label htmlFor="date">* Date of submitting this form</label>
              <div className="inputs">
                <input type="date" id="date" value="" required />
              </div>
            </div>
            <input id="submit" type="submit" />
          </fieldset>
        </form>
      </div>
    );
  }
}
