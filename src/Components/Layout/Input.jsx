import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Input = forwardRef(({ type = 'text', ...props }, ref) => (
   <input
      ref={ref}
      {...props}
      className='
        todo-input 
        bg-white/20 text-white border border-white/40 rounded-md p-2 mb-3 shadow-md focus:bg-white/30 focus:border-white/70 transition ease-in-out duration-200 '
      type={type}
   />
));

Input.displayName = 'input';

Input.propTypes = {
   type: PropTypes.string,
   value: PropTypes.string,
   onChange: PropTypes.func,
   isFocused: PropTypes.bool,
};

export default Input;
