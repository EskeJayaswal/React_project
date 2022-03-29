import Button from "./button"

export default function InputField (props) {

    return(
        <div className="header-elements">
            <form >
                <div className="form-group">
                    <input type="text" className="form-control" id="inputField" placeholder="Search for a ´{food}´"></input>
                    <br/>
                    <Button/>
                </div>
            </form>
        </div>
        
    )

}