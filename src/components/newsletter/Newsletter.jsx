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
      <div
        data-aos="fade-up"
        className="container flex flex-col space-y-3 justify-center items-center text-center md:max-w-2xl md:mx-auto"
      >
        <form className="group relative py-6 md:py-8 w-full md:max-w-md md:mx-auto">
          <input
            className="w-full ring-1 ring-dark focus:ring-primary my-transition px-6 py-3 font-medium font-poppins outline-none rounded-tr-3xl rounded-bl-3xl group-hover:rounded-3xl"
            type="email"
            placeholder="Your Email Address..."
          />
          <input
            className="px-4 py-[10px] bg-primary/80 my-transition hover:shadow hover:shadow-primary hover:bg-primary text-white font-bold mr-auto rounded-tr-3xl rounded-bl-3xl absolute top-1/2 -translate-y-1/2 right-1 group-hover:rounded-3xl"
            type="submit"
            value={"Subscribe"}
          />
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
