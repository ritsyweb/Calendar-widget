alert("new script running")

function updateCalendar() {
  const now = new Date();

  // 📅 Day number (01, 02, etc.)
  const day = now.getDate().toString().padStart(2, "0");

  // 📆 Month
  const monthNames = [
    "January", "February", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"
  ];
  const month = monthNames[now.getMonth()];

  // 🗓️ Day name
  const dayNames = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  const dayName = dayNames[now.getDay()];

  // ⏰ Time
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  // 🎯 Update UI safely
  const dayEl = document.getElementById("day");
  const monthEl = document.getElementById("month");
  const dayNameEl = document.getElementById("dayName");
  const timeEl = document.getElementById("time");

  if (dayEl) dayEl.textContent = day;
  if (monthEl) monthEl.textContent = month;
  if (dayNameEl) dayNameEl.textContent = dayName;
  if (timeEl) timeEl.textContent = time;
}

// ⏱️ Run immediately
updateCalendar();

// 🔄 Auto update every second
setInterval(updateCalendar, 1000);