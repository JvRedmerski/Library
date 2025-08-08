const myLib = [];

function Book(bookName, authorName, releaseYear, isRead){
    this.bookName = bookName;
    this.authorName = authorName;
    this.releaseYear = releaseYear;
    this.isRead = isRead;

    this.showInfos = function(){
        return `${bookName} by ${authorName}, released on ${releaseYear}, isRead: ${isRead}`
    }
}

function submitBook(){
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const releaseYear = document.getElementById("releaseYear").value;
    const isRead = document.getElementById("isRead").checked;

    myLib.push(new Book(bookName, authorName, releaseYear, isRead));
    resetForm();
}

function resetForm(){
    document.getElementById("mainForm").reset();
}   