import "./style.css";

interface UserCardProps {
  id: number,
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

export function UserCard(props: UserCardProps) {
  
  return (
    <div className="userCard">
      <img className="userPic" src={props.avatar} />
      <div className="userInfo">
        <div>{`${props.first_name} ${props.last_name}`}</div>
        <div>{props.email}</div>
      </div>
    </div>
  );
}
