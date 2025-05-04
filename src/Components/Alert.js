import React from 'react';

export default function Alert(props) {
  const capitalize = (word) => {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div style={{ height: '50px' }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
          style={{
            backgroundColor: props.mode === 'dark' ? '#333' : '',
            color: props.mode === 'dark' ? 'white' : '',
            border: props.mode === 'dark' ? '1px solid #555' : '',
          }}
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          {props.onDismiss && (
            <button
              type="button"
              className="btn-close"
              onClick={() => props.onDismiss()}
              aria-label="Close"
              style={{ filter: props.mode === 'dark' ? 'invert(1)' : 'none' }}
            ></button>
          )}
        </div>
      )}
    </div>
  );
}
