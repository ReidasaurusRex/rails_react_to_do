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
    this.props.onItemSubmit({to_do_item: {title: title, description: description}});
    this.setState({title: '', description: ''});
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
        <input type="submit" value="Post"/>
      </form>
    )
  }
});
