import { Link } from "react-router";

function NotFoundPage() {
  return (
    <>
      <div>
        <h1>this page dosent exsistttttttttttttt</h1>
      </div>
      <Link to={"/"}>
        <button> go back home</button>
      </Link>{" "}
    </>
  );
}
export default NotFoundPage;
