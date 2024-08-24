import { Layout } from "antd";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className="text-center text-lg bg-gradient-to-r from-cyan-900  to-pink-800 text-white py-4">
      <div className="mb-4 flex justify-between">
        <div className="flex mt-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-white"
          >
            <FaInstagram />
          </a>
          <a href="mailto:someone@example.com" className="mx-4 text-white">
            <FaEnvelope />
          </a>
        </div>
        © 2024 Bike Rental. All Rights Reserved.{" "}
      </div>
    </AntFooter>
  );
};

export default Footer;
