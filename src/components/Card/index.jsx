import "../Card/main.css";
const teams = [
  { name: "rakesh" },
  {
    name: "pratim",
    bio: "Lorem ipsum",
    position: "frontend intern",
    // icon: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC5603AQEI-9lp7YjABg%2Fprofile-displayphoto-shrink_200_200%2F0%2F1590574474755%3Fe%3D1628121600%26v%3Dbeta%26t%3DDs3kgAH0H-nvsNvg8zEzbBAlM3XtFgDRLODH_deYmhA&imgrefurl=https%3A%2F%2Fnp.linkedin.com%2Fin%2Fpratim-bhattarai-6918891a7&tbnid=lZCIz7--yNVrNM&vet=12ahUKEwjmmc_9hZ7xAhWvGrcAHeexDvkQMygAegQIARA3..i&docid=salLvJ38eiQczM&w=200&h=200&q=pratim%20bhattarai&ved=2ahUKEwjmmc_9hZ7xAhWvGrcAHeexDvkQMygAegQIARA3",
  },
  {
    name: "manita",
    bio: "Lorem ipsum",
    position: "frontend intern",
    icon: "https://ombryo.com/wp-content/uploads/2020/09/Manita-Poudel.jpg",
    age: "30",
  },
  {
    name: "subash",
    bio: "Lorem ipsum",
    position: "Backend developer",
    icon: "https://ombryo.com/wp-content/uploads/2020/09/Subash-Timilasina.jpg",
    age: "50",
  },
  {
    name: "asshis",
    bio: "Lorem ipsum",
    position: "frontend developer",
  },
  {
    name: "Anup",
    bio: "Lorem ipsum",
    position: "Project manager",
    icon: "https://ombryo.com/wp-content/uploads/2020/09/image-500x500.png",
    age: "30",
  },
  {
    name: "sandesh",
    bio: "Lorem ipsum",
    position: "frontend developer",
  },
];
const Card = () => {
  return (
    <div className="row">
      {teams.map((x) => (
        <div className="col-lg-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={`https://robohash.org/${x.name}.png?set=set5`}
              className="card-img-top"
              alt={x.name}
            ></img>
            <div className="card-body">
              <h5 className="card-title">{x.name}</h5>
              <p className="card-text">{x.position}</p>
              <p className="card-text">{x.bio}</p>
              <a href="#" className="btn btn-primary">
                About
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
