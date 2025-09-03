
    const LS_KEYS = {
      USERS: 'hm_users',
      SESSION: 'hm_currentUser',
      PATIENTS: 'hm_patients',
      DOCTORS: 'hm_doctors',
      APPTS: 'hm_appointments'
    };

    const $ = (sel, parent=document) => parent.querySelector(sel);
    const $$ = (sel, parent=document) => Array.from(parent.querySelectorAll(sel));

    const uid = () => Math.random().toString(36).slice(2,9) + Date.now().toString(36).slice(-4);

    const getData = (key, fallback=[]) => {
      try{ return JSON.parse(localStorage.getItem(key)) ?? fallback; }catch{ return fallback; }
    }
    const setData = (key, val) => localStorage.setItem(key, JSON.stringify(val));

    function download(filename, text){
      const blob = new Blob([text], {type:'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = filename; a.click();
      URL.revokeObjectURL(url);
    }

   
    function ensureSeed(){
      if(!localStorage.getItem(LS_KEYS.DOCTORS)){
        setData(LS_KEYS.DOCTORS, [
          { id: uid(), name:'Dr. Rajeev Sharma', specialty:'Cardiologist', contact:'+91 90000 11111' },
          { id: uid(), name:'Dr. Priya Singh', specialty:'Dentist', contact:'+91 90000 22222' },
          { id: uid(), name:'Dr. Sunita Joshi', specialty:'Neurologist', contact:'+91 90000 33333' }
        ]);
      }
      if(!localStorage.getItem(LS_KEYS.PATIENTS)){
        setData(LS_KEYS.PATIENTS, [
          { id: uid(), name:'Ravi Kumar', age:32, gender:'Male', contact:'+91 98xxxx1234' },
          { id: uid(), name:'Anita Rao', age:27, gender:'Female', contact:'+91 97xxxx5678' }
        ]);
      }
      if(!localStorage.getItem(LS_KEYS.APPTS)){
        const d = new Date();
        const today = d.toISOString().slice(0,10);
        setData(LS_KEYS.APPTS, [
          { id: uid(), name:'Ravi Kumar', age:32, contact:'+91 98xxxx1234', specialty:'Cardiologist', doctor:'Dr. Rajeev Sharma', date: today, status:'Scheduled' }
        ]);
      }
      if(!localStorage.getItem(LS_KEYS.USERS)){
 
        setData(LS_KEYS.USERS, [{ id: uid(), name:'Admin', email:'admin@hospital.test', password:'admin123' }]);
      }
    }

    function setSession(user){ localStorage.setItem(LS_KEYS.SESSION, JSON.stringify(user)); }
    function getSession(){ try{ return JSON.parse(localStorage.getItem(LS_KEYS.SESSION)); } catch{ return null; } }
    function clearSession(){ localStorage.removeItem(LS_KEYS.SESSION); }

    function showSection(id){
      $$('.section').forEach(s=>s.classList.remove('active'));
      $('#' + id)?.classList.add('active');

      $$('#authedNav .nav-link').forEach(a=>{
        if(a.dataset.route===id){ a.classList.add('active'); } else { a.classList.remove('active'); }
      });
      if(id==='dashboard') renderDashboard();
      if(id==='appointments') renderAppointments();
      if(id==='patients') renderPatients();
      if(id==='doctors') renderDoctors();
    }

    function syncNav(){
      const ses = getSession();
      const nav = $('#authedNav');
      const auth = $('#auth');
      if(ses){
        nav.style.display='flex';
        auth.classList.remove('active');
        $('#userWelcome').textContent = `Hi, ${ses.name}`;
        showSection('dashboard');
      } else {
        nav.style.display='none';
        showSection('auth');
      }
    }

    function renderDashboard(){
      const pats = getData(LS_KEYS.PATIENTS);
      const docs = getData(LS_KEYS.DOCTORS);
      const appts = getData(LS_KEYS.APPTS);
      $('#statPatients').textContent = pats.length;
      $('#statDoctors').textContent = docs.length;
      $('#statAppointments').textContent = appts.length;
      const today = new Date().toISOString().slice(0,10);
      const todayCount = appts.filter(a=>a.date===today && a.status==='Scheduled').length;
      $('#statToday').textContent = todayCount;
    }


    function renderDoctors(filter=''){
      const tb = $('#doctorsTable tbody');
      tb.innerHTML='';
      const docs = getData(LS_KEYS.DOCTORS).filter(d => (d.name + ' ' + d.specialty).toLowerCase().includes(filter.toLowerCase()));
      docs.forEach((d,idx)=>{
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${idx+1}</td>
          <td>${d.name}</td>
          <td>${d.specialty}</td>
          <td>${d.contact}</td>
          <td>
            <button class="btn btn-sm btn-outline-primary me-1" data-action="edit" data-id="${d.id}">Edit</button>
            <button class="btn btn-sm btn-outline-danger" data-action="del" data-id="${d.id}">Delete</button>
          </td>`;
        tb.appendChild(tr);
      });
 
      tb.onclick = (e)=>{
        const btn = e.target.closest('button'); if(!btn) return;
        const id = btn.dataset.id; const action = btn.dataset.action;
        if(action==='del'){
          const docs = getData(LS_KEYS.DOCTORS);
          setData(LS_KEYS.DOCTORS, docs.filter(x=>x.id!==id));
          renderDoctors($('#searchDoctors').value||'');
          renderAppointments(); 
        } else if(action==='edit'){
          const doc = getData(LS_KEYS.DOCTORS).find(x=>x.id===id);
          if(!doc) return;
          $('#doctorModalTitle').textContent='Edit Doctor';
          $('#doctorId').value=doc.id;
          $('#doctorFullName').value=doc.name;
          $('#doctorSpecialty').value=doc.specialty;
          $('#doctorContact').value=doc.contact;
          new bootstrap.Modal($('#doctorModal')).show();
        }
      }
    }

    function saveDoctor(){
      const id = $('#doctorId').value||null;
      const name = $('#doctorFullName').value.trim();
      const specialty = $('#doctorSpecialty').value.trim();
      const contact = $('#doctorContact').value.trim();
      if(!name||!specialty||!contact) return;
      const docs = getData(LS_KEYS.DOCTORS);
      if(id){
        const idx = docs.findIndex(d=>d.id===id);
        if(idx>-1) docs[idx] = { id, name, specialty, contact };
      } else {
        docs.push({ id: uid(), name, specialty, contact });
      }
      setData(LS_KEYS.DOCTORS, docs);
      renderDoctors($('#searchDoctors').value||'');
      renderAppointments();
      bootstrap.Modal.getInstance($('#doctorModal')).hide();
      $('#doctorForm').reset();
      $('#doctorModalTitle').textContent='New Doctor';
    }

   
    function renderPatients(filter=''){
      const tb = $('#patientsTable tbody');
      tb.innerHTML='';
      const pats = getData(LS_KEYS.PATIENTS).filter(p => (p.name + ' ' + p.contact).toLowerCase().includes(filter.toLowerCase()));
      pats.forEach((p,idx)=>{
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${idx+1}</td>
          <td>${p.name}</td>
          <td>${p.age}</td>
          <td>${p.gender}</td>
          <td>${p.contact}</td>
          <td>
            <button class="btn btn-sm btn-outline-primary me-1" data-action="edit" data-id="${p.id}">Edit</button>
            <button class="btn btn-sm btn-outline-danger" data-action="del" data-id="${p.id}">Delete</button>
          </td>`;
        tb.appendChild(tr);
      });
      tb.onclick = (e)=>{
        const btn = e.target.closest('button'); if(!btn) return;
        const id = btn.dataset.id; const action = btn.dataset.action;
        if(action==='del'){
          const pats = getData(LS_KEYS.PATIENTS);
          setData(LS_KEYS.PATIENTS, pats.filter(x=>x.id!==id));
          renderPatients($('#searchPatients').value||'');
        } else if(action==='edit'){
          const pat = getData(LS_KEYS.PATIENTS).find(x=>x.id===id);
          if(!pat) return;
          $('#patientModalTitle').textContent='Edit Patient';
          $('#patientId').value=pat.id;
          $('#patientFullName').value=pat.name;
          $('#patientAge2').value=pat.age;
          $('#patientGender').value=pat.gender;
          $('#patientContact2').value=pat.contact;
          new bootstrap.Modal($('#patientModal')).show();
        }
      }
    }

    function savePatient(){
      const id = $('#patientId').value||null;
      const name = $('#patientFullName').value.trim();
      const age = parseInt($('#patientAge2').value,10);
      const gender = $('#patientGender').value;
      const contact = $('#patientContact2').value.trim();
      if(!name||!Number.isFinite(age)||!gender||!contact) return;
      const pats = getData(LS_KEYS.PATIENTS);
      if(id){
        const idx = pats.findIndex(p=>p.id===id);
        if(idx>-1) pats[idx] = { id, name, age, gender, contact };
      } else {
        pats.push({ id: uid(), name, age, gender, contact });
      }
      setData(LS_KEYS.PATIENTS, pats);
      renderPatients($('#searchPatients').value||'');
      bootstrap.Modal.getInstance($('#patientModal')).hide();
      $('#patientForm').reset();
      $('#patientModalTitle').textContent='New Patient';
    }


    function specialtyList(){
      const docs = getData(LS_KEYS.DOCTORS);
      return [...new Set(docs.map(d=>d.specialty))].sort();
    }

    function populateApptSpecialtyAndDoctors(){
      const specSel = $('#apptSpecialty');
      const docSel = $('#apptDoctor');
      specSel.innerHTML = '<option value="" disabled selected>Select Specialty</option>' + specialtyList().map(s=>`<option value="${s}">${s}</option>`).join('');
      docSel.innerHTML = '<option value="" disabled selected>Select Doctor</option>';
      specSel.onchange = ()=>{
        const chosen = specSel.value;
        const docs = getData(LS_KEYS.DOCTORS).filter(d=>d.specialty===chosen);
        docSel.innerHTML = '<option value="" disabled selected>Select Doctor</option>' + docs.map(d=>`<option value="${d.name}">${d.name}</option>`).join('');
      }
    }

    function renderAppointments(filter=''){
      const tb = $('#appointmentsTable tbody');
      tb.innerHTML='';
      const appts = getData(LS_KEYS.APPTS).filter(a => {
        const blob = (a.name + ' ' + a.doctor + ' ' + a.specialty).toLowerCase();
        return blob.includes(filter.toLowerCase());
      });
      appts.forEach((a,idx)=>{
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${idx+1}</td>
          <td>${a.name}</td>
          <td>${a.age}</td>
          <td>${a.contact}</td>
          <td>${a.specialty}</td>
          <td>${a.doctor}</td>
          <td>${a.date}</td>
          <td><span class="badge text-bg-${ a.status==='Completed' ? 'success':'secondary' }">${a.status}</span></td>
          <td>
            <button class="btn btn-sm btn-outline-primary me-1" data-action="edit" data-id="${a.id}">Edit</button>
            <button class="btn btn-sm btn-outline-danger" data-action="del" data-id="${a.id}">Delete</button>
          </td>`;
        tb.appendChild(tr);
      });
      tb.onclick = (e)=>{
        const btn = e.target.closest('button'); if(!btn) return;
        const id = btn.dataset.id; const action = btn.dataset.action;
        if(action==='del'){
          const list = getData(LS_KEYS.APPTS).filter(x=>x.id!==id);
          setData(LS_KEYS.APPTS, list);
          renderAppointments($('#searchAppointments').value||'');
          renderDashboard();
        } else if(action==='edit'){
          const appt = getData(LS_KEYS.APPTS).find(x=>x.id===id);
          if(!appt) return;
          $('#appointmentModalTitle').textContent='Edit Appointment';
          $('#apptId').value=appt.id;
          $('#apptName').value=appt.name;
          $('#apptAge').value=appt.age;
          $('#apptContact').value=appt.contact;
          populateApptSpecialtyAndDoctors();
          $('#apptSpecialty').value=appt.specialty;
          $('#apptSpecialty').dispatchEvent(new Event('change'));
          $('#apptDoctor').value=appt.doctor;
          $('#apptDate').value=appt.date;
          $('#apptStatus').value=appt.status;
          new bootstrap.Modal($('#appointmentModal')).show();
        }
      }
    }

    function saveAppointment(){
      const id = $('#apptId').value||null;
      const name = $('#apptName').value.trim();
      const age = parseInt($('#apptAge').value,10);
      const contact = $('#apptContact').value.trim();
      const specialty = $('#apptSpecialty').value;
      const doctor = $('#apptDoctor').value;
      const date = $('#apptDate').value;
      const status = $('#apptStatus').value;
      if(!name||!Number.isFinite(age)||!contact||!specialty||!doctor||!date||!status) return;
      const list = getData(LS_KEYS.APPTS);
      if(id){
        const idx = list.findIndex(a=>a.id===id);
        if(idx>-1) list[idx] = { id, name, age, contact, specialty, doctor, date, status };
      } else {
        list.push({ id: uid(), name, age, contact, specialty, doctor, date, status });
      }
      setData(LS_KEYS.APPTS, list);
      renderAppointments($('#searchAppointments').value||'');
      renderDashboard();
      bootstrap.Modal.getInstance($('#appointmentModal')).hide();
      $('#appointmentForm').reset();
      $('#appointmentModalTitle').textContent='New Appointment';
    }

    function exportAll(){
      const payload = {
        users: getData(LS_KEYS.USERS),
        patients: getData(LS_KEYS.PATIENTS),
        doctors: getData(LS_KEYS.DOCTORS),
        appointments: getData(LS_KEYS.APPTS)
      };
      download(`hospital-data-${Date.now()}.json`, JSON.stringify(payload, null, 2));
    }

    function clearAll(){
      if(confirm('This will remove ALL data including users. Continue?')){
        Object.values(LS_KEYS).forEach(k=>localStorage.removeItem(k));
        location.reload();
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      ensureSeed();

     
      $('#registerForm').addEventListener('submit', (e)=>{
        e.preventDefault();
        const name = $('#regName').value.trim();
        const email = $('#regEmail').value.trim().toLowerCase();
        const pass = $('#regPassword').value;
        const conf = $('#regConfirm').value;
        const err = $('#registerError');
        const ok = $('#registerOk');
        err.classList.add('d-none'); ok.classList.add('d-none');
        if(pass!==conf){ err.textContent='Passwords do not match.'; err.classList.remove('d-none'); return; }
        const users = getData(LS_KEYS.USERS);
        if(users.some(u=>u.email===email)){ err.textContent='Email already registered.'; err.classList.remove('d-none'); return; }
        users.push({ id: uid(), name, email, password: pass });
        setData(LS_KEYS.USERS, users);
        ok.textContent = 'Registration successful. You can login now.'; ok.classList.remove('d-none');
        $('#registerForm').reset();
        new bootstrap.Tab($('#login-tab')).show();
      });

      $('#loginForm').addEventListener('submit', (e)=>{
        e.preventDefault();
        const email = $('#loginEmail').value.trim().toLowerCase();
        const pass = $('#loginPassword').value;
        const err = $('#loginError'); err.classList.add('d-none');
        const users = getData(LS_KEYS.USERS);
        const user = users.find(u=>u.email===email && u.password===pass);
        if(!user){ err.textContent='Invalid credentials.'; err.classList.remove('d-none'); return; }
        setSession({ id:user.id, name:user.name, email:user.email });
        syncNav();
      });

      $('#logoutBtn').addEventListener('click', ()=>{ clearSession(); syncNav(); });


      $$('#authedNav .nav-link').forEach(a=>a.addEventListener('click', (e)=>{ e.preventDefault(); showSection(a.dataset.route); }));

 
      $('#searchDoctors').addEventListener('input', (e)=>renderDoctors(e.target.value));
      $('#searchPatients').addEventListener('input', (e)=>renderPatients(e.target.value));
      $('#searchAppointments').addEventListener('input', (e)=>renderAppointments(e.target.value));

     
      $('#saveDoctorBtn').addEventListener('click', saveDoctor);
      $('#savePatientBtn').addEventListener('click', savePatient);
      $('#saveAppointmentBtn').addEventListener('click', saveAppointment);

      $('#appointmentModal').addEventListener('show.bs.modal', ()=>{
        populateApptSpecialtyAndDoctors();
      });

      
      $('#exportBtn').addEventListener('click', exportAll);
      $('#clearAllBtn').addEventListener('click', clearAll);

      
      syncNav();
    });
