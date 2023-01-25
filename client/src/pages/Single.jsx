import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import {Link} from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://i.stack.imgur.com/5Kgaq.jpg?s=256&g=1" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam dolore optio repellat voluptatum qui, aut veniam ea enim eius sed dolor quibusdam et voluptate dignissimos, consequatur facilis soluta quae minus. <br /><br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo earum quasi, a asperiores velit recusandae. Tempora quos distinctio vel. Odit facere veniam accusamus fugit dolor laudantium quidem suscipit? Quos, aliquid? <br /><br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam numquam culpa voluptas blanditiis aspernatur recusandae dolor? Doloremque dolores necessitatibus adipisci inventore optio totam minus voluptatum tempore! Deleniti laboriosam harum odit! <br /> <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsam inventore eos voluptatem? Nostrum laboriosam obcaecati voluptatem, tempora maxime beatae, autem animi, dicta fugiat illum iusto illo accusantium provident? Unde? <br /><br /></p>
      </div>
      <div className="menu"><Menu /></div>
    </div>
  )
}
export default Single