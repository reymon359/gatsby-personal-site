import React from 'react';
import Link from 'next/link';

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
                    Problem solver and experienced maker with a passion for excellence and pragmatism.
                </p>
                <p>
                    I create software experiences that bring joy to people&apos;s lives.
                </p>
                <p>
                    I also guide individuals and teams through personalized <a href="https://coach.ramonmorcillo.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer no-underline transition-colors ease-in duration-200 font-bold text-white border-b border-dashed border-white hover:border-solid">coaching and mentoring services</a>.
                </p>
                <p>
                    This website serves as a platform for sharing my knowledge and achievements. You can find my resume <Link href="/resume" className="cursor-pointer no-underline transition-colors ease-in duration-200 font-bold text-white border-b border-dashed border-white hover:border-solid">here</Link>.
                </p>
                <p>
                    Occasionally, I&nbsp;
                    <a href="https://twitter.com/reymon359" target="_blank" rel="noopener noreferrer" className="cursor-pointer no-underline transition-colors ease-in duration-200 font-bold text-white border-b border-dashed border-white hover:border-solid">share insights</a>
                    &nbsp;and post&nbsp;
                    <a href="https://www.instagram.com/ramon.mor/" target="_blank" rel="noopener noreferrer" className="cursor-pointer no-underline transition-colors ease-in duration-200 font-bold text-white border-b border-dashed border-white hover:border-solid">moments</a>
                    &nbsp;or&nbsp;
                    <a href="https://www.instagram.com/ramon.mor.photos/" target="_blank" rel="noopener noreferrer" className="cursor-pointer no-underline transition-colors ease-in duration-200 font-bold text-white border-b border-dashed border-white hover:border-solid">images</a>
                    &nbsp;on Instagram.
                </p>
                <p>
                    Feel free to send me an email to&nbsp;
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
