import React from 'react';

const About: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto mt-12 lg:mt-44 mb-20 px-4 relative">
            <div className="text-xl md:text-2xl sm:text-xl leading-snug text-left font-light mb-8">
                <h2 className="font-thin">
                    Hey, I am Ramón <span role="img" aria-label="waving hand">👋</span>
                </h2>
            </div>
            <section className="prose prose-invert max-w-none text-gray-300">
                <p>
                    I do many things while trying to enjoy the passage of time.
                </p>

                <p>
                    Feel free to reach out at&nbsp;
                    <a href="mailto:hey@ramonmorcillo.com?subject=Hi%20there!" rel="noopener" className="cursor-pointer no-underline transition-colors ease-in duration-200 font-bold text-white border-b border-dashed border-white hover:border-solid">hey@ramonmorcillo.com</a>.
                </p>
            </section>
            <div className="flex mt-8">
                <img
                    src="/images/ramon_morcillo_meta_image.jpg"
                    alt="Ramon Morcillo"
                    width={300}
                    height={300}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
};

export default About;
