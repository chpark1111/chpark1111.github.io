import React from 'react'
import './components.css';

function Footer() {
  return (
		<footer className="footer">
			<div className="footer-content">
				<p>
					© 2024–{new Date().getFullYear()} Chanhyeok Park. All rights reserved. <br/>
					This website was designed by Chanhyeok and built with React.
				</p>
			</div>
		</footer>
  );
}

export default Footer;
