function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}
function setData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Dashboard counts
function updateDashboardCounts() {
    if (document.getElementById("patientCount"))
        document.getElementById("patientCount").innerText = getData("patients").length + " 👨‍⚕️";
    if (document.getElementById("doctorCount"))
        document.getElementById("doctorCount").innerText = getData("doctors").length + " 👩‍⚕️";
    if (document.getElementById("deptCount"))
        document.getElementById("deptCount").innerText = getData("departments").length + " 🏢";
    if (document.getElementById("apptCount"))
        document.getElementById("apptCount").innerText = getData("appointments").length + " 📅";
}

// Patients
function loadPatients() {
    let patients = getData("patients");
    let list = document.getElementById("patientList");
    list.innerHTML = "";
    patients.forEach(p => {
        list.innerHTML += `<tr><td>${p.name}</td><td>${p.age}</td></tr>`;
    });
}
function addPatient(e) {
    e.preventDefault();
    let patients = getData("patients");
    patients.push({ name: patientName.value, age: patientAge.value });
    setData("patients", patients);
    loadPatients();
    e.target.reset();
}

// Doctors
function loadDoctors() {
    let doctors = getData("doctors");
    let list = document.getElementById("doctorList");
    list.innerHTML = "";
    doctors.forEach(d => {
        list.innerHTML += `<tr><td>${d.name}</td><td>${d.spec}</td></tr>`;
    });
}
function addDoctor(e) {
    e.preventDefault();
    let doctors = getData("doctors");
    doctors.push({ name: doctorName.value, spec: doctorSpec.value });
    setData("doctors", doctors);
    loadDoctors();
    e.target.reset();
}

// Departments
function loadDepartments() {
    let depts = getData("departments");
    let list = document.getElementById("deptList");
    list.innerHTML = "";
    depts.forEach(d => {
        list.innerHTML += `<tr><td>${d.name}</td></tr>`;
    });
}
function addDepartment(e) {
    e.preventDefault();
    let depts = getData("departments");
    depts.push({ name: deptName.value });
    setData("departments", depts);
    loadDepartments();
    e.target.reset();
}

// Appointments
function loadAppointments() {
    let appts = getData("appointments");
    let list = document.getElementById("apptList");
    list.innerHTML = "";
    appts.forEach(a => {
        list.innerHTML += `<tr><td>${a.patient}</td><td>${a.doctor}</td><td>${a.date}</td></tr>`;
    });
}
function addAppointment(e) {
    e.preventDefault();
    let appts = getData("appointments");
    appts.push({ patient: apptPatient.value, doctor: apptDoctor.value, date: apptDate.value });
    setData("appointments", appts);
    loadAppointments();
    e.target.reset();
}

// Export / Import
function exportData() {
    let allData = {
        patients: getData("patients"),
        doctors: getData("doctors"),
        departments: getData("departments"),
        appointments: getData("appointments")
    };
    let blob = new Blob([JSON.stringify(allData)], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "hospital_data.json";
    a.click();
}
function importData(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
        let imported = JSON.parse(e.target.result);
        for (let key in imported) {
            setData(key, imported[key]);
        }
        alert("Data imported successfully!");
        location.reload();
    };
    reader.readAsText(file);
}

