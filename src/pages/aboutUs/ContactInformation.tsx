import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const ContactInformation = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-pink-500 to-cyan-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Contact Information
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <div className="flex items-center mb-4">
              <MailOutlined className="text-pink-300 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Email Us
                </h3>
                <p className="text-gray-600">contact@bikerental.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <div className="flex items-center mb-4">
              <PhoneOutlined className="text-cyan-200 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <div className="flex items-center mb-4">
              <EnvironmentOutlined className="text-yellow-600 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Visit Us
                </h3>
                <p className="text-gray-600">123 Bike Lane, City, Country</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
