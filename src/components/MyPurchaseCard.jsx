
const MyPurchaseCard = ({ purchaseItem, handleDelete }) => {
  console.log(purchaseItem);
  const { img, price, date, _id,foodName } = purchaseItem;

  return (
    <div className="flex max-w-md p-5 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div
        className="w-1/3 bg-cover"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>

      <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          {foodName}
        </h1>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Purchage time :{date}
        </p>

        {/* <div className="flex items-center mt-2">
          <svg
            className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg
            className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg
            className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg
            className="w-5 h-5 text-gray-500 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg
            className="w-5 h-5 text-gray-500 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
        </div> */}

        <div className="flex items-center justify-between mt-3">
          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
            {price}
          </h1>
          <button
            onClick={() => handleDelete(_id)}
            className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPurchaseCard;
