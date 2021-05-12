import React from 'react';
import {Form} from './Form';
import {getPeopleList} from '../api/people';

export class PeopleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    };
  }
  updateComponent(name) {

    getPeopleList(name)
      .then(({ data })=> {
        this.setState(
          { array: data.results }
        );
      })
      .catch((err)=> {})
  }

  componentDidMount() {
    this.updateComponent('')
  }

  render() {
    return(
      <>
        <Form callback = {this.updateComponent} />

        <div className="table-responsive">
          <table className="table table-sm table-inverse">
            <thead>
            <tr>
              <th>name</th>
              <th>birth_year</th>
            </tr>
            </thead>
            <tbody>
            {this.renderProjects()}
            </tbody>
          </table>
        </div>

      </>
    );
  }

  renderProjects = () => {
    return this.state.array.map((projectOpts, name) => {
      return (
        <tr className="bg-light">
          <td>{projectOpts.name}</td>
          <td>{projectOpts.birth_year}</td>
        </tr>
      );
    });
  }
}
