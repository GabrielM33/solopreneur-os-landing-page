
export const Clients = () => (
  <>
    <p className="mb-12 text-center text-lg text-white md:text-xl pb-10">
      <span className="text-primary-text">
        Built on
      </span>
      <br/> proven frameworks.
    </p>


    <div className="flex flex-wrap justify-around gap-y-6 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
      <div className="animate-glow">
        <Image src={"/books/atomic-habits.jpg"} alt="Atomic Habits" width={100} height={100} className="rounded-lg shadow-glow" />
      </div>
      <div className="animate-glow [animation-delay:200ms]">
        <Image src={"/books/e-myth.jpg"} alt="E-Myth" width={100} height={100} className="rounded-lg shadow-glow" />
      </div>
      <div className="animate-glow [animation-delay:400ms]">
        <Image src={"/books/gtd.jpg"} alt="Getting Things Done" width={100} height={100} className="rounded-lg shadow-glow" />
      </div>
      <div className="animate-glow [animation-delay:600ms]">
        <Image src={"/books/4-hour.jpg"} alt="Getting Things Done" width={100} height={100} className="rounded-lg shadow-glow" />
      </div>
    </div>
  </>
);
