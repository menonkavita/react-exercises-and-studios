import { useState } from 'react';

export default function BoardAssignment() {
   const boards = [
      {
         "label": "So So",
         "value": "So So"
      },
      {
         "label": "Good",
         "value": "Good"
      },
      {
         "label": "Great",
         "value": "Great"
      }
   ];

   // boards array returned using map()
   const boardLabel = boards.map((name) =>
      <option key={name.label} value={name.label}> {name.value} </option>
   );

   const [boardName, setName] = useState("no boards yet!");                         // Setting values via useState

   const handleChange = (event) => {
      setName(event.target.value);                                                 // setting boardName to value in event.target.value
   }

   return (
      <div style={{ paddingTop: "50px" }}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
            {boardLabel}                                                   {/* --------- Comment: boards array returned using map() */}

            {/* Both map() & below method work to assign values to option in select case
            <option value={boards[0].label}> {boards[0].value} </option>
            <option value={boards[1].label}> {boards[1].value} </option>
            <option value={boards[2].label}> {boards[2].value} </option> */}
         </select>

         <p>Saved to {boardName}!</p>
      </div>
   );
}
