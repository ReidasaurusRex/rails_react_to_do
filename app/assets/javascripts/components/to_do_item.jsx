var ToDoItem = React.createClass({
  handleDelete: function(e) {
    e.preventDefault();
    this.props.onItemDestroy(this.props.id);
  },
  render: function() {
    return (
      <tr className="toDoItem">
        <td> {this.props.title} </td>
        <td> {this.props.description} </td>
        <td><a href="#" onClick= {this.handleDelete}>X</a></td>
      </tr>
    )
  }
});