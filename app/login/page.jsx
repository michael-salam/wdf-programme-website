const Login = () => {
    return (
        <form className="w-[90%] md:w-3/5 mx-auto my-[10vh]">
            <h1 className="mb-8">Login to leave a review</h1>
            <div className="formgroup">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
            </div>
            <div className="formgroup">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
            </div>
            <button className="btn btn-pri-dark p-4 mt-4 w-full">Log in</button>
        </form>
    )
}

export default Login