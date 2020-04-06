// TODO

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={['Cucumber', 'Kale']}/>
  </div>
)

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
      )}
  </ul>
);


// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//   </ul>
// );

class GroceryListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hover: false
    };
  }

  onMouseEnter() {
    this.setState({
      hover: true
    });
  }

  onMouseLeave() {
    this.setState({
      hover: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
