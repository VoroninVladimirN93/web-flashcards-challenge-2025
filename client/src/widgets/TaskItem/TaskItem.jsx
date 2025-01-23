/* eslint-disable react/prop-types */

function TaskItem({ task }) {
    return (
        <div className="card mt-3" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">{task.description}</p>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Is done
                </label>
                <a href="#" className="btn btn-primary">In task</a>
            </div>
        </div>
    );
}

export default TaskItem;