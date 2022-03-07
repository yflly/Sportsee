import "../Name/Name.css";

function Name() {
  return (
    <section className="nameSection">
      <h1>
        Bonjour <span className="nameColor">{this.props.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
}

export default Name;

/*function Name(props) {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser(props.id).then((user) => {
      setUser(user);
    });
  }, [props.id]);
  console.log(user.data.userInfos.firstName);
  return (
    <section className="nameSection">
      <h1>
        Bonjour <span className="nameColor">{user}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
}

Name.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default Name;*/
