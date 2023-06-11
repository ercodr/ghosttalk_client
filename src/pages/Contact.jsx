import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-[#BB33C2] to-blue-500 min-h-screen flex justify-center items-center p-4 pt-12">
      <div className="bg-white shadow-2xl w-full md:max-w-md flex flex-col gap-4 items-center rounded-lg p-8 text-slate-500">
        <h3 className="text-2xl font-bold text-slate-700 text-center p-2 rounded">
          Get In Touch
        </h3>
        <div>
          You can contact us using the following social media platforms listed
          down below:
          <ul className="mt-4">
            <li className="flex items-center gap-4">
              <FaTwitter /> Twitter: @ghosttalk
            </li>
            <li className="flex items-center gap-4">
              <FaFacebookF /> Facebook: @ghosttalk
            </li>
            <li className="flex items-center gap-4">
              <MdEmail /> Email: ghosttalk@outlook.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
