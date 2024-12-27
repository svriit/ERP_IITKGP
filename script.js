const transcriptData = {
    "subjects_count": [
        {"sem": "1", "depth_core": "9 - 9 - 9", "depth_elective": "0 - 0 - 0", "depth_breadth_elective": "0 - 0 - 0", "breadth_elective": "0 - 0 - 0", "hss_breadth": "0 - 0 - 0", "project": "0 - 0 - 0", "curricula_registered_cleared":"9 - 9 - 9", "curricula_registered_cleared_cumulative":"9 - 9 - 9"},
        {"sem": "2", "depth_core": "18 - 18 - 18", "depth_elective": "0 - 0 - 0", "depth_breadth_elective": "0 - 0 - 0", "breadth_elective": "0 - 0 - 0", "hss_breadth": "0 - 0 - 0", "project": "0 - 0 - 0", "curricula_registered_cleared":"18 - 18 - 18", "curricula_registered_cleared_cumulative":"9 - 9 - 9"},
        {"sem": "3", "depth_core": "26 - 26 - 26", "depth_elective": "0 - 0 - 0", "depth_breadth_elective": "0 - 0 - 0", "breadth_elective": "0 - 0 - 0", "hss_breadth": "0 - 0 - 0", "project": "0 - 0 - 0", "curricula_registered_cleared":"26 - 26 - 26", "curricula_registered_cleared_cumulative":"26 - 26 - 26"},
        {"sem": "4", "depth_core": "33 - 33 - 33", "depth_elective": "0 - 0 - 0", "depth_breadth_elective": "1 - 1 - 1", "breadth_elective": "1 - 1 - 1", "hss_breadth": "0 - 0 - 0", "project": "0 - 0 - 0", "curricula_registered_cleared":"33 - 33 - 33", "curricula_registered_cleared_cumulative":"33 - 33 - 33"},
        {"sem": "5", "depth_core": "39 - 39 - 39", "depth_elective": "0 - 0 - 0", "depth_breadth_elective": "1 - 1 - 1", "breadth_elective": "2 - 2 - 2", "hss_breadth": "0 - 0 - 0", "project": "0 - 0 - 0", "curricula_registered_cleared":"39 - 39 - 39", "curricula_registered_cleared_cumulative":"39 - 39 - 39"}
    ],
    "subjects": [
        {"sem": "1", "subno": "BS10003", "name": "SCIENCE OF LIVING SYSTEMS", "type": "Depth CORE", "ltp": "2-0-0", "credit": "2", "reg_sem": "1", "reg_session": "AU-20-21 (P)", "grade": "A", "status": ""},
        {"sem": "1", "subno": "CE13003", "name": "ENGINEERING DRAWING AND COMPUTER GRAPHICS", "type": "Depth CORE", "ltp": "1-0-3", "credit": "3", "reg_sem": "1", "reg_session": "AU-20-21 (P)", "grade": "C", "status": ""},
        {"sem": "2", "subno": "EA10008", "name": "EXTRA ACADEMIC ACTIVITY-II", "type": "Depth CORE", "ltp": "0-0-3", "credit": "1", "reg_sem": "2", "reg_session": "SP-20-21 (P)", "grade": "A", "status": ""},
        {"sem": "3", "subno": "EA10009", "name": "EXTRA ACADEMIC ACTIVITY-III", "type": "Depth CORE", "ltp": "0-0-3", "credit": "1", "reg_sem": "3", "reg_session": "AU-21-22 (P)", "grade": "C", "status": ""},
        {"sem": "4", "subno": "IM21202", "name": "MANAGEMENT OF INVENTORY SYSTEMS", "type": "Depth CORE", "ltp": "3-1-0", "credit": "4", "reg_sem": "4", "reg_session": "SP-21-22 (P)", "grade": "C", "status": ""},
        {"sem": "5", "subno": "IM31006", "name": "SIMULATION", "type": "Depth CORE", "ltp": "3-0-0", "credit": "3", "reg_sem": "5", "reg_session": "AU-22-23 (P)", "grade": "P", "status": ""}
    ]
};

// Function to populate subjects count
function populateSubjectsCountTable(sem) {
    const tableBody = document.querySelector("#subjectsCountTable tbody");
    tableBody.innerHTML = "";

    const filteredData = transcriptData.subjects_count.filter(data => data.sem === sem);
    filteredData.forEach(semData => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = semData.sem;
        row.insertCell().textContent = semData.depth_core;
        row.insertCell().textContent = semData.depth_elective;
        row.insertCell().textContent = semData.depth_breadth_elective;
        row.insertCell().textContent = semData.breadth_elective;
        row.insertCell().textContent = semData.hss_breadth;
        row.insertCell().textContent = semData.project;
        row.insertCell().textContent = semData.curricula_registered_cleared;
        row.insertCell().textContent = semData.curricula_registered_cleared_cumulative;
    });
}

// Function to populate subjects table
function populateSubjectsTable(sem) {
    const tableBody = document.querySelector("#subjectsTable tbody");
    tableBody.innerHTML = "";

    const filteredSubjects = transcriptData.subjects.filter(subject => subject.sem === sem);
    filteredSubjects.forEach(subject => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = subject.subno;
        row.insertCell().textContent = subject.name;
        row.insertCell().textContent = subject.type;
        row.insertCell().textContent = subject.ltp;
        row.insertCell().textContent = subject.credit;
        row.insertCell().textContent = subject.reg_sem;
        row.insertCell().textContent = subject.reg_session;
        row.insertCell().textContent = subject.grade;
        row.insertCell().textContent = subject.status;
    });
}
