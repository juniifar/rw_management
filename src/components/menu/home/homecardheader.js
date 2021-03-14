const HomeCardHeader = () => {
    return(
        <div className="py-3">
          <div className="card text-center">
            <div className="card-header">
              Featured
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer text-muted">
              2 days ago
              <a href={process.env.PUBLIC_URL + 'apk/app-release-unsigned.apk'}>APK Download</a>
            </div>
          </div>
        </div>
    );
};

export default HomeCardHeader;