import { useState } from "react";

const SignUpForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    console.log(name, email, password)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isChecked){
            return;
        }

        const user = {
            name: name,
            email: email,
            password: password
        }
        console.log(user)
        setIsSubmit(true)
    }

    return (
      <>
        <div className="bg-purple-700 w-full h-screen flex flex-col justify-center items-center px-5">
            <form onSubmit={(e) => handleSubmit(e)} className="bg-white p-10 rounded-lg w-full md:w-4/5 lg:w-2/5 mx-auto">

                <h2 className="mb-5 text-center text-4xl md:text-5xl font-bold text-purple-700">Signup Form</h2>
                <label>Name
                    <input onChange={(e) => setName(e.target.value)} className="block w-full border border-gray-600 my-3 p-2 rounded-md" type="text" placeholder="Enter your name" required/></label>

                <label>Email
                    <input onChange={(e) => setEmail(e.target.value)} className="block w-full border border-gray-600 my-3 p-2 rounded-md" type="Email" placeholder="Enter your email" required/></label>

                <label>Password
                    <input onChange={(e) => setPassword(e.target.value)} className="block w-full border border-gray-600 my-3 p-2 rounded-md" type="password" placeholder="Enter your password" required/></label>

                <input onChange={(e) => setIsChecked(e.target.checked)} className="size-5 me-2" type="checkbox"/><span className="text-sm md:text-[16px]">Do you agree with our terms and conditions?</span>
                <button className="mt-2 block py-2 text-lg font-bold text-white px-8 bg-purple-700 rounded-lg">Sign Up</button>
            </form>
        </div>
        <div className={`${isSubmit ? 'flex' : 'hidden'}`}>
            <div className="fixed top-0 w-full h-screen bg-purple-700 flex flex-col justify-center items-center px-5">
                <div className="w-full md:w-4/5 lg:w-1/2 p-10 bg-purple-300 space-y-3 rounded-xl">
                    <h1 className=" text-center font-bold text-2xl md:text-3xl mb-6 text-purple-700">Submitted The Form Successfully</h1>
                    <p className="text-center text-xl font-semibold">Name: <small>{name}</small></p>
                    <p className="text-center text-xl font-semibold">Email: <small>{email}</small></p>
                    <p className="text-center text-xl font-semibold">Password: <small>{password}</small></p>
                </div>
            </div>
        </div>
      
      </>
    );
};

export default SignUpForm;