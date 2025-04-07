import './header.scss';

const Header = () => {
	return (
		<div className="flex center align-center widthFull container">
			<div className="flex center align-center gap20 containerHeader">
				<div className="flex center align-center gap20 header">
					<button>About</button>
					<button>projects</button>
					<button>Contact</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
