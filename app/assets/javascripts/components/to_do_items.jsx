var ToDoBox = React.createClass({
  getInitialState: function() {
    return  {data: []};
  },
  loadItemsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(this.props.url, stats, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadItemsFromServer();
    setInterval(this.loadItemsFromServer, this.props.pollInterval);
  },
  render: function() {
    var toDoItems = this.state.data.map(function(item) {
      return (
        <ToDoItem title={item.title} description={item.description} key={item.id} /> 
      );
    });
    return (
      <div className="toDoBox">
        <h1>To Do Box</h1>
        <table>
          <thead>
            <tr>
              <td> Title </td>
              <td> Description </td>
            </tr>
          </thead>
          <tbody>
            {toDoItems}
          </tbody>
        </table>
      </div>
    );
  }
});

var ToDoItem = React.createClass({
  render: function() {
    return (
      <tr className="toDoItem">
        <td> {this.props.title} </td>
        <td> {this.props.description} </td>
      </tr>
    )
  }
});

// var ToDoItemForm = React.createClass({
  
// })