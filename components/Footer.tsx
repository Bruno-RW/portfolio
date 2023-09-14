"use client";

const Footer = () => {
    return (
        <>
            <div className="w-full h-auto aspect-[900/400] bg-cover bg-center bg-no-repeat bg-[url('/img/background/footer-bg-light.svg')] sm:aspect-[900/200] dark:bg-[url('/img/background/footer-bg-dark.svg')]"></div>

            <footer className="relative text-center text-gray-300 pb-64 px-4 bg-[#0c5680] sm:pb-40 lg:pb-28 dark:text-gray-500 dark:bg-[#010911]">
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full px-3 lg:px-0">
                    <small className="text-xs block mb-2">
                        &copy; 2023 Bruno Rafael Wünsch. All rights reserved.
                    </small>
                    <p className="w-full text-xs">
                        <span className="font-semibold">About this website: </span> built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel Hosting.
                    </p>
                </div>
            </footer>
        </>
    );
}
export default Footer;