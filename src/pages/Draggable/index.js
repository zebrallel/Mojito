import './style.scss';
import React, { Component } from 'react';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ value }) => <div className="tab">{value}</div>);
const SortableList = SortableContainer(({ items }) =>
  <div className="tabs">
    {items.map((item, idx) => <SortableItem key={idx} index={idx} value={item} />)}
  </div>
);

class DraggableDemo extends Component {
  state = {
    tabs: ['a', 'b', 'c', 'd', 'e', 'f']
  };

  onSortEndHandler({oldIndex, newIndex}){
    this.setState({
      tabs : arrayMove(this.state.tabs, oldIndex, newIndex)
    });
  }

  render() {
    const { tabs } = this.state;

    return (
      <div id="Draggable" className="m-page">
        <div className="m-title">Draggable Demo</div>
        <SortableList axis="xy" items={tabs} onSortEnd={this.onSortEndHandler.bind(this)} />
      </div>
    );
  }
}

export default DraggableDemo;
