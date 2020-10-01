
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
  day = day.split('-')[2] + "-" + day.split('-')[1] + "-" + day.split('-')[0]
  let hour = date.split('T')[1].split('.')[0]
  return day + " à " + hour
}
