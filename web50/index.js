function lucky(e) {
    e.preventDefault();  // Correct method name and using the event object
    let query = document.getElementById("q").value;
    console.log(query);
    window.location.href = `https://www.google.com/search?q=${query}&btnI=`;

}

function find(e) {
    e.preventDefault();  // Correct method name and using the event object
    console.log("yo");
    let query = document.getElementById("m").value;
    console.log(query);
    window.location.href = `https://www.google.com/search?q=${query}&udm=2`;
}