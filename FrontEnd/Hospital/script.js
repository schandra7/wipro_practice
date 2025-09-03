// Store users, patients, and doctors in localStorage
const users = JSON.parse(localStorage.getItem("users") || "[]");
const patients = JSON.parse(localStorage.getItem("patients") || "[]");
const doctors = JSON.parse(localStorage.getItem("doctors") || "[]");

// Registration
if (document.getElementById("registerForm")) {
  document.getElementById("registerForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    if (users.find(u => u.email === email)) {
      alert("User already exists!");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
    window.location.href = "login.html";
  });
}

// Login
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      alert("Invalid credentials");
      return;
    }
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("Login successful!");
    window.location.href = "index.html";
  });
}

// Patients
if (document.getElementById("patientForm")) {
  document.getElementById("patientForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("patientName").value;
    const age = document.getElementById("patientAge").value;
    const disease = document.getElementById("patientDisease").value;
    patients.push({ name, age, disease });
    localStorage.setItem("patients", JSON.stringify(patients));
    displayPatients();
  });
  displayPatients();
}

function displayPatients() {
  const list = document.getElementById("patientList");
  if (list) {
    list.innerHTML = patients.map(p => `<li>${p.name} (${p.age}) - ${p.disease}</li>`).join("");
  }
}

// Doctors
if (document.getElementById("doctorForm")) {
  document.getElementById("doctorForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("doctorName").value;
    const speciality = document.getElementById("doctorSpeciality").value;
    doctors.push({ name, speciality });
    localStorage.setItem("doctors", JSON.stringify(doctors));
    displayDoctors();
  });
  displayDoctors();
}

function displayDoctors() {
  const list = document.getElementById("doctorList");
  if (list) {
    list.innerHTML = doctors.map(d => `<li>${d.name} - ${d.speciality}</li>`).join("");
  }
}
