import { useNavigate } from 'react-router-dom';

export function SignIn() {
  const navigate = useNavigate();

  function signIn() {
    navigate('/');
  }

  return (
    <div>
      SignIn
      <div>
        <button onClick={signIn}>Sign In</button>
      </div>
    </div>
  );
}
