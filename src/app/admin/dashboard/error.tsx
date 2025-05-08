"use client"
// This is the Error page for the about route
// This error page handle both client and server side error

const Error = ({error, reset}) => {
    console.log(error);
  return (
    <>
    <div>Something went wrong!</div>
    <button onClick={() => {
        reset()
    }}>Try again</button>
    </>
    
  )
}

export default Error