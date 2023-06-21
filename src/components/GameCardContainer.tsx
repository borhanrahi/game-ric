export const Testimonials = () => {
  const testimonials = [
    {
      name: "Barbara McIntosh",
      title: "C.E.O",
      image:
        "https://shreethemes.in/techwind/layouts/assets/images/client/01.jpg",
      quote:
        "I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!",
    },
    {
      name: "Barbara McIntosh",
      title: "C.E.O",
      image:
        "https://shreethemes.in/techwind/layouts/assets/images/client/05.jpg",
      quote:
        "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it.",
    },
    {
      name: "Barbara McIntosh",
      title: "C.E.O",
      image:
        "https://shreethemes.in/techwind/layouts/assets/images/client/02.jpg",
      quote:
        "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
    },
    {
      name: "Barbara McIntosh",
      title: "C.E.O",
      image:
        "https://shreethemes.in/techwind/layouts/assets/images/client/04.jpg",
      quote:
        "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
    },
    {
      name: "Barbara McIntosh",
      title: "C.E.O",
      image:
        "https://shreethemes.in/techwind/layouts/assets/images/client/03.jpg",
      quote:
        "I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though.",
    },
    {
      name: "Barbara McIntosh",
      title: "C.E.O",
      image:
        "https://shreethemes.in/techwind/layouts/assets/images/client/03.jpg",
      quote:
        "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
    },
  ];

  return (
    <section>
      <div className="max-w-7xl px-4 mt-16 mx-auto md:mt-24">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl leading-normal font-semibold">
            What people are saying?
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Start working with Tailwind CSS that can provide everything you need
            to generate awareness, drive traffic, connect.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={`testimonial-${index}`}
              className="rounded-lg shadow-lg dark:shadow-gray-800 p-6"
            >
              <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                <img
                  className="h-16 w-16 rounded-full                  shadow dark:shadow-gray-800"
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile picture`}
                />
                <div className="pl-4">
                  <a
                    className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                    href="#"
                  >
                    {testimonial.name}
                  </a>
                  <p className="text-slate-400">{testimonial.title}</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-slate-400">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
