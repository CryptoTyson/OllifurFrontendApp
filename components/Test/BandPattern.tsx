import React from "react";
import rightBand3 from "../../public/images/decoration/Right band 3.png"
import rightBand1 from "../../public/images/decoration/Right band 1.png"
import rightBand2 from "../../public/images/decoration/Right band 2.png"
import leftBand1 from "../../public/images/decoration/Left band 1.png"
import leftBand2 from "../../public/images/decoration/Left band 2.png"

export const BandPattern = (): JSX.Element => {
  return (
    <div style={{"backgroundColor":"transparent","display":"flex","flexDirection":"row","justifyContent":"center","width":"100%"}}>
      <div style={{"border":"0px none","height":"64px","width":"1440px"}}>
        <div style={{"height":"64px","left":"0","top":"0","width":"1440px"}}>
          <div style={{"height":"430px","position":"relative"}}>
            <img style={{"height":"129px","left":"101%","position":"absolute","top":"104px","width":"120px"}} alt="Right band" src={rightBand3} />
            <img style={{"height":"156px","left":"67%","position":"absolute","top":"67px","width":"600px"}} alt="Right band" src={rightBand2} />
            <img style={{"height":"129px","left":"80%","position":"absolute","top":"0","width":"422px"}} alt="Right band" src={rightBand1} />
            <img style={{"height":"129px",right:"82%","position":"absolute","top":"208px","width":"387px"}} alt="Left band" src={leftBand1} />
            <img style={{"height":"129px",right:"94%","position":"absolute","top":"300px","width":"218px"}} alt="Left band" src={leftBand2} />
          </div>
        </div>
      </div>
    </div>
  );
};