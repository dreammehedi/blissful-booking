import SectionTitle from "../section_title/SectionTitle";

function Newsletter() {
  return (
    <section className="py-8 md:py-12">
      {/* section title */}
      <SectionTitle
        title=" Subscribe to Our Newsletter"
        description=" Be the first to know about irresistible hotel booking, exclusive
            packages, and insider tips straight to your inbox! Subscribe to our
            newsletter and elevate your travel experience with access to
            unbeatable offers tailored just for you."
      ></SectionTitle>
      <div className="container flex flex-col space-y-3 justify-center items-center text-center md:max-w-2xl md:mx-auto">
        <form className="relative py-6 md:py-8 w-full md:max-w-md md:mx-auto">
          <input
            className="w-full ring-1 ring-dark focus:ring-primary my-transition rounded-full px-6 py-3 font-medium font-poppins outline-none"
            type="email"
            placeholder="Your Email Address..."
          />
          <input
            className="px-4 py-[10px] rounded-full bg-primary text-white font-medium cursor-pointer my-transition hover:bg-primary/80 absolute top-1/2 -translate-y-1/2 right-1"
            type="submit"
            value={"Subscribe"}
          />
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
