const HomeCardContent = (props) => {
    return(
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                {props.content}
                </div>
            </div>    
        </div>
    );
};

export default HomeCardContent;