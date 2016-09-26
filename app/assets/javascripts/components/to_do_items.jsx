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
        console.log(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleItemSubmit: function(item) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: item,
      success: function(data) {
        this.setState({data: data});
      }.bind(this), 
      error: function(xhr, status, err) {
        console.log(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleItemDestroy: function(id) {
    $.ajax({
      url: this.props.url + "/" + id,
      type: 'DELETE',
      data: id,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadItemsFromServer();
  },
  render: function() {
    var self = this;
    var toDoItems = this.state.data.map(function(item) {
      return (
        <ToDoItem title={item.title} description={item.description} key={item.id} id={item.id} onItemDestroy={self.handleItemDestroy}/> 
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
        <ToDoItemForm onItemSubmit={this.handleItemSubmit} />
      </div>
    );
  }
});