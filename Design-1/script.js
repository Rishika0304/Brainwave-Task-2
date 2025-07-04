function redirectToMedication() {
    window.location.href = "track.html";
}

function redirectToReports() {
    window.location.href = "reports.html";
}

function redirectToDoctor() {
    window.location.href = "doctor.html";
}

function openProfile() {
    const details = `
    🧑 Patient Profile:
    Name: Ram Kumar
    Age: 55
    Condition: Diabetes Type 2

    💊 Current Medications:
    - Metformin 500mg (Twice daily)
    - Glimepiride 1mg (Once daily)

    💡 Suggested Medications:
    - Regular Insulin (If sugar spikes persist)
    - Multivitamin supplements
    - Lifestyle modifications

    📅 Next Doctor Visit: 10th July 2025
    `;
    alert(details);
}
