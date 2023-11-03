import { useAuth } from '../../hooks/useAuth';

const Logout = () => {
  const { logout } = useAuth();
  return(
    <div onClick={logout} style={{ cursor: 'pointer' }}>
      <span>Logout</span>
    </div>
  );
};

export default Logout;