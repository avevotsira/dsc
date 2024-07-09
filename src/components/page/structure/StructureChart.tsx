const StructureChart = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 pb-12 sm:px-7">
      <div className="list-chart flex flex-col items-center justify-center space-y-8 text-sm font-semibold transition-all lg:space-y-16">
        <div className="level-1 relative w-80 max-w-xs rounded-md bg-primary px-16 py-3 text-center text-primary-foreground before:absolute before:inset-x-0 before:top-full before:mx-auto before:h-28 before:w-1 before:bg-sky-300 before:lg:h-36">
          Digital Security Committee
        </div>
        <div className="mb-8 grid gap-x-9 lg:grid-cols-3">
          <div className="level-2 relative hidden max-w-xs rounded-md bg-sky-700 px-11 py-3 text-center text-primary-foreground before:absolute before:inset-y-0 before:left-full before:my-auto before:h-1 before:w-[4.5rem] before:bg-sky-300 sm:before:w-20 md:px-10 lg:inline-block lg:before:w-[5.5rem]">
            Secretariat
          </div>
          <div className="level-2 relative inline-block max-w-xs rounded-md bg-primary px-10 py-3 text-center text-primary-foreground">
            Secretary General
          </div>
        </div>
        <div className="relative grid grid-cols-4 lg:gap-x-5 lg:gap-y-8">
          <div className="col-span-4 grid grid-cols-2 lg:hidden">
            <div className="border-l-4 border-t-4 border-sky-300 pb-3" />
          </div>
          <div className="flex h-full items-center border-l-4 border-sky-300 lg:hidden">
            <div className="my-auto h-1 w-full" />
          </div>
          <div className="level-3 relative col-span-3 my-4 flex max-w-xs items-center justify-center rounded-md bg-sky-700 px-2 py-3 text-center text-primary-foreground before:absolute before:inset-x-0 before:bottom-full before:mx-auto before:h-16 before:w-1 before:bg-sky-300 sm:w-52 md:px-5 lg:col-span-1 lg:my-0 lg:hidden lg:w-auto lg:before:h-8">
            Secretariat
          </div>
          <div className="flex h-full items-center border-l-4 border-sky-300 lg:hidden">
            <div className="my-auto h-1 w-full bg-sky-300" />
          </div>
          <div className="level-3 relative col-span-3 my-4 flex max-w-xs items-center justify-center rounded-md bg-sky-700 px-2 py-3 text-center text-primary-foreground before:absolute before:inset-x-0 before:bottom-full before:mx-auto before:w-1 before:bg-sky-300 after:absolute after:-top-8 after:bottom-full after:left-1/2 after:h-1 after:bg-sky-300 sm:w-52 md:px-5 lg:col-span-1 lg:my-0 lg:w-auto lg:before:h-8 lg:after:w-80">
            Cyber Security Cambodia
          </div>
          <div className="flex h-full items-center border-l-4 border-sky-300 lg:hidden">
            <div className="my-auto h-1 w-full bg-sky-300" />
          </div>
          <div className="level-3 relative col-span-3 my-4 flex max-w-xs items-center justify-center rounded-md bg-sky-700 px-2 py-3 text-center text-primary-foreground before:absolute before:inset-x-0 before:bottom-full before:mx-auto before:w-1 before:bg-sky-300 after:absolute after:-top-8 after:bottom-full after:right-1/2 after:h-1 after:bg-sky-300 sm:w-52 md:px-5 lg:col-span-1 lg:my-0 lg:w-auto lg:before:h-8 lg:after:left-1/2 lg:after:w-44">
            Cyber Security Cambodia
          </div>
          <div className="flex h-full items-center border-l-4 border-sky-300 lg:hidden">
            <div className="my-auto h-1 w-full bg-sky-300" />
          </div>
          <div className="level-3 relative col-span-3 my-4 flex max-w-xs items-center justify-center rounded-md bg-sky-700 px-2 py-3 text-center text-primary-foreground before:absolute before:inset-x-0 before:bottom-full before:mx-auto before:w-1 before:bg-sky-300 after:absolute after:-top-8 after:bottom-full after:right-1/2 after:h-1 sm:w-52 md:px-5 lg:col-span-1 lg:my-0 lg:w-auto lg:before:h-8 lg:after:w-44 lg:after:bg-sky-300">
            Cyber Security Cambodia
          </div>
          <div className="flex h-full items-center border-l-4 border-sky-300 lg:hidden">
            <div className="my-auto h-1 w-full bg-sky-300" />
          </div>
          <div className="level-3 relative col-span-3 my-4 flex max-w-xs items-center justify-center rounded-md bg-sky-700 px-2 py-3 text-center text-primary-foreground before:absolute before:inset-x-0 before:bottom-full before:mx-auto before:w-1 before:bg-sky-300 after:absolute after:-top-8 after:bottom-full after:right-1/2 after:h-1 after:w-44 sm:w-52 md:px-5 lg:col-span-1 lg:my-0 lg:w-auto lg:before:h-8 lg:after:w-80 lg:after:bg-sky-300">
            Cyber Security Cambodia
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructureChart;
