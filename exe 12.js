class Book
{
    constructor(title,author,year)
    {
        this.title=title
        this.author=author
        this.year=year
    }
    display ()
    {
        console.log(`Name: ${this.title} Author: ${this.author} Published Year: ${this.year}`)
    }
}
const obj= new Book("Harry Potter","J.K. Rowling","1990")
obj.display()