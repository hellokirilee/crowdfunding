import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//How do I set the Pledge to the Project they have come from?

function PledgeForm() {
  //variables
  const [pledge, setPledge] = useState({
    amount: "",
    comment: "",
    anonymous: "",
    project_id: 1,
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPledge((prevPledges) => ({
      ...prevPledges,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pledge),
    });
    return response.json();
  };
  //checks that there is value before submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    postData().then((response) => {
      console.log(response);
      history.push("/");
    });
  };

  //template
  return (
    <form>
      <div className="form-box">
        <label htmlFor="username">amount:</label>
        <input type="number" id="amount" onChange={handleChange} />
      </div>
      <div className="form-box">
        <label htmlFor="comment">comment</label>
        <input type="text" id="comment" onChange={handleChange} />
      </div>
      <div className="form-box">
        <label htmlFor="annonymous">Password:</label>
        <input type="text" id="annonymous" onChange={handleChange} />
      </div>
      <button className="form-submit" type="submit" onClick={handleSubmit}>
        Join
      </button>
    </form>
  );
}

export default PledgeForm;
