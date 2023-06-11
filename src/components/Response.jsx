import PropTypes from "prop-types";

const Response = ({ message }) => {
  return (
    <li className="bg-slate-800 text-white p-4">
      <h5 className="font-bold">Message:</h5>
      <p className="text-slate-200 mt-2">{message.content}</p>
      <p className="text-sm mt-4 text-slate-400">{message.created}</p>
    </li>
  );
};

Response.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }).isRequired,
};

export default Response;
