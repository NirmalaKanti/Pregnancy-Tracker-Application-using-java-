import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-400 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">© 2022 Pruoo Healthcare Technologies Private Limited</h2>
          <ul className="flex space-x-4 flex items-center">
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/refund-policy" className="hover:underline">Refund Policy</a></li>
            <li><a href="/terms-conditions" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-4 md:mt-0">
  <a href="#"><img src="https://cdn3.iconfinder.com/data/icons/remixicon-logos/24/instagram-fill-64.png" alt="Instagram" className="h-6 filter invert" /></a>
  <a href="#"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-64.png" alt="LinkedIn" className="h-6 filter invert" /></a>
  <a href="#"><img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Youtube_glyph_svg-64.png" alt="YouTube" className="h-6 filter invert" /></a>
  <a href="#"><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-64.png" alt="Facebook" className="h-6 filter invert" /></a>
  <a href="#"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2421/512/Twitter-64.png" alt="Twitter" className="h-6 filter invert" /></a>
  <a href="#"><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Pinterest2_svg-64.png" alt="Pinterest" className="h-6 filter invert" /></a>
</div>






      </div>
    </footer>

  );
}

export default Footer;
