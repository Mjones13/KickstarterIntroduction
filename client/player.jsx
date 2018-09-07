const Player = props => (
  <div className="player-box">
    <iframe width="740" height="440" src={props.player.source}></iframe>
    <br />
    <span id="under-player-buttons"><a href=""><i className="fab fa-kickstarter playlink"></i>Project We Love</a><a href=""><i className="far fa-compass playlink"></i>Publishing</a><a href=""><i className="fas fa-map-marker-alt playlink"></i>{props.player.location}</a></span>
  </div>
)

export default Player;