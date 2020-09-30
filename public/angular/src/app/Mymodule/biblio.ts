
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
