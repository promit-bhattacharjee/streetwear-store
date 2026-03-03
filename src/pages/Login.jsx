import AuthForm from '../components/auth/AuthForm';

export default function Login() {
    return (
        <div className="min-h-screen bg-primary pt-32 pb-20 px-4">
            <AuthForm type="login" />
        </div>
    );
}
