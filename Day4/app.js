document.getElementById('employeeForm').addEventListener('submit', function(event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Get form field values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const dob = document.getElementById('dob').value.trim();
    
    // Get display areas
    const errorMessageDiv = document.getElementById('error-message');
    const dataDisplayDiv = document.getElementById('data-display');

    // Clear previous messages and data
    errorMessageDiv.textContent = '';
    dataDisplayDiv.innerHTML = '';

    // a) Perform validation: Check if any field is empty
    if (!firstName || !lastName || !email || !dob) {
        errorMessageDiv.textContent = 'Error: All fields must be filled out.';
        return; // Stop the script if validation fails
    }

    // b) If data is correct, display it in a table
    const tableHTML = `
        <h3>Employee Data</h3>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${email}</td>
                    <td>${dob}</td>
                </tr>
            </tbody>
        </table>
    `;
    
    dataDisplayDiv.innerHTML = tableHTML;

    // Clear the form after successful submission
    this.reset();
});