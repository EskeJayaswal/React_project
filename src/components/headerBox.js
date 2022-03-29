import CheckBoxes from "./checkBoxes"
import InputField from "./inputField"

export default function HeaderBox (props) {

    return (
    <div className="header-box border border-dark rounded" id="header">
        <h2 className="header-title">Pick A Beer To Go With Tonights Dinner</h2>
        <CheckBoxes/>
        <InputField/>
    </div>
    )

}