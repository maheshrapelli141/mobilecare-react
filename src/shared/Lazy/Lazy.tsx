import React, { Suspense } from "react";

type Props = {
    element: React.ElementType
}

export const Lazy = ({ element }: Props) =>{
    const Element = element;
    
    return (
  <Suspense fallback={<div>...loading...</div>}>
    <Element />
  </Suspense>
)};

export default Lazy;
