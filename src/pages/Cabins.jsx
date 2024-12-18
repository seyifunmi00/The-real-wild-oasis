import {useEffect} from "react";
import {getCabins} from "../services/apiCabins.js";

function Cabins() {
 useEffect(() => {
  getCabins().then(data => console.log(data));
 }, []);
  return (
   <div>
    <h1>Cabins</h1>
    <img src="https://duooyrnfjjnofoeokkru.supabase.co/storage/v1/object/sign/cabin-images/cabin-001.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYWJpbi1pbWFnZXMvY2FiaW4tMDAxLmpwZyIsImlhdCI6MTczNDUyNzUyMSwiZXhwIjoxNzM1MTMyMzIxfQ.gbLgKvCN4THBEmch1jO0Yahh3jOusnCOFmArx8Ws1TI&t=2024-12-18T13%3A12%3A00.234Z"/>
   </div>
  );
}

export default Cabins;
