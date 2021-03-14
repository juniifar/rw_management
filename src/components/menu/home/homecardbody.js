import HomeCardContent from "./homecardbody/homecardcontent";

const HomeCardBody = () => {
    return(
        <div className="row gx-3 gy-3 py-3">
          <HomeCardContent title="Ketua" content="Bapak Udin Udin"/>
          <HomeCardContent title="Bendahara" content="Bapak Udins Udins"/>
          <HomeCardContent title="Sekretaris" content="Bapak Uding Uding"/>
        </div>
    );
};

export default HomeCardBody;