function AuthButton({ children }) {
  return (
    <button className='text-[#F3F5F6] mt-[20px] w-full font-semibold uppercase bg-color-3 rounded-[15px] h-[60px] flex-center'>
      {children}
    </button>
  );
}

export default AuthButton;
