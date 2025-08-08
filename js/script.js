var myLib = [];

function Book(bookName, authorName, releaseYear, isRead) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.releaseYear = releaseYear;
    this.isRead = isRead;

    this.showInfos = function () {
        return `${bookName} by ${authorName}, released on ${releaseYear}, isRead: ${isRead}`
    }
}

function submitBook() {
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const releaseYear = document.getElementById("releaseYear").value;
    const isRead = document.getElementById("isRead").checked;

    myLib.push(new Book(bookName, authorName, releaseYear, isRead));
    resetForm();

    localStorage.setItem("lib", JSON.stringify(myLib));
}

function resetForm() {
    document.getElementById("mainForm").reset();
}

function showRows() {

    myLib = JSON.parse(localStorage.getItem("lib"));

    myLib.forEach(book => {
        console.log(book);
        var row = document.createElement('tr');
        Object.keys(book).forEach(element => {
            var cell = document.createElement('td');
            cell.classList.add('border-t', 'border-b', 'border-gray-400', 'px-4', 'py-2');
            if (book[element] === true) {
                cell.textContent = "✔";
            } else if (book[element] === false) {
                cell.textContent = "❌";
            } else {
                cell.textContent = book[element];
            }
            row.appendChild(cell);
        });
        document.getElementById("table-body").appendChild(row);
    });
}