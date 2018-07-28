// from data.js
var tableData = data;

// select the Filter Table button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    // Select the rows of the table that match the input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    // Select the table element
    var tableWeb = d3.select("#ufo-table").select("tbody");

    // Clear the table of values before writing to it
    tableWeb.html("");

    // Add all of the filtered data into the table
    filteredData.map(row => {
        var newRow = tableWeb.append("tr");
        newRow.append("td").text(row.datetime);
        newRow.append("td").text(row.city);
        newRow.append("td").text(row.state);
        newRow.append("td").text(row.country);
        newRow.append("td").text(row.shape);
        newRow.append("td").text(row.durationMinutes);
        newRow.append("td").text(row.comments);
    })
})