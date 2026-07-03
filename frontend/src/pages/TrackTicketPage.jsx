import { useState } from "react";
import axios from "axios";

function TrackTicketPage() {
  const [ticketId, setTicketId] = useState("");
  const [ticket, setTicket] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/track-ticket/${ticketId}`
      );

      if (response.data.message === "Ticket not found") {
        setError("Ticket not found.");
        setTicket(null);
      } else {
        setTicket(response.data);
        setError("");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to fetch ticket.");
      setTicket(null);
    }
  };

  return (
    <div className="container">
      <h1>Track Your Ticket</h1>

      <input
        type="text"
        placeholder="Enter Ticket ID"
        value={ticketId}
        onChange={(e) => setTicketId(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleTrack}>
        Track Ticket
      </button>

      <br />
      <br />

      {error && <p>{error}</p>}

      {ticket && (
        <div>
          <h2>Ticket Details</h2>

          <p><strong>Ticket ID:</strong> {ticket.ticket_id}</p>

          <p><strong>Customer:</strong> {ticket.customer_name}</p>

          <p><strong>Status:</strong> {ticket.status}</p>

          <p><strong>Category:</strong> {ticket.category}</p>

          <p><strong>Priority:</strong> {ticket.priority}</p>

          <p><strong>Complaint:</strong> {ticket.complaint}</p>
        </div>
      )}
    </div>
  );
}

export default TrackTicketPage;