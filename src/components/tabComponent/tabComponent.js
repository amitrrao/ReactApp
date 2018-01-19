import React from 'react';
import MyFirstTab from './MyFirstTab'

export let tabs = [{
  name: 'My First Space',
  id: '1',
  content: <MyFirstTab />
}, {
  name: 'My Second Space',
  id: '2',
  content: 'Not Availabe'

}, {
  name: 'My Third Space',
  id: '3',
  content: 'Not Availabe'
}];
// const tabs = [{
//   name: 'My First Space',
//   id: '1',
// }, {
//   name: 'My Second Space',
//   id: '2',

// }, {
//   name: 'My Third Space',
//   id: '3',
// }];

// export const App = (props) => {
//   return (
//     <Tabs selected={props.firstSelect || 0}>
//     {props.tabs.map(tab =>
//       <Pane label={tab.name}>{tab.content}</Pane>)
//     }
//     </Tabs>
//   );
// }
export const App = (props) => {
  return (
    <Tabs selected={props.firstSelect || '1'} />
  );
}


// Pane is most likely not needed
// const Pane = (props) => {
//   return (
// 	<div>
// 		{props.children}
// 	</div>
// 	);
// }


// class Tabs extends React.Component {
//   constructor(props) {
//     super(props);  

//     this.state = { selected: this.props.selected };
//   }

//   _renderTitles() {
//     function labels(child, idx) {
//       let activeClass = (this.state.selected === idx ? 'is-active' : '');
//       return (
//         <li role="tab" key={idx}>
//           <a className={activeClass}  onClick={this.onClick.bind(this, idx)} href="#">
//             {child.props.label}
//           </a>
//         </li>
//       );
//     }

//    return (
//       <ul className="tabs__labels" role="tablist">
//         {this.props.children.map(labels.bind(this))}
//       </ul>
//     );
//   }

//   onClick(index, event) {
//     event.preventDefault();
//     this.setState({
//       selected: index
//     });
//   }

//   render() {
//     return (
//       <div className="tabs">
//         {this._renderTitles()}
//         <div className="tabs__content">
//           {this.props.children[this.state.selected]}
//         </div>
//       </div>);
//   }
// }

class Tabs extends React.Component {
  constructor(props) {
    super(props);  

    this.state = {
      selected: this.props.selected,
      spaces: {
        fields: {},
        sys: {}
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(id, event) {
    event.preventDefault();
    // if(id != 1) {
    //   alert("Not Availabe")
    // }
    fetch("/spaces/yadj1kx9rmg0/").then(response => {
      response.json().then(spaces => {
        this.setState({
          spaces: spaces,
          selected: id,
        });
      });
    })
  }

  renderTitles(selected, handleClick) {
    return tabs.map(function(tab, idx) {
      const handler = handleClick.bind(this, tab.id);
      let activeClass = (selected === tab.id ? 'is-active' : '');
      return (
        <li role="tab" key={tab.id}>
          <button className={activeClass}  onClick={handler}>
            {tab.name}
          </button>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="tabs">
        <ul className="tabs-labels" role="tablist">
          {this.renderTitles(this.state.selected, this.handleClick)}
        </ul>       
        <div className="tabs-content">
          <MyFirstTab spaces={this.state.spaces}/>
        </div>
      </div>);
  }
}
