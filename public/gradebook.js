function fetchGradeData() {
    console.log("Fetching grade data...");

    // Create a new request for HTTP data
    let xhr = new XMLHttpRequest();

    // This is the address on the machine we're asking for data
    let apiRoute = "/api/grades";

    // When the request changes status, we run this anonymous function
    xhr.onreadystatechange = function () {
        // Check if we're done
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // Check if we're successful
            if (xhr.status !== 200) {
                console.error(`Could not get grades. Status: ${xhr.status}`);
                return;
            }

            // Parse and use the response
            let results = JSON.parse(xhr.responseText);
            populateGradebook(results);
        }
    };

    xhr.open("GET", apiRoute, true);
    xhr.send();
}

function populateGradebook(data) {
    // This function will take the fetched grade data and populate the table
    console.log("Populating gradebook with data:", data);

    // Get the gradebook table element
    let tableElm = document.getElementById("gradebook");

    // Clear the table first (optional)
    tableElm.innerHTML = "";

    data.forEach(function (assignment) {
        // Create a table row element
        let row = document.createElement("tr");

        // Create name column
        let nameCell = document.createElement("td");
        let fullName = `${assignment.last_name}, ${assignment.first_name}`;
        nameCell.appendChild(document.createTextNode(fullName));

        // Create grade column
        let gradeCell = document.createElement("td");
        gradeCell.appendChild(document.createTextNode(assignment.total_grade));

        // Append cells to the row
        row.appendChild(nameCell);
        row.appendChild(gradeCell);

        // Add the row to the table
        tableElm.appendChild(row);
    });
}

// Call fetchGradeData to trigger everything
fetchGradeData();
