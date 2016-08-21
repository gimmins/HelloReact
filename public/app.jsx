var GreeterMessage = React.createClass({
  render: function () {
    var { name, message } = this.props;
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
})

var GreeterForm = React.createClass ({
  onFormSubmit: function (e) {
    // Prevent browser from refreshing
    e.preventDefault();

    var updates = {
      name: this.refs.name.value,
      message: this.refs.message.value
    };

    if (updates.name.length > 0 || updates.message.length > 0) {
      this.refs.name.value = '';
      this.refs.message.value = '';
      this.props.onNewFormData(updates);
    }
  },

  render: function () {
    return (
      <form onSubmit={ this.onFormSubmit }>
        <div>
          <input type="text" ref="name"/>
        </div>
        <div>
          <textarea ref="message"/>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
})

var Greeter = React.createClass({
  getInitialState: function () {
    return {
      name: 'Daniel Gretler',
      message: 'This is the default message'
    }
  },

  handleNewFormData: function (data) {
    this.setState({
      name: data.name.length > 0 ? data.name : this.state.name,
      message: data.message.length > 0 ? data.message : this.state.message
    })
  },

  render: function () {
    var { name, message } = this.state;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewFormData={this.handleNewFormData}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
