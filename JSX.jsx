import React, {useState} from 'react';





return  (
  <>
      <button onClick={addGroup}>Add new group</button>
      <button onClick={addItem}>Add new item</button>
      <div className="container">
        {groups.map((group, groupIndex) => {
          // Iterate over the items in each group
          const items = groups.map((item, itemIndex) => {
            return(
              <div className="item" id={`item${item}`} draggable="true" onDragStart={(e) => drag(e, groupIndex, item)}>
                item {item}
                <button onClick={() => deleteItem(item, groupIndex)}>delete</button>
              </div>
            )
          })
          return (
            <div className="group" id={`group${groupIndex}`} onDrop={(e) => drop(e, groupIndex)} onDragOver={(e) => allowDrop(e)}>
              {items}
            </div>
          )
        })}
      </div>

  </>
)