const HomeCardContent = (props) => {
    return(
        <div className="col-md-4">
            <div className="card">
                <div className="card-header text-center">
                    {props.title}
                </div>
                <div className="card-body">
                    <p className="card-text text-center">
                        {props.content}
                    </p>
                </div>
            </div>    
        </div>
    );
};

export default HomeCardContent;