class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.dueDate = null;
    this.patron = null;
    this._out = false;
  }
  set out(out) {
    this._out = out;
    if (this._out) {
      const newDueDate = new Date();
      newDueDate.setDate(newDueDate.getDate() + 14);
      book.dueDate = newDueDate;
    } else {
      this.dueDate = null;
    }
  }
  get out() {
    return this._out;
  }
}
