const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} BuyBuddy. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline text-sm">About</a>
          <a href="#" className="hover:underline text-sm">Contact</a>
          <a href="#" className="hover:underline text-sm">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
