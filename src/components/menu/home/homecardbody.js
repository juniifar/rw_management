import HomeCardContent from "./homecardbody/homecardcontent";

const HomeCardBody = () => {
    return(
        <div className="row gx-3 gy-3 py-3">
          <HomeCardContent content=" This is some text within a card body1."/>
          <HomeCardContent content=" This is some text within a card body2."/>
          <HomeCardContent content=" This is some text within a card body3."/>
        </div>
    );
};

export default HomeCardBody;