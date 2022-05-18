export const useSearch = (search, array) => {

  let value = search.value != "" ? array.filter(
    (item) =>{ 
        return item.name.toLowerCase().indexOf(search.value.toLowerCase()) !== -1
    }
    )
    :
    array

    console.log(value, array, search.value)
  
  return { value }
}