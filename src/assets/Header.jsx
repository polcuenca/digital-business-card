export default function Header() {
    return(
        <div className="header">
            <img src="src\assets\pic.png" className="image"/>
            <h2 className="name">Paul Cuenca</h2>
            <h3 className="course">Computer Science Student</h3>
            <h4 className="school">University of St. La Salle</h4>
            <div className="buttons">
                <button type="button" className="btn-email"><i className="fa fa-envelope"></i>Email</button>
                <button type="button" className="btn-linkedin"><i className="fa fa-linkedin"></i>LinkedIn</button>
            </div>
        </div>
    )
}