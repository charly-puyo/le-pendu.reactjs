import React from 'eact';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h2 className="text-3xl font-bold mb-4">{greeting}</h2>
      <p className="text-lg text-gray-600">Este es el contenedor de la lista de items.</p>
    </div>
  );
};

export default ItemListContainer;