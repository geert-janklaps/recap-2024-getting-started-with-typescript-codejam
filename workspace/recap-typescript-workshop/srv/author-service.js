const cds = require('@sap/cds/lib')

module.exports = class AuthorService extends cds.ApplicationService { 
  
  init(){

    this.after('READ', 'Authors', async (authors) => {
      // Ensure authors is an array (could be an object when selecting a single author)
      authors = Array.isArray(authors) ? authors : [authors];
      
      // Put all author ID's for this request in an array for our query
      let authorIds = authors.map((author) => author.ID);

      // Get the total stock for each author in a single query to the database (code push down)
      let totalStock = await SELECT('SUM(stock) AS totalStock', 'author_ID').from('sap.capire.bookshop.Books').where({ author_ID: { 'in': authorIds } }).groupBy('author_ID');
      
      // Enrich the resulting authors with total books in stock
      authors = authors.map( (author) => {
        const authorTotalStock = totalStock.find(ts => ts.author_ID === author.ID);
        if(authorTotalStock){
          author.totalBooksInStock = authorTotalStock.totalStock;
        }
        return author;
      });
      
      // Return final result
      return authors;
    });

    return super.init()
  }
}
