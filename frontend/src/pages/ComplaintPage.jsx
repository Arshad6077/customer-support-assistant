import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ComplaintPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [copied, setCopied] = useState(false);

  const copyTicketId = async () => {
  await navigator.clipboard.writeText(ticketId);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
  name.trim() === "" ||
  email.trim() === "" ||
  complaint.trim() === ""
) {
  alert("Please fill in all fields.");
  return;
}

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/submit-complaint",
        {
          name,
          email,
          complaint,
        }
      );

      console.log(response.data);

  setTicketId(response.data.ticket_id);
  setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Error submitting complaint");
    }
  };

  return (
  <div className="container">

    {!submitted ? (

      <>
        <h1>Submit Complaint</h1>

        <form onSubmit={handleSubmit}>

          <div>
            <label>Name:</label>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <br />

          <div>
            <label>Email:</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <br />

          <div>
            <label>Complaint:</label>
            <br />
            <textarea
              rows="5"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
            ></textarea>
          </div>

          <br />

          <button type="submit">
            Submit Complaint
          </button>

        </form>

      </>

    ) : (

      <div>

        <h1>✅ Complaint Submitted</h1>

        <p>Your complaint has been submitted successfully.</p>

        <h2>{ticketId}</h2>

        <button onClick={copyTicketId}>
          {copied ? "✅ Copied!" : "📋 Copy Ticket ID"}
        </button>

        <br />
        <br />


        <p>
          Please save your Ticket ID.
          <br />
          You'll need it to track your complaint.
        </p>

        <Link to="/track-ticket">
          <button>Track My Ticket</button>
        </Link>

      </div>

    )}

  </div>
);
}

export default ComplaintPage;