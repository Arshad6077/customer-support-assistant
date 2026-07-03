import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/complaints"
      );

      console.log(response.data);

      setComplaints(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleViewComplaint = (complaint) => {
  setSelectedComplaint(complaint);
  setNewStatus(complaint.status);
};

  const updateStatus = async () => {
    if (newStatus === "") {
  alert("Please select a valid status.");
  return;
}
  try {
    await axios.put(
      `http://127.0.0.1:8000/update-status/${selectedComplaint.ticket_id}`,
      {
        status: newStatus,
      }
    );

    alert("Status Updated Successfully!");

    fetchComplaints();

    setSelectedComplaint({
      ...selectedComplaint,
      status: newStatus,
    });

  } catch (error) {
    console.error(error);
  }
};

  return (
  <div
    style={{
      display: "flex",
      gap: "30px",
      padding: "30px",
      alignItems: "flex-start",
    }}
  >
    {/* Left Side */}
    <div style={{ flex: 2 }}>
      <h1>SkyKart Admin Dashboard</h1>

      <h3>Total Complaints: {complaints.length}</h3>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Customer</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint.ticket_id}>
              <td>{complaint.ticket_id}</td>
              <td>{complaint.customer_name}</td>
              <td>{complaint.category}</td>
              <td>{complaint.priority}</td>
              <td>{complaint.status}</td>

              <td style={{ textAlign: "center" }}>
                <button
  onClick={() => handleViewComplaint(complaint)}
>
  View
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Right Side */}
<div
  style={{
    flex: 1,
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    minHeight: "500px",
    background: "#fff",

    position: "sticky",
    top: "20px",
    alignSelf: "flex-start",
    height: "fit-content",
  }}
>
      <h2>Complaint Details</h2>

      {!selectedComplaint ? (
        <p>Select a complaint to view its details.</p>
      ) : (
        <>
          <p><strong>Ticket ID:</strong> {selectedComplaint.ticket_id}</p>

          <p><strong>Customer:</strong> {selectedComplaint.customer_name}</p>

          <p><strong>Email:</strong> {selectedComplaint.email}</p>

          <p><strong>Complaint:</strong></p>
          <p>{selectedComplaint.complaint}</p>

          <hr />

          <p><strong>Category:</strong> {selectedComplaint.category}</p>

          <p><strong>Priority:</strong> {selectedComplaint.priority}</p>

          <p>
  <strong>Status:</strong>
</p>

<select
  value={newStatus}
  onChange={(e) => setNewStatus(e.target.value)}
>

  <option value="">Select Status</option>

  <option value="Open">
    Open
  </option>

  <option value="In Progress">
    In Progress
  </option>

  <option value="Resolved">
    Resolved
  </option>

</select>
<br />
<br />

<button onClick={updateStatus}>
  Update Status
</button>

          <p><strong>Summary:</strong></p>
          <p>{selectedComplaint.summary}</p>
        </>
      )}
    </div>
  </div>
);
}

export default AdminDashboard;