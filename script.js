const scriptURL = "https://script.google.com/macros/s/AKfycbwRqu6rkQcc1MpEu9sEyGtha3wit-A82ksT5qdv2YRTgcWbw5ES_xyIXreoI1X2IKpgkg/exec";

function updateMood() {
  const mood = document.getElementById("mood").value;
  document.body.className = mood;
}

async function submitGrievance() {
  const mood = document.getElementById("mood").value;
  const grievance = document.getElementById("grievance").value.trim();
  const status = document.getElementById("status");

  if (!grievance) {
    status.textContent = "Please type something, Bang 💔";
    status.style.color = "red";
    return;
  }

  const data = { mood, grievance };

  try {
    await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    status.textContent = "Submitted! I’ll read it soon, Bang 💌";
    status.style.color = "green";
    document.getElementById("grievance").value = "";
  } catch (error) {
    console.error("Error!", error.message);
    status.textContent = "Something went wrong 💔";
    status.style.color = "red";
  }
}
