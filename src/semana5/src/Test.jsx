class PeopleList extends React.Component{
  constructor(props){
    super(props);
    this.state = { filter: '' }; //Add state
  }
  handleChange(value, e){
    //Handle Change Event Input
    console.log('-->', value);
    this.setState({filter: value}); //Set State
  }
  render(){
    const list = this.props.list.map(item =>
      <ListItem key={item.id} id={item.id} name={item.name} />
    );

    return (
      <div>
        <Input hChange={this.handleChange.bind(this)} />
        <ul>{list}</ul>
      </div>
    );
  }
}