import React from "react";
import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewCampaignForm.module.css";
import "react-widgets/styles.css";

function NewCampaignForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const townInputRef = useRef();

  //create towns array with 15 most populated town in europe
  const towns = [
    "London",
    "Berlin",
    "Madrid",
    "Rome",
    "Paris",
    "Vienna",
    "Bucharest",
    "Budapest",
    "Warsaw",
    "Barcelona",
    "Munich",
    "Milan",
    "Prague",
    "Birmingham",
    "Hamburg",
  ];

  const townOptions = towns.map((town) => (
    <option key={town} value={town}>
      {town}
    </option>
  ));

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredTown = townInputRef.current.value;

    const campaignData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
      town: enteredTown,
    };
    props.onAddCampaign(campaignData);
  }
  return (
    <Card>
      <form classes={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Campaign Title</label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            placeholder="Enter Campaign Title..."
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Campaign Image</label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            placeholder="Upload Image URL..."
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="town">Town</label>
          {<select ref={townInputRef}>{townOptions} </select>}
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
            placeholder="Enter address..."
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
            placeholder="Enter Description..."
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>AddCampaign</button>
        </div>
      </form>
    </Card>
  );
}

export default NewCampaignForm;
