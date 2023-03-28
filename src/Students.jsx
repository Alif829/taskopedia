function Students(props) {
  return (
    <div className="container p-4">
      <div className="row">Students Enrolled</div>
      <div className="row border">
        <div className="col-2">
          <img
            src={`https://ui-avatars.com/api/?name=${props.name}`}
            className="w-100"
          ></img>
        </div>
        <div className="col-10">
          {props.name}
          <br />
          experience={props.exp}
        </div>
      </div>
    </div>
  );
}
export default Students;
