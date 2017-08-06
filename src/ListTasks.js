import React from 'react'

class ListTasks extends React.Component {
    render() {
        console.log(this.props);
        return (
            <ul>
                {this.props.tasksProperty.map((singleTask) => (
                    <li key={singleTask.id}>{singleTask.task}</li>
                ))}
            </ul>
        )
    }
}

export default ListTasks