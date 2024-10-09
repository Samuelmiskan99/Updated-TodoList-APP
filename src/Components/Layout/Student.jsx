import PropTypes from 'prop-types';
function Student(props) {
  const { isName, isAge, IsStudent } = props;

  function Title({ children }) {
    return <h1 className='flex items-center justify-center gap-x-2 bg-pink-600 text-white px-4 py-2 rounded-lg shadow-md'>{children}</h1>;
  }
  return (
    <div className='text-xl text-white mt-5 flex flex-col sm:flex-row gap-4 items-center justify-center font-semibold'>
      <Title>Name: {isName}</Title>
      <Title>Age: {isAge}</Title>
      <Title>IsStudent: {IsStudent ? 'Yes' : 'No'}</Title>
    </div>
  );
}
Student.propTypes = {
  isName: PropTypes.string,
  isAge: PropTypes.number,
  IsStudent: PropTypes.bool,
  children: PropTypes.node,
};
export default Student;
