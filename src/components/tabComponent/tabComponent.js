import React from 'react';
import MyFirstTab from './MyFirstTab'

export let tabs = [{
  name: 'My First Space',
  content: <MyFirstTab />
}, {
  name: 'My Second Space',
  content: 'Not Availabe'

}, {
  name: 'My Third Space',
  content: 'Not Availabe'
}];

export const App = (props) => {
  return (
    <Tabs selected={props.firstSelect || 0}>
    {props.tabs.map(tab =>
      <Pane label={tab.name}>{tab.content}</Pane>)
    }
    </Tabs>
  );
}

const Pane = (props) => {
  return (
	<div>
		{props.children}
	</div>
	);
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);  

    this.state = { selected: this.props.selected };
  }

  _renderTitles() {
    function labels(child, idx) {
      let activeClass = (this.state.selected === idx ? 'is-active' : '');
      return (
        <li role="tab" key={idx}>
          <a className={activeClass}  onClick={this.onClick.bind(this, idx)} href="#">
            {child.props.label}
          </a>
        </li>
      );
    }

   return (
      <ul className="tabs__labels" role="tablist">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  }

  onClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  }

  render() {
    return (
      <div className="tabs">
        {this._renderTitles()}
        <div className="tabs__content">
          {this.props.children[this.state.selected]}
        </div>
      </div>);
  }
}