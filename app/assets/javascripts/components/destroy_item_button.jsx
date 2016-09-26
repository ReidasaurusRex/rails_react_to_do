var DestroyItemButton = React.createClass({
  handleDestroy: function(e) {
    e.preventDefault();
    this.props.onItemDestroy({id: this.props.id});
  },
  render: function() {
    return (
      <form className="destroyItemButton" onSubmit={this.handleDestroy}>
        <input type="submit" value="X"/>
      </form>
    )
  }
});