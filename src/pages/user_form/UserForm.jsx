import { useState } from "react";
import "./user-form.css";

export default function UserForm({ handleClick }) {
  const [topics, setTopics] = useState(new Set());
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    dateOfBirth: 0,
    color: "black",
    says: "",
    topics: [],
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function handleTopic(event) {
    const { value, checked } = event.target;
    if (checked) setTopics((prev) => prev.add(value));
    else
      setTopics((prev) => {
        prev.delete(value);
        return prev;
      });
    setFormData((prev) => {
      return { ...prev, topics: Array.from(topics) };
    });
  }
  return (
    <div className="user-form">
      <h4>Save new user</h4>
      <form>
        <input
          maxLength="20"
          minLength="3"
          required
          type="text"
          placeholder="Name"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        <input
          maxLength="20"
          minLength="3"
          required
          type="text"
          placeholder="Last name"
          value={formData.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <span required className="form-span">
          Your birth day
        </span>
        <input
          maxLength="20"
          minLength="3"
          required
          onChange={handleChange}
          type="date"
          max="2022-04-21"
          name="dateOfBirth"
          id="dateOfBirth"
        />
        <span className="form-span">Pick a color</span>
        <input type="color" name="color" id="color" onChange={handleChange} />
        <textarea
          required
          maxLength="100"
          minLength="3"
          onChange={handleChange}
          placeholder="Your message..."
          name="says"
          id="says"
          cols="30"
          rows="4"
        ></textarea>
        <div id="topics">
          <span className="form-span">Select 3 topics</span>
          <div id="topic-holder">
            <div>
              <input
                onChange={handleTopic}
                value="book"
                type="checkbox"
                name="topic"
                id="book"
              />
              <label htmlFor="book">books</label>
            </div>
            <div>
              <input
                onChange={handleTopic}
                value="literature"
                type="checkbox"
                name="topic"
                id="literature"
              />
              <label htmlFor="literature">literature</label>
            </div>
            <div>
              <input
                onChange={handleTopic}
                value="poem"
                type="checkbox"
                name="topic"
                id="poem"
              />
              <label htmlFor="poem">poems</label>
            </div>
            <div>
              <input
                onChange={handleTopic}
                value="language"
                type="checkbox"
                name="topic"
                id="language"
              />
              <label htmlFor="language">language</label>
            </div>
            <div>
              <input
                onChange={handleTopic}
                value="reading"
                type="checkbox"
                name="topic"
                id="reading"
              />
              <label htmlFor="reading">reading</label>
            </div>
            <div>
              <input
                onChange={handleTopic}
                value="authors"
                type="checkbox"
                name="topic"
                id="authors"
              />
              <label htmlFor="authors">authors</label>
            </div>
          </div>
        </div>
        <button onClick={() => handleClick(event, formData)} id="save-btn">
          Save
        </button>
      </form>
    </div>
  );
}
