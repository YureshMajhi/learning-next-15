import React from "react";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <div className="bg-purple-700">
        <h2>Featured products section</h2>
      </div>
    </div>
  );
};

export default ProductLayout;
