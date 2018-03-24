import React, { Component } from 'react';
import classNames from 'classnames';
import FlipMove from 'react-flip-move';
import propTypes from 'prop-types';

class Items extends Component {
    delete = (key) => {
      this.props.delete(key);
    }

    okItem = (key) => {
      this.props.okItem(key);
    }

    createTasks = tasks => (
      <div key={tasks.key} className="task">
        <li key={tasks.key} className={classNames({ 'ok-li': tasks.completed })}>{tasks.text}</li>
        <button
          className={classNames({
        'glyphicon glyphicon-ok': true,
        'ok-btn glyphicon glyphicon-ok': tasks.completed,
      })}
          onClick={() => this.okItem(tasks.key)}
        />
        <button
          className="glyphicon glyphicon-remove"
          onClick={() => this.delete(tasks.key)}
        />
      </div>
    );

    render() {
      const todoEntries = this.props.entries;
      const listItems = todoEntries.map(this.createTasks);

      return (
        <ul className="ul">
          <FlipMove duration={250} easing="ease-out">
            {listItems}
          </FlipMove>
        </ul>
      );
    }
}

Items.propTypes = {
  delete: propTypes.func.isRequired,
  okItem: propTypes.func.isRequired,
  entries: propTypes.arrayOf(propTypes.shape({
    text: propTypes.string,
    key: propTypes.number,
    completed: propTypes.bool,
  })),
};
Items.defaultProps = {
  entries: [],
};

export default Items;
