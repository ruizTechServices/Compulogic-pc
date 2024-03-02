<script>
  let firstName = "";

  async function addUser() {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("User added:", result);
      firstName = ""; // Reset input field after submission
    } else {
      console.error("Error adding user");
    }
  }
</script>

<form on:submit|preventDefault={addUser}>
  <input
    type="text"
    placeholder="Enter your first name"
    bind:value={firstName}
  />
  <button type="submit">Submit</button>
</form>
