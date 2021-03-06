import React,{ Component } from 'react';
import IncomingReport from './IncomingReport';

export default class IncomingReports extends Component {
	state = {
		incomingReports : []
		}
	constructor(props){
		super(props);
	}
	componentDidMount(){ 
		this.setState({
			incomingReports : this.props.incomingReports
		})
		}
	componentWillReceiveProps(nextProps) {
		this.setState({incomingReports: nextProps.incomingReports});
	}
	shouldComponentUpdate(nextProps) {
		return this.state.incomingReports.length !== nextProps.incomingReports.length;
	}
	render(){
		const reports = this.state.incomingReports;
		return(
		<div>
		{ reports.map(report=> (<IncomingReport incomingReport={report} key={'incoming' + report.id}  onhandleShare={this.props.onShare}/>)) }
		</div>
		)
		}
	
	}
