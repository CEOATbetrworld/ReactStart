import React from "react";

export class Home extends React.Component {
	
       constructor(props){
			super();
			this.state = {
                age: props.initialAge,
                status: 0
			};
			setTimeout(() => {
				this.setState({
					status: 1
				})
			},3000)
		}
		onMakeOlder(){
			this.setState({
				age: this.state.age + 1
			});
		}
	

	render(){
		return(
			<div>
			<p>We learn to Serve humanity</p>
			<p>Founder {this.props.name}({this.state.age})</p>
			<p>Status: {this.state.status}</p>
			<hr/>
			<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
			</div>
	    );
	}
}

