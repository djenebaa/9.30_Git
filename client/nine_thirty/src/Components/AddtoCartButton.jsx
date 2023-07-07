import React from "react";

function AddtoCartButton({ onClick }) {

    return (
        <div class="flex justify-center">

            <button className="flex w-fit justify-center rounded-md bg-[#2E2E68] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={onClick}>Add to cart</button>
        </div>
    )
}

export default AddtoCartButton;