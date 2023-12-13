export const ObjectivesComponent = ({objectives}) => {
    return (
        <div className="objectives_holder">
            {
                objectives.map(obj => {
                    <p className="objective">{obj}</p>
                })
            }
        </div>


    );
}