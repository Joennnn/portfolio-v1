import { Fragment } from "react";
import "./index.scss";
import 'font-awesome/css/font-awesome.min.css';

export function Overlay({ isOpen, onClose, children }) {
  return (
    <Fragment>
      {isOpen && (
        <div className="overlay">
          <div className="overlay__background" onClick={ onClose }></div>
          <div className="overlay__container">
            <div className="overlay__controls">
              <button
                className="overlay__close"
                type="button"
                onClick={ onClose }
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
            { children }
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Overlay;