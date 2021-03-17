import { Component } from "react";
import { connect } from "react-redux";
import * as cons from "../../../constant/constant"

class HomeCardHeader extends Component {
  state = {
    counter: 0
  }

  render(){
    return(
      <div className="py-3">
        <div className="card text-center">
          <div className="card-header">
            Featured = {this.props.ctr}
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

            <button className="btn btn-primary col-md-12 py-3" onClick={this.props.onIncrementCounter} type="button">Increement</button>
          </div>
          <div className="card-footer text-muted">
            2 days ago
            <a href={process.env.PUBLIC_URL + 'apk/app-release-unsigned.apk'}>APK Download</a>
          </div>
         
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    ctr: state.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({type:cons.TYPE_INCREEMENT})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeCardHeader);