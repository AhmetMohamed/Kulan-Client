import React from "react";

const Comment = () => {
  return (
    <div>
      <div className=" rounded-xl bg-primary p-1 mt-3 ">
        <div className="rounded-xl h-fit bg-Secondary flex-1 m-4">
          <div className="Post h-fit flex p-5 space-x-6">
            <div className="bg-primary w-11 h-11 rounded-lg"></div>
            <input
              className="bg-Tertairy outline-none text-body flex-1 rounded-lg w-10 p-2 text-xs font-poppins font-medium"
              placeholder="What is the code problem today?"
            />
          </div>

          <div className="h-fit flex justify-center pt-1 pb-6 text-body px-7 gap-4 text-xs font-poppins font-medium text-Green">
            <p>Ask Question</p>
          </div>
        </div>

        <div className="rounded-xl h-fit bg-Secondary flex-1 mx-4 mt-4 flex-col p-5 gap-4 items-center">
          <div className="flex gap-3 items-center">
            <div className="bg-primary w-11 h-11 rounded-lg"></div>

            <div className="Pro  ">
              <p className="font-poppins text-xs font-medium text-white">
                Mohamed Ali
              </p>
              <p className="font-poppins text-xs font-medium text-body">
                @malidev
              </p>
            </div>
          </div>

          <div className="mt-5 text-xs text-body font-poppins font-medium leading-6">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but majority have to suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
          </div>

          <div className="flex justify-content justify-between items-center mt-3 pb-3">
            <div className="flex mt-4 relative">
              <div className="bg-primary w-8 h-8 rounded-lg"></div>
              <div className="bg-primary absolute left-5 border-2 border-secondary w-8 h-8 rounded-lg"></div>
              <div className="bg-primary absolute left-15 border-2 border-secondary w-8 h-8 rounded-lg"></div>
            </div>

            <div className="flex gap-48 mt-4 justify-between font-poppins font-medium text-xs text-white pr-8">
              <p>Like</p>
              <p>Reply</p>
              <p>Saved</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl h-fit bg-Secondary flex-1 mx-4 mt-4 flex-col p-5 gap-4 items-center">
          <div className="flex gap-3 items-center">
            <div className="bg-primary w-11 h-11 rounded-lg"></div>

            <div className="Pro  ">
              <p className="font-poppins text-xs font-medium text-white">
                Mohamed Ali
              </p>
              <p className="font-poppins text-xs font-medium text-body">
                @malidev
              </p>
            </div>
          </div>

          <div className="mt-5 text-xs text-body font-poppins font-medium leading-6">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but majority have to suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
          </div>

          <div className=" flex-1 justify-content justify-between items-center mt-8 pb-3">
            <div className="Post h-fit flex  gap-4">
              <div className="bg-primary w-11 h-11 rounded-lg"></div>
              <input
                className="bg-Tertairy outline-none text-body flex-1 rounded-lg w-10 p-2 text-xs font-poppins font-medium"
                placeholder="What is the code problem today?"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
