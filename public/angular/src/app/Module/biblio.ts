
export const s = (v:any = "ok")=> {console.log(v)}

export function arrayRemove(arr:Array<any>, value:any)
{
  return arr.filter(function(ele){ return ele !== value; })
}

export function arrayRemoveId(arr:Array<any>, value:any)
{
  return arr.filter(function(ele){ return ele.id !== value; })
}

export function gIE(selector:string) {

  return <HTMLInputElement>document.querySelector(selector)

}

export function formatGetDate(date:string) {
  let day = date.split('T')[0]
  let hour = date.split('T')[1].split('.')[0]
  let dateLocale:any = new Date(parseInt(day.split('-')[0]) , parseInt(day.split('-')[1]) - 1, parseInt(day.split('-')[2]), parseInt(hour.split(':')[0]), parseInt(hour.split(':')[1]), parseInt(hour.split(':')[2]))
  dateLocale =  dateLocale.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'});
  return dateLocale
}
