export default function BookList() {
   let pageTitle = "List of Books to Read";
   let book1 = "https://m.media-amazon.com/images/I/716yoYTrPXL._SL1500_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/719rsGQY50L._SL1500_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/71j880zaLZL._SY466_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Well-Lived Life: A 103-Year-Old Doctor's Six Secrets to Health and Happiness at Every Age By Gladys McGarey" />
         <img src={book2} alt="Worst Case Scenario: A Novel Kindle Edition by T.J. Newman" />
         <img src={book3} alt="Laughing Without an Accent: Adventures of a Global Citizen by Firoozeh Dumas" />
      </div>      
   );
}