import cds from '@sap/cds';

type totalStockType = Array<{totalStock: number, author_ID: number}>;

export default class AuthorService extends cds.ApplicationService {

  async init() {
    
    const { Authors,Books, Book } = await import('#cds-models/AuthorService')

    this.after('READ', Authors, async (authors) => {

      // Put all author ID's for this request in an array for our query
      let authorIds = authors?.map((author) => author.ID);

      // Get the total stock for each author in a single query to the database (code push down)
      let totalStock = await SELECT('SUM(stock) AS totalStock', 'author_ID').from(Books).where({ author_ID: { 'in': authorIds } }).groupBy('author_ID') as totalStockType;

      // Enrich the resulting authors with total books in stock
      authors = authors?.map((author) => {
        const authorTotalStock = totalStock.find(ts => ts.author_ID === author.ID);
        if (authorTotalStock) {
          author.totalBooksInStock = authorTotalStock.totalStock;
        }
        return author;
      });

      // Return final result
      return authors;
    });

    // Update stock for a book
    this.on(Book.actions.updateStock, async (req) => {
      // Read the parameters from the request
      const parameters = req.params[0] as { ID: number, IsActiveEntity: boolean };

      // Update the stock for the given book
      await UPDATE(Books, parameters.ID).set({ 'stock': { '=': req.data.quantity } });

      // Notify the client that the stock has been updated
      req.notify(200, 'Stock updated');
    });

    return super.init()
  }
}
