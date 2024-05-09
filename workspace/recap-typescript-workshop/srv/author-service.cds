using {sap.capire.bookshop as my} from '../db/schema';

service AuthorService {
  @readonly
  entity Authors as projection on my.Authors;

  @readonly
  entity Books   as projection on my.Books
    actions {
      action updateStock(quantity : Integer);
    };
}
