import Search from "../component/CreatePlaylist/Search"

function CreatePlaylist(props) {
    return  (
        <div>
        <Search token={props.token}/>

        </div>
    )
}

export default CreatePlaylist;