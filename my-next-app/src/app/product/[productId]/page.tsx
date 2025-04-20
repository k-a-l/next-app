// export default async function ProductId({params,}:{
//     params:Promise<{productId:string}>;
// }){
//     const productId= (await params).productId;
//     return(
//         <h1>This is the product ID + ProductId</h1>
//     )
// }

// app/products/[productId]/page.tsx

type Props = {
    params: {
      productId: string;
    };
  };
  
  export default async function ProductPage({ params }: Props) {
    const productId =(await params).productId;
  
    return (
      <h1>This is the product ID: {productId}</h1>
    );
  }
  