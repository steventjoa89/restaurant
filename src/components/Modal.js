import { isNullOrBlank } from "../utils/stringUtils";

const Modal = ({
  isOpen,
  onClose,
  isMobileModal = false,
  title = "",
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  const [body = null, footer = null] = children;

  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 overflow-hidden flex ${
            isMobileModal && "lg:hidden"
          } items-center justify-center z-50`}
        >
          <div
            className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={onClose}
          ></div>
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all w-11/12 sm:w-3/5 max-h-[95vh] sm:max-h-[95vh] flex flex-col">
            <div
              className={`bg-white ${
                isNullOrBlank(title) ? "px-5 pt-3" : "p-5"
              } flex-shrink-0`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{title}</h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="overflow-y-auto p-5 flex-grow">{body}</div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              {footer}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
