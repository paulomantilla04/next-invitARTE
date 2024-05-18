
const User = ({ params }) => {

    const routeName = params.name;
    const name = decodeURIComponent(routeName.replace(/\_/g, " "));
    const capitalizeName = (str: string) => {
        return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Hello, {capitalizeName(name)}</h1>
            <p className="text-lg">This is a user page</p>
        </div>
    );
    }

export default User;