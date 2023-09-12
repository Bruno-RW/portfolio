const Footer = () => {
  return (
      <footer className="text-center text-gray-500 px-4 mb-10">
          <small className="text-xs block mb-2">
              &copy; 2023 Bruno Rafael Wünsch. All rights reserved.
          </small>

          <p className="text-xs">
              <span className="font-semibold">About this website: </span> built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel Hosting.
          </p>
      </footer>
  );
}
export default Footer;