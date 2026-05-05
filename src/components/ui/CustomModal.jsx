const CustomModal = ({ show, onClose, title, children, onSave }) => {
  if (!show) return null;

  return (
    <>
      <div className="modal fade show d-block w-100" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered w-100 m-auto">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body">{children}</div>

            <div className="modal-footer">
              {onSave && (
                <button className="btn btn-primary" onClick={onSave}>
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default CustomModal;
