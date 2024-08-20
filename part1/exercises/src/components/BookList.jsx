import classes from './BookList.module.css';

export default function BookList() {
   let pageTitle = "Newest Books Releases";
   let book1 = "https://m.media-amazon.com/images/I/41Sq8BmDyEL._SY445_SX342_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/41Bdk95YxqL._SY445_SX342_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/41wQZz0+hqL._SY445_SX342_.jpg";

   return (
      <div class={classes.border}>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Well-Lived Life: A 103-Year-Old Doctor's Six Secrets to Health and Happiness at Every Age By Gladys McGarey" width ={200} height={300}/>
         <img src={book2} alt="Worst Case Scenario: A Novel Kindle Edition by T.J. Newman"  width ={200} height={300}/>
         <img src={book3} alt="Laughing Without an Accent: Adventures of a Global Citizen by Firoozeh Dumas"  width ={200} height={300}/>
      </div>      
   );
}