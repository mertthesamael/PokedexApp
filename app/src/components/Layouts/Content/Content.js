import "./page-content.css"

const Content= (props) => {

    return (
        <div className="page-content">{props.children}</div>
    )

}


export default Content;