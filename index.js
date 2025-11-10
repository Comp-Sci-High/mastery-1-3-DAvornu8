// ARRAY SECTION

// Task 1: Create an empty array called readingList
let readingList = [];
// Task 2: Add 3 books to the readingList array
readingList.push("Book One", "Book Two", "Book Three");
// Task 3: Update the second book to have "Updated" at the end of its title
readingList[1] = readingList[1] + "Updated";
// Task 4: Delete the last book from the readingList array
// Console log readingList
readingList.pop()
console.log(readingList);
// OBJECTS SECTION

// Task 5: Create an object called bookData with 'title', 'author', and 'pages' properties
let bookData = {
    title: "The Great Gatsby",
    author: "F.Scott Fitzgerlad",
    pages: 180
};
// Task 6: Add a property 'read' to the bookData object and set it to false
bookData.read = false;
// Task 7: Update the 'read' property to true
bookData.read = true;
// Console log the bookData object
console.log(bookData)
// NESTED ARRAYS & OBJECTS SECTION
// Task 8:  Add an property 'chapters' and set it equal to an array holding "Chapter 1", "Chapter 2", and "Chapter 3"
bookData.chapters= ["Chapter 1", "Chapter 2", "Chapter 3"]
// Task 9: Add "Chapter 4" the 'chapters' property
bookData.chapters.push("Chapter 4")
// Console log the length of bookData's 'chapters' array to confirm it worked
console.log(bookData.length)
// Task 10: Update the title of the first chapter in the 'chapters' array to be "Chapter 1: Introduction"
bookData.chapters[0] = "Chapter 1: Introduction";
// Console log the bookData object
console.log(bookData);