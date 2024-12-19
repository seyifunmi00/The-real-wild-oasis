import supabase from "./supabase.js";

export const getCabins   = async () =>{
 const { data, error } = await supabase
  .from('Cabins')
  .select('*')

 if(error){
  console.log(error);
  throw new error("couldn't fetch cabin data")
 }else{
  return data;
 }
}

export const deleteCabins   = async (id) =>{

 const { data, error } = await supabase
  .from('Cabins')
  .delete()
  .eq('id', id)


 if(error){
  console.log(error);
  throw new error("couldn't delete cabin")
 }else{
  return data;
 }
}
