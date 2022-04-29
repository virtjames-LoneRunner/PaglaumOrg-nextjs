import axios from "axios";
import React from "react";

import { useForm } from "react-hook-form";

function CommentForm({ type, item, setComments }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`/api/comment/`, {
        data: {
          ...data,
          [type]: item.id,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setComments(res.data);
          reset();
        }
      });
  };

  return (
    <div className="flex items-center justify-center my-5">
      <form
        className="w-full bg-white rounded-lg px-4 pt-2 shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
            Add a new comment
          </h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <input
              type="text"
              className="bg-gray-100 mb-2 rounded border border-gray-400 leading-normal w-full py-1 px-3 font-base placeholder-gray-500 focus:outline-none focus:bg-white"
              placeholder="Name"
              {...register("name")}
            />
            <input
              type="text"
              className="bg-gray-100 mb-2 rounded border border-gray-400 leading-normal w-full py-1 px-3 font-base placeholder-gray-500 focus:outline-none focus:bg-white"
              placeholder="Email"
              {...register("email")}
            />
            <textarea
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-48 py-2 px-3 font-base placeholder-gray-500 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Type Your Comment"
              required
              {...register("comment")}
            ></textarea>
          </div>
          <div className="w-full md:w-full flex justify-end px-3">
            {/* <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
              <svg
                fill="none"
                className="w-5 h-5 text-gray-600 mr-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs md:text-sm pt-px">Some HTML is okay.</p>
            </div> */}
            <div className="-mr-1">
              <input
                type="submit"
                className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                value="Post Comment"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
