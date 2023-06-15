
const Error = ({children}) => {
  return (
    <div className='bg-red-700 mt-8 w-96 mx-auto py-2'>
        <p className='font-black text-xl text-white text-center'>{children}</p>
    </div>
  )
}

export default Error