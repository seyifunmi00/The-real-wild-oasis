import supabase from "./supabase.js";

export const getCabins = async () => {
   const {data, error} = await supabase.from('Cabins').select("*");

   if(error){
      console.log(error)
      throw new error("Cabins could not be loaded")
   }else{
      return data
   }
}
