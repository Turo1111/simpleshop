
export const useDate = () => {

    let f = new Date()
    let date = f.getFullYear() + "-" + (f.getMonth() +1) + "-" + f.getDate()

  return {date}
}