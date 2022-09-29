import React from 'react';
class App extends React.Component {
  state = {
    name: '',
    number: '',
  };
  changeName = e => {
    // console.log(e.target.value);
    // this.setState({ name: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };
  handlerForm = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handlerForm}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.changeName}
            />
          </label>
          <label htmlFor="">
            Number
            <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.changeName}
            />
          </label>

          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}

export default App;
