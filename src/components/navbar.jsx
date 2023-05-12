import React from 'react';

import Algorithms from './navbar-components/algorithms';
import Size from './navbar-components/size';
import Speed from './navbar-components/speed';

// Navbar Component
class Navbar extends React.Component {
    state = {
        Algorithms: [
			{ value: 1, type: 'Bubble Sort' },
			{ value: 2, type: 'Selection Sort' },
			{ value: 3, type: 'Insertion Sort' },
			{ value: 4, type: 'Merge Sort' },
			{ value: 5, type: 'Quick Sort' },
            { value: 6, type: 'Heap Sort' }		],
		lengths: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
		speeds: {"slow": 1.00, "medium": 10.00, "fast": 30.00, "very fast": 100.00}
    };

    render() {
        return (
            <div className="navbar bottom-fixed" id="navbar">
                <Algorithms 
                    onChange = {this.props.onChange}
                    algorithms = {this.state.Algorithms}
                />
                <Size 
                    onChange = {this.props.onChange}
                    lengths = {this.state.lengths}
                />
                <Speed 
                    onChange = {this.props.onChange}
                    speeds = {this.state.speeds}
                />
                <button id="start" onClick = {() => this.props.start()} disabled={this.props.running}>Start</button>
                <button id="random" onClick = {() => this.props.newList(1)} disabled={this.props.running}>Random</button>
            </div>
        );
    }
}
 
export default Navbar;