import PropTypes from 'prop-types';

function Card({ children }) {
   return <div className='backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 bg-white/20  border-white/40 '>{children}</div>;
}

Card.propTypes = {
   children: PropTypes.node.isRequired, // Adding validation for children prop
};

function Title({ children }) {
   return (
      <div className={'border-b mb-4'}>
         <h1 className=' p-2 text-3xl font-bold text-center font-poppins tracking-wider text-gray-100'>{children}</h1>
      </div>
   );
}

Title.propTypes = {
   children: PropTypes.node.isRequired, // Adding validation for children prop
};

function Footer({ children }) {
   return (
      <div className={'p-4 flex justify-center'}>
         <span className='text-center text-sm text-white'>{children}</span>
      </div>
   );
}

Footer.propTypes = {
   children: PropTypes.node.isRequired, // Adding validation for children prop
};

function Body({ children }) {
   return <div className={'leading-relaxed p-4 flex flex-col items-center space-y-4'}>{children}</div>;
}

Body.propTypes = {
   children: PropTypes.node.isRequired, // Adding validation for children prop
};

Card.title = Title;
Card.body = Body;
Card.footer = Footer;

export default Card;
