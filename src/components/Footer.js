import React from "react";
import './Footer.css'

class Footer extends React.Component {
	render() {
		return (
			<div className="footer text-center bg-white">
				<div className="footer-container">
					<div className="row">
						<div className ="a_size">
							<a
								className="px-3"
								href="https://github.com/aashray138"
								target="_blank"
								rel="noopener noreferrer">
								<i className ='fab fa-github'/> 
							</a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<a
								href="https://www.linkedin.com/in/aashrayshrestha"
								target="_blank"
								rel="noopener noreferrer">
								<i className ='fab fa-linkedin'/> 
							</a>
						</div>
					</div>


                   <div className = "paddingDiv">
                   </div>

                    <div className = "bottom">
                        <h6> 2020 - Aashray Shrestha </h6>
                    </div>

					</div>
			</div>

		);
	}
}

export default Footer;
