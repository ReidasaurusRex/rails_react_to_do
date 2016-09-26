var ToDoItem = React.createClass({
  handleItemDestroy: function(id) {
    console.log(id);
    $.ajax({
      url: "/to_do_items/" + id.id,
      dataType: 'json',
      type: 'DELETE',
      data: id,
      success: function(data) {
        this.setState({data: data});
      }.bind(ToDoBox),
      error: function(xhr, status, err) {
        console.log(this.props.url, status, err.toString());
      }.bind(ToDoBox)
      // TODO: fix binds
    });
  },
  render: function() {
    return (
      <tr className="toDoItem">
        <td> {this.props.title} </td>
        <td> {this.props.description} </td>
        <td><DestroyItemButton id={this.props.id} onItemDestroy={this.handleItemDestroy} /></td>
      </tr>
    )
  }
});