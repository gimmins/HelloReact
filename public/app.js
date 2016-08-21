  render: function () {
    var { name, message } = this.props;
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Hello ", name), 
        React.createElement("p", null, message)
      )
    );
  }
})

var GreeterForm = React.createClass ({displayName: "GreeterForm",
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
      React.createElement("form", {onSubmit:  this.onFormSubmit}, 
        React.createElement("div", null, 
          React.createElement("input", {type: "text", ref: "name"})
        ), 
        React.createElement("div", null, 
          React.createElement("textarea", {ref: "message"})
        ), 
        React.createElement("div", null, 
          React.createElement("button", null, "Submit")
        )
      )
    );
  }
})

var Greeter = React.createClass({displayName: "Greeter",
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
      React.createElement("div", null, 
        React.createElement(GreeterMessage, {name: name, message: message}), 
        React.createElement(GreeterForm, {onNewFormData: this.handleNewFormData})
      )
    );
  }
});

ReactDOM.render(
  React.createElement(Greeter, null),
  document.getElementById('app')
);