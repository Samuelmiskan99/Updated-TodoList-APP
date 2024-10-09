import clsx from 'clsx';
import PropTypes from 'prop-types';

function Button(props) {
   const { className = 'bg-blue-600', text, children, type = 'submit' } = props;
   return (
      <button
         {...props}
         type={type}
         className={clsx(
            className,
            '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 w-full mb-4 h-15  bg-[#d53916] text-white font-bold text-2xl py-2 px-5 border-2 border-black rounded-lg shadow-[5px_5px_0px_#000] transition-all ease-in-out duration-300 hover:bg-white hover:text-[#61425c] hover:border-[#812727] hover:shadow-[5px_5px_0px_#812727] active:bg-[#102718] active:text-[#2fdf6d] active:translate-y-[4px]  '
         )}>
         {text || children}
      </button>
   );
}

// PropTypes validation
Button.propTypes = {
   className: PropTypes.string, // should be PropTypes.string
   text: PropTypes.string, // should be PropTypes.string
   children: PropTypes.node, // PropTypes.node for any renderable content
   type: PropTypes.oneOf(['submit', 'button']), // Restrict type to 'submit' or 'button'
};

export default Button;
