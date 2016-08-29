var ToDoBox = React.createClass({
  getInitialState: function() {
    return  {data: []};
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

var ToDoItemForm = React.createClass({
  
})