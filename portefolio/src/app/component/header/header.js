import "./header.scss";

const Header = () => {
    return (
        <div className="flex center align-center gap20 widthFull ">
            <div className="flex center align-center gap20 width50 header ">
                <button>About</button>
                <button>projects</button>
                <button>Contact</button>
            </div>
        </div>
    );
};

export default Header;
