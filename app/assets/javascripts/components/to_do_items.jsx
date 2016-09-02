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
        <ToDoItemForm onItemSubmit={this.handleItemSubmit} />
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
  getInitialState: function() {
    return {title: '', description: ''};
  },
  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
  },
  handleDescriptionChange: function(e) {
    this.setState({description: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var title = this.state.title.trim();
    var description = this.state.description.trim();
    if (!title || !description) {
      return;
    }
    this.props.onItemSubmit({to_do_item: {title: title, description: description}})
    this.setState({title: '', description: ''})
  },
  render: function() {
    return (
      <form className="toDoForm" onSubmit={this.handleSubmit}>
        <input
          type="text" 
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <input 
          type="text" 
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
        <input type="submit" placeholder="Post" />
      </form>
    )
  }
})