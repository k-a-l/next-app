
type Props={
    params:{
        slug:string
    };
};
export default async function Document({params}:Props){
    const sligId=(await params).slug;
    if(sligId?.length===2){
      return  <h1>Viewing {sligId[0]} and {sligId[1]}</h1>
    }
    return(
        <h1>This is the document page {sligId}</h1>
    )
}