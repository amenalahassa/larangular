
export const s = (v:any)=> {console.log(v)}

export function arrayRemove(arr:Array<any>, value:any)
{
  return arr.filter(function(ele){ return ele !== value; })
}

export function arrayRemoveId(arr:Array<any>, value:any)
{
  return arr.filter(function(ele){ return ele.id !== value; })
}
