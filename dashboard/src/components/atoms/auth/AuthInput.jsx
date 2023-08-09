import React, { memo, useState } from "react";

import "./AuthInput.css";

function AuthInput({
  value,
  type,
  icon,
  placeholder,
  name,
  activeIcon,
  errorMessage,
  errorIcon,
}) {
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);
  const [inpVal, setInpVal] = useState(value);

  const inputHandler = (e) => {
    setInpVal(e.target.value);
  };
  const focusHandler = () => {
    if (!error) setActive(true);
  };

  const blurHandler = (e) => {
    setActive(false);
  };

  return (
    <div
      id='auth-input'
      className={`${active ? "active" : error ? "error" : null} w-full relative`}
    >
      <div className='flex items-center w-[100%] gap-[26px]'>
        <img src={error ? errorIcon : active ? activeIcon : icon} alt='icon' />
        <input
          value={inpVal}
          onChange={inputHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
          className='bg-transparent outline-none w-[100%]'
          placeholder={placeholder.toUpperCase()}
          name={name}
          type={type}
        />
      </div>

      {error && (
        <span className='absolute left-0 text-[12px] text-red-600 -bottom-[22px]'>
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default memo(AuthInput);
