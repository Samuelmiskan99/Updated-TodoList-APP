import PropTypes from 'prop-types';

function PlaceContentCenter({ children }) {
    return (
        <div className='bg-black '>
            <div className='bg-violet-900/20 min-h-screen flex items-center justify-center antialiased tracking-   '>
                <div className='max-w-lg w-full flex items-center justify-center gap-2'>{children}</div>
            </div>
        </div>
    );
}

PlaceContentCenter.propTypes = {
    children: PropTypes.node,
};

export default PlaceContentCenter;
