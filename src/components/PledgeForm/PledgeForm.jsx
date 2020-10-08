import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//How do I set the Pledge to the Project they have come from?

function PledgeForm({ projectId }) {
  //variables
  const [pledge, setPledge] = useState({
    amount: "",
    comment: "",
    anonymous: "false",
    project_id: projectId,
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
      history.push(`/project/${projectId}`);
    });
  };

  //template
  return (
    <form>
      <div className="form-box">
        <label htmlFor="amount">amount:</label>
        <input type="number" id="amount" onChange={handleChange} />
      </div>
      <div className="form-box">
        <label htmlFor="comment">comment</label>
        <input type="text" id="comment" onChange={handleChange} />
      </div>
      <button className="form-submit" type="submit" onClick={handleSubmit}>
        Give!
      </button>
    </form>
  );
}

export default PledgeForm;
