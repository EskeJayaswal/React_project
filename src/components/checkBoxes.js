
export default function CheckBoxes (props) {

    return (
        <div className="header-elements">
             <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                 <label className="form-check-label" for="inlineRadio1">Food</label>
             </div>
             <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option1"></input>
                 <label className="form-check-label" for="inlineRadio2">Beer</label>
             </div>
        </div>

    )
}