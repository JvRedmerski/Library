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
    myLib = JSON.parse(localStorage.getItem("lib"));

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
        var buttonCell = document.createElement('td');
        buttonCell.classList.add('border-t', 'border-b', 'border-gray-400', 'px-4', 'py-2');
        var button = document.createElement('input');
        button.value = "Remove";
        button.type = "button";
        button.onclick = function () {
            removeRow(button)
        };
        button.classList.add('bg-rose-600', 'py-1', 'px-2', 'rounded-xl', 'hover:scale-110', 'duration-300');
        buttonCell.appendChild(button);
        row.appendChild(buttonCell);
        document.getElementById("table-body").appendChild(row);
    });
}

function removeRow(button){
    myLib = JSON.parse(localStorage.getItem("lib"));

    const row = button.parentElement.parentElement;
    const bookName = row.cells[0].textContent;
    const releaseYear = row.cells[2].textContent;
    myLib = myLib.filter(book => {
        return !(book.bookName === bookName && book.releaseYear === releaseYear);
    });

    localStorage.setItem("lib", JSON.stringify(myLib));

    row.remove();
}