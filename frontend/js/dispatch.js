function dispatchNow() {
  // Get values
  let school = document.getElementById("school").value;
  let pack = document.getElementById("pack").value;
  let courier = document.getElementById("courier").value;

  // Validation
  if (school === "" || pack === "" || courier === "") {
    alert("⚠️ Please fill all fields");
    return;
  }

  // Debug (for now)
  console.log("Dispatch Data:", {
    school,
    pack,
    courier
  });

  // 🔥 API CALL (backend connection)
  fetch("http://localhost/library-system/backend/api/dispatch.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      school_id: school,
      pack_id: pack,
      courier: courier
    })
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message || "✅ Dispatch successful");

      // Optional: clear form
      document.getElementById("courier").value = "";
    })
    .catch(err => {
      console.error("Error:", err);
      alert("❌ Error connecting to server");
    });
}